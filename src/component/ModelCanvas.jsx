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
  const groupRef = useRef();
  const { scene } = useGLTF(url);
  const { camera } = useThree();

  useEffect(() => {
    scene.scale.set(1, 1, 1);
    scene.position.set(0, -1.8, 0);
    scene.rotation.set(0, 0, 0);

    // Auto-centering calculation from index.html
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);

    scene.position.x -= center.x;
    scene.position.y -= center.y;
    scene.position.z -= center.z;

    // Fixed Y position matching index.html
    scene.position.y = -2.2;
  }, [scene]);

  useGSAP(() => {
    gsap.set(groupRef.current.rotation, { x: 0, y: -0.35, z: 0 });
    gsap.set(groupRef.current.position, { x: 0, y: 0, z: 0 });

    // 1. Primary scroll animation bound to document.body (matches index.html scroll rate)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=3000",
        scrub: 1.2,
      },
    });

    tl.to(groupRef.current.rotation, { y: Math.PI * 2, x: 0.25, ease: "none" }, 0)
      .to(groupRef.current.position, { y: -0.5, z: 1.5, ease: "none" }, 0)
      .to(camera.position, { z: 5, ease: "none" }, 0.5);

    // 2. Fade out container when passing the designated hero zone target
    const targetTrigger = triggerSelector || "body";
    const fadeTrigger = ScrollTrigger.create({
      trigger: targetTrigger,
      start: "75% top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const container = document.querySelector(".glb-canvas-container");
        if (container) {
          container.style.opacity = (1 - self.progress).toString();
        }
      },
    });

    return () => {
      tl.scrollTrigger?.kill();
      fadeTrigger.kill();
    };
  }, [camera, triggerSelector]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
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