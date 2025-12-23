import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import * as tf from '@tensorflow/tfjs';
import { motion } from 'framer-motion';
import { Activity, Cpu, Zap, BarChart3, ChevronRight } from 'lucide-react';

const RealTimeDemo = () => {
    const canvasRef = useRef(null);
    const sceneRef = useRef({ scene: null, camera: null, renderer: null, hand: null, fingers: [] });
    const modelRef = useRef(null);
    const [currentGesture, setCurrentGesture] = useState(0); // 0: Rest, 1: Fist, 2: Open, 3: Pinch, 4: Point
    const [prediction, setPrediction] = useState({ label: 'INITIALIZING', confidence: 0, latency: 0 });
    const [emgSignals, setEmgSignals] = useState([10, 10, 10, 10]);
    const gestureLabels = ["REST", "FIST", "OPEN", "PINCH", "POINT"];

    // 1. Initialize Three.js
    const initThree = useCallback(() => {
        if (!canvasRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, canvasRef.current.clientWidth / canvasRef.current.clientHeight, 0.1, 1000);
        camera.position.set(0, 0, 10);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        canvasRef.current.appendChild(renderer.domElement);

        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
        scene.add(hemiLight);

        const dirLight = new THREE.DirectionalLight(0x00bcd4, 1.2);
        dirLight.position.set(5, 5, 5);
        scene.add(dirLight);

        // Create Mechanical Hand
        const hand = new THREE.Group();

        // Palm
        const palmGeom = new THREE.BoxGeometry(2.2, 2.8, 0.6);
        const palmMat = new THREE.MeshPhongMaterial({ color: 0xe2e8f0, flatShading: true });
        const palm = new THREE.Mesh(palmGeom, palmMat);
        hand.add(palm);

        const detailGeom = new THREE.BoxGeometry(1.5, 0.4, 0.7);
        const detailMat = new THREE.MeshPhongMaterial({ color: 0x1a237e });
        const detail = new THREE.Mesh(detailGeom, detailMat);
        detail.position.z = 0.1;
        palm.add(detail);

        // Fingers
        const fingerConfigs = [
            { x: -1.3, y: -0.5, z: 0.2, rot: [0, 0, 0.8], name: 'Thumb', color: 0x00bcd4 },
            { x: -0.9, y: 1.4, z: 0, rot: [0, 0, 0], name: 'Index', color: 0xffffff },
            { x: -0.1, y: 1.5, z: 0, rot: [0, 0, 0], name: 'Middle', color: 0xffffff },
            { x: 0.7, y: 1.4, z: 0, rot: [0, 0, 0], name: 'Ring', color: 0xffffff },
            { x: 1.3, y: 1.1, z: 0, rot: [0, 0, 0], name: 'Pinky', color: 0xffffff }
        ];

        const fingerObjects = [];
        fingerConfigs.forEach((cfg) => {
            const group = new THREE.Group();
            group.position.set(cfg.x, cfg.y, cfg.z);
            group.rotation.set(...cfg.rot);

            const createSeg = (h, c, isTip) => {
                const g = new THREE.Group();
                const m = new THREE.Mesh(
                    new THREE.CylinderGeometry(isTip ? 0.12 : 0.18, 0.2, h, 8),
                    new THREE.MeshPhongMaterial({ color: c })
                );
                g.add(m);
                const joint = new THREE.Mesh(new THREE.SphereGeometry(0.22), new THREE.MeshPhongMaterial({ color: 0x334155 }));
                joint.position.y = -h / 2;
                g.add(joint);
                return g;
            };

            const s1 = createSeg(0.9, cfg.color, false); s1.position.y = 0.45; group.add(s1);
            const s2 = createSeg(0.7, cfg.color, false); s2.position.y = 1.25; group.add(s2);
            const s3 = createSeg(0.6, cfg.color, true); s3.position.y = 1.9; group.add(s3);

            fingerObjects.push(group);
            hand.add(group);
        });

        const wrist = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1.0, 1.2, 16), new THREE.MeshPhongMaterial({ color: 0x1a237e }));
        wrist.position.y = -2.0;
        hand.add(wrist);

        scene.add(hand);
        hand.rotation.x = -0.2;
        hand.rotation.y = -0.3;

        sceneRef.current = { scene, camera, renderer, hand, fingers: fingerObjects };

        const animate = () => {
            requestAnimationFrame(animate);
            hand.position.y = Math.sin(Date.now() * 0.001) * 0.15;
            hand.rotation.y += 0.002;
            renderer.render(scene, camera);
        };
        animate();
    }, []);

    // 2. Load Model
    useEffect(() => {
        const loadModel = async () => {
            try {
                const loadedModel = await tf.loadGraphModel('/model/model.json');
                modelRef.current = loadedModel;
                setPrediction(prev => ({ ...prev, label: 'READY' }));
            } catch (e) {
                console.error("Model load error", e);
                setPrediction(prev => ({ ...prev, label: 'ERROR' }));
            }
        };
        loadModel();
        initThree();

        return () => {
            if (sceneRef.current.renderer) {
                sceneRef.current.renderer.dispose();
            }
        };
    }, [initThree]);

    // 3. Update Finger Rotations
    useEffect(() => {
        const { fingers } = sceneRef.current;
        if (!fingers.length) return;

        const updateInterval = setInterval(() => {
            fingers.forEach((f, i) => {
                let targetX = 0;
                switch (currentGesture) {
                    case 0: targetX = 0.2; break;
                    case 1: targetX = 1.6; if (i === 0) targetX = 1.1; break;
                    case 2: targetX = -0.2; break;
                    case 3: if (i <= 1) targetX = 1.3; else targetX = 0.1; break;
                    case 4: if (i === 1) targetX = -0.1; else targetX = 1.6; break;
                    default: targetX = 0.2;
                }
                f.rotation.x += (targetX - f.rotation.x) * 0.15;
            });
        }, 16);

        return () => clearInterval(updateInterval);
    }, [currentGesture]);

    // 4. Inference Hub
    useEffect(() => {
        const runInference = async () => {
            if (!modelRef.current) return;

            const start = performance.now();

            // Generate Simulated Data
            const data = [];
            const newSignals = [];
            for (let j = 0; j < 4; j++) {
                const energy = currentGesture === 0 ? 0.1 : (0.4 + Math.random() * 0.6);
                newSignals.push(energy * 100);
            }
            setEmgSignals(newSignals);

            for (let i = 0; i < 200; i++) {
                const row = [];
                for (let j = 0; j < 4; j++) {
                    const amplitude = currentGesture === 0 ? 0.05 : 0.4;
                    row.push(Math.abs(Math.sin(i * 0.3 + j) * amplitude) + Math.random() * 0.05);
                }
                data.push(row);
            }

            const input = tf.tensor3d([data], [1, 200, 4]);
            const output = modelRef.current.predict(input);
            const scores = await output.data();
            const idx = scores.indexOf(Math.max(...scores));

            setPrediction({
                label: gestureLabels[idx],
                confidence: Math.max(...scores),
                latency: performance.now() - start
            });

            input.dispose();
            output.dispose();
        };

        const interval = setInterval(runInference, 150);
        return () => clearInterval(interval);
    }, [currentGesture]);

    return (
        <div className="flex flex-col flex-grow bg-surface-gray min-h-0 relative">
            {/* Background Canvas */}
            <div ref={canvasRef} className="absolute inset-0 z-0 bg-gradient-to-b from-slate-50 to-slate-200" />

            <div className="relative z-10 p-6 flex flex-col flex-grow max-w-7xl mx-auto w-full gap-6">
                <div className="flex justify-between items-start">
                    <div className="bg-white/40 backdrop-blur-md border border-slate-200 p-4 rounded-xl shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <Activity className="text-primary h-5 w-5" />
                            <h2 className="font-bold text-primary tracking-tight">REAL-TIME SENSORS</h2>
                        </div>
                        <div className="flex gap-8 px-4 h-32 items-end">
                            {emgSignals.map((sig, i) => (
                                <div key={i} className="flex flex-col items-center gap-2">
                                    <div className="w-4 bg-slate-100 rounded-full h-24 relative overflow-hidden">
                                        <motion.div
                                            animate={{ height: `${sig}%` }}
                                            className="absolute bottom-0 w-full bg-gradient-to-t from-primary to-accent"
                                        />
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-400">CH{i + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 w-64">
                        <div className="bg-primary p-6 rounded-2xl shadow-xl text-white">
                            <h3 className="text-[10px] font-bold opacity-60 tracking-[2px] mb-2">NEURAL PREDICTION</h3>
                            <div className="text-3xl font-black mb-4 tracking-tight">{prediction.label}</div>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-[10px] mb-1">
                                        <span>Confidence</span>
                                        <span>{(prediction.confidence * 100).toFixed(0)}%</span>
                                    </div>
                                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            animate={{ width: `${prediction.confidence * 100}%` }}
                                            className="h-full bg-accent shadow-[0_0_8px_#00bcd4]"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-between text-[10px]">
                                    <span>Inference Latency</span>
                                    <span className="text-accent underline">{(prediction.latency).toFixed(0)}ms</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-auto flex justify-between items-end pb-8">
                    <div className="bg-white/40 backdrop-blur-md border border-slate-200 p-6 rounded-2xl shadow-sm max-w-sm">
                        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-[2px] mb-4">Target Gesture</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {gestureLabels.map((g, i) => (
                                <button
                                    key={g}
                                    onClick={() => setCurrentGesture(i)}
                                    className={`px-4 py-3 rounded-lg text-xs font-bold transition-all flex items-center justify-between group
                                        ${currentGesture === i
                                            ? 'bg-primary text-white shadow-lg'
                                            : 'bg-white text-slate-600 hover:bg-slate-50'}`}
                                >
                                    {g}
                                    <div className={`w-1.5 h-1.5 rounded-full transition-transform
                                        ${currentGesture === i ? 'bg-accent scale-125' : 'bg-slate-200 group-hover:bg-slate-300'}`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {[
                            { icon: Cpu, label: "Neural Engine", sub: "V1.2 Active" },
                            { icon: Zap, label: "Power Level", sub: "98% Optimal" },
                            { icon: BarChart3, label: "Data Pipeline", sub: "4-Channel Sync" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/50 px-4 py-3 rounded-xl border border-white/50">
                                <item.icon className="h-4 w-4 text-primary" />
                                <div>
                                    <div className="text-[10px] font-bold text-slate-800">{item.label}</div>
                                    <div className="text-[9px] text-slate-500">{item.sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RealTimeDemo;
