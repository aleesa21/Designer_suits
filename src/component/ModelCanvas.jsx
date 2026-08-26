import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
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
      <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
        Loading object... {Math.round(progress)}%
      </span>
    </Html>
  );
}

function Model({ url, triggerSelector }) {
  const groupRef = useRef();
  const { scene } = useGLTF(url);

  // Auto-center the model exactly like the original's bounding-box fit
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.x -= center.x;
    scene.position.z -= center.z;
    scene.position.y = -1.2; // matches original's post-center offset
  }, [scene]);

  useGSAP(() => {
    gsap.set(groupRef.current.rotation, { y: -0.35, x: 0 });
    gsap.set(groupRef.current.position, { y: 0, z: 0 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: triggerSelector,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      })
      .to(groupRef.current.rotation, { y: Math.PI * 2, x: 0.25, ease: "none" })
      .to(groupRef.current.position, { y: -0.5, z: 1.5, ease: "none" }, 0);
  }, [triggerSelector]);

  useFrame(() => {
    groupRef.current.rotation.y += 0.0015;
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );                         
}

export default function ModelCanvas({
  url,
  triggerSelector = ".hero-section",
}) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 1000,
          position: [0, 0.8, 5.2], // exact original camera position
        }}
        gl={{
          antialias: true,
          alpha: true, // lets the page bg show through, same as original
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1,
        }}
        dpr={[1, 2]}
      >
        {/* Same fog color as the original — must match page bg for seamless blend */}
        <fogExp2 attach="fog" args={["#0c0c0c", 0.035]} />

        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 4]} intensity={2.5} />
        <directionalLight
          position={[-5, -2, -2]}
          intensity={1.2}
          color="#88bbff"
        />
        <pointLight position={[-3, 3, -2]} intensity={1.5} distance={10} />
        <Suspense fallback={<Loader />}>
          <Model url={url} triggerSelector={triggerSelector} />
        </Suspense>
      </Canvas>
    </div>
  );
}