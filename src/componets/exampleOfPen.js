import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function PenPreview() {
	useEffect(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			60,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);

		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(renderer.domElement);

		const loader = new GLTFLoader();
		let pen;

		loader.load(
			'/pen.glb',
			function (gltf) {
				console.log('Model loaded:', gltf);
				pen = gltf.scene;
				pen.scale.set(0.4, 0.4, 0.2);
				scene.add(pen);
			},
			undefined,
			function (error) {
				console.error('Error loading GLTF model:', error);
			}
		);

		//кручение модельки
		const controls = new OrbitControls(camera, renderer.domElement);
		controls.target.set(0, 0.5, 0);
		controls.update();
		controls.enablePan = false;
		controls.enableDamping = true;

		camera.position.set(5, 0, 5);

		//освещение........
		const light = new THREE.AmbientLight(0x404040);
		scene.add(light);
		const directionalLight1 = new THREE.DirectionalLight(0xffffff, 100);
		directionalLight1.position.set(1, 1, 0);
		scene.add(directionalLight1);

		const directionalLight2 = new THREE.DirectionalLight(0xffffff, 100);
		directionalLight2.position.set(-1, -1, 1);
		scene.add(directionalLight2);

		const animate = () => {
			requestAnimationFrame(animate);
			if (pen) {
				// pen.position. = 1;
			}

			controls.update();

			renderer.render(scene, camera);
		};

		animate();

		renderer.setClearColor(0xffffff, 0);

		return () => {
			renderer.dispose();
			document.body.removeChild(renderer.domElement);
		};
	}, []);

	return <div />;
}

export default PenPreview;
