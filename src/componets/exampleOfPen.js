import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

function PenPreview() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container || container.children.length > 0) {
            return; // Если контейнера нет или canvas уже существует, выходим
        }

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.set(5, 1, 0);
        camera.lookAt(0, 0, 0);
        
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);
        
        const loader = new GLTFLoader();
        let pen;

        loader.load('/pen.glb', function (gltf) {
            console.log('Model loaded:', gltf);
            pen = gltf.scene;
            pen.scale.set(0.7, 0.7, 0.6); // Начните с масштаба 1
            scene.add(pen);
            addTextToModel(pen); // Добавляем текст после загрузки модели
        }, undefined, function (error) {
            console.error('Error loading GLTF model:', error);
        });

        // Освещение
        const light = new THREE.AmbientLight(0x404040);
        scene.add(light);
        const directionalLight1 = new THREE.DirectionalLight(0xFFFFFF, 100);
        directionalLight1.position.set(1, 1, 0);
        scene.add(directionalLight1);

        const directionalLight2 = new THREE.DirectionalLight(0xFFFFFF, 100);
        directionalLight2.position.set(-1, -1, 1);
        scene.add(directionalLight2);


        // Управление камерой
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0, 0.5, 0);
        controls.enablePan = false;
        controls.enableDamping = true;

        // Анимация
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        renderer.setClearColor(0xffffff, 0);

        // Очистка
        return () => {
            renderer.dispose();
            container.removeChild(renderer.domElement);
        };
    }, []);

    const addTextToModel = (model) => {
        const fontLoader = new FontLoader();
        fontLoader.load('/fonts/Playfair Display_Regular.json', (font) => {
            const textGeometry = new TextGeometry('✨иван золо✨', {
                font: font,
                size: 0.6,
                height: 0.05,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.01,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5
            });

            const textMaterial = new THREE.MeshStandardMaterial({ color: 0xFFEFBC });
            textMaterial.roughness = 1.0;
            const textMesh = new THREE.Mesh(textGeometry, textMaterial);

            textMesh.position.set(0.95, -0.2, 3);
            textMesh.rotation.set(0, 1.565, 0);

            model.add(textMesh);
        });
    };

    return <div id='penPreview' ref={containerRef} style={{ width: '100%', height: '300px' }}></div>;
}

export default PenPreview;