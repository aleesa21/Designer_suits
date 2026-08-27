import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Html, useProgress } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/45 whitespace-nowrap">
        Loading object... {Math.round(progress)}%
      </div>
    </Html>
  );
}

function Model({ url, triggerSelector }) {
  const scrollGroupRef = useRef(); // Outer group: managed by GSAP
  const idleGroupRef = useRef();   // Inner group: managed by useFrame
  const { scene } = useGLTF(url);
  const { camera } = useThree();

 // 1. Reset initial setup values to 0
useEffect(() => {
  scene.scale.set(1, 1, 1);
  scene.position.set(0, -1.8, 0);
  scene.rotation.set(0, 0, 0); // Ensures base mesh starts facing front

  const box = new THREE.Box3().setFromObject(scene);
  const center = new THREE.Vector3();
  box.getCenter(center);

  scene.position.x -= center.x;
  scene.position.y -= center.y;
  scene.position.z -= center.z;

  scene.position.y = -2.2;
}, [scene]);

useGSAP(() => {
  // 2. Set outer group rotation Y to 0 (Face Front)
  gsap.set(scrollGroupRef.current.rotation, { x: 0, y: 0, z: 0 });
  gsap.set(scrollGroupRef.current.position, { x: 0, y: 0, z: 0 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: document.body,
      start: "top top",
      end: "+=3000",
      scrub: 1.2,
    },
  });

  // Rotation starts smoothly from 0 as you scroll down
  tl.to(scrollGroupRef.current.rotation, { y: Math.PI * 0.75, x: 0.15, ease: "none" }, 0)
    .to(scrollGroupRef.current.position, { y: -0.5, z: 1.5, ease: "none" }, 0)
    .to(camera.position, { z: 5, ease: "none" }, 0.5);

  // ... (fade trigger code)
}, [camera, triggerSelector]);
  // Continuously rotate ONLY the inner group
  useFrame(() => {
    if (idleGroupRef.current) {
      idleGroupRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <group ref={scrollGroupRef}>
      <group ref={idleGroupRef}>
        <primitive object={scene} />
      </group>
    </group>
  );
}
export default function ModelCanvas({ url, triggerSelector }) {
  return (
    <div className="glb-canvas-container fixed inset-0 z-[1] pointer-events-none transition-opacity duration-300">
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 1000,
          position: [0, 0.5, 5],
        }}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
        }}
        dpr={[1, 2]}
      >
        <fogExp2 attach="fog" args={["#0c0c0c", 0.035]} />

        {/* Ambient & Directional Lights matching index.html */}
        <ambientLight intensity={1.0} color="#ffffff" />
        <directionalLight position={[5, 5, 4]} intensity={2.5} color="#ffffff" />
        <directionalLight position={[-5, -2, -2]} intensity={1.2} color="#88bbff" />
        <pointLight position={[-3, 3, -2]} intensity={1.5} distance={10} color="#ffffff" />

        <Suspense fallback={<Loader />}>
          <Model url={url} triggerSelector={triggerSelector} />
        </Suspense>
      </Canvas>
    </div>
  );
}