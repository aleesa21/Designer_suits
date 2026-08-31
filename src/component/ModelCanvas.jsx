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

function FeatureCallout3D({ position, tag, title, desc, active }) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.012, 16, 16]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={active ? 1 : 0}
        />
      </mesh>

      <Html
        center={false}
        className={`transition-all duration-500 ease-out transform pointer-events-none ${
          active
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-90 translate-y-2"
        }`}
      >
        <div className="relative flex items-center -translate-x-full -translate-y-1/2 -ml-3">
          <div className="glass-badge p-2.5 sm:p-3 space-y-0.5 sm:space-y-1 rounded-sm border-l-2 border-l-primary shadow-2xl bg-black/90 backdrop-blur-md w-[150px] sm:w-[190px]">
            <span className="text-[8px] font-mono uppercase text-primary tracking-widest block">
              {tag}
            </span>
            <h3 className="text-[10px] font-bold uppercase tracking-wider text-foreground">
              {title}
            </h3>
            <p className="text-[9px] font-light leading-snug text-foreground-subtle">
              {desc}
            </p>
          </div>

          <div className="w-6 sm:w-10 h-[1px] bg-gradient-to-r from-primary to-white/80 shrink-0" />
          <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0 -ml-0.5 animate-ping" />
        </div>
      </Html>
    </group>
  );
}

function Model({ url, activeFeatureIndex }) {
  const scrollGroupRef = useRef();
  const idleGroupRef = useRef();
  const { scene } = useGLTF(url);
  const { camera } = useThree();

  useEffect(() => {
    scene.scale.set(1, 1, 1);
    scene.position.set(0, -1.8, 0);
    scene.rotation.set(0, 0, 0);

    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);

    scene.position.x -= center.x;
    scene.position.y -= center.y;
    scene.position.z -= center.z;

    scene.position.y = -2.2;
  }, [scene]);

  useGSAP(() => {
    gsap.set(scrollGroupRef.current.rotation, { x: 0, y: 0, z: 0 });
    gsap.set(scrollGroupRef.current.position, { x: 0, y: 0, z: 0 });

    const mm = gsap.matchMedia();

    // MOBILE ANIMATION TIMELINE (< 768px)
    mm.add("(max-width: 767px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".mobile-features-container",
          start: "top 80%",
          end: "bottom 30%",
          scrub: 0.3,
          invalidateOnRefresh: false,
        },
      });

      tl.to(idleGroupRef.current.rotation, { y: 0, ease: "power1.inOut" }, 0)
        // Feature 1: Lapel Focus
        .to(
          scrollGroupRef.current.position,
          { x: 0.12, y: -0.02, z: 0.35, ease: "power1.inOut" },
          0,
        )
        .to(
          scrollGroupRef.current.rotation,
          { y: Math.PI * 0.08, x: 0.02, ease: "power1.inOut" },
          0,
        )

        // Feature 2: Waist Cut Focus
        .to(
          scrollGroupRef.current.position,
          { x: 0.1, y: -0.15, z: 0.28, ease: "power1.inOut" },
          0.5,
        )
        .to(
          scrollGroupRef.current.rotation,
          { y: Math.PI * 0.45, x: 0.03, ease: "power1.inOut" },
          0.5,
        )

        // Feature 3: Back Tailoring Focus
        .to(
          scrollGroupRef.current.position,
          { x: 0.08, y: -0.18, z: 0.22, ease: "power1.inOut" },
          1.0,
        )
        .to(
          scrollGroupRef.current.rotation,
          { y: Math.PI * 0.95, x: 0.05, ease: "power1.inOut" },
          1.0,
        );
    });

    // DESKTOP ANIMATION TIMELINE (>= 768px)
    mm.add("(min-width: 768px)", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#model-hero-zone",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
            invalidateOnRefresh: false,
          },
        })
        .to(
          scrollGroupRef.current.rotation,
          { y: Math.PI * 0.75, x: 0.08, ease: "none" },
          0,
        )
        .to(
          scrollGroupRef.current.position,
          { y: -0.3, z: 0.8, ease: "none" },
          0,
        );
    });

    return () => mm.revert();
  }, [camera]);

  useFrame(() => {
    if (idleGroupRef.current && activeFeatureIndex === -1) {
      idleGroupRef.current.rotation.y += 0.0012;
    }
  });

  return (
    <group ref={scrollGroupRef}>
      <group ref={idleGroupRef}>
        <primitive object={scene} />
      </group>

      <FeatureCallout3D
        position={[-0.08, 0.42, 0.18]}
        tag="01 / STRUCTURE"
        title="Silk Peak Lapel"
        desc="Hand-stitched padded shoulders & silk-faced lapel."
        active={activeFeatureIndex === 0}
      />

      <FeatureCallout3D
        position={[-0.02, -0.05, 0.18]}
        tag="02 / SILHOUETTE"
        title="Precision Waist Cut"
        desc="Tapered architectural silhouette tailored with English flannel."
        active={activeFeatureIndex === 1}
      />

      <FeatureCallout3D
        position={[0.02, 0.38, -0.15]}
        tag="03 / CRAFTSMANSHIP"
        title="Worsted Wool Finish"
        desc="100% Irish worsted wool with hand-finished lining."
        active={activeFeatureIndex === 2}
      />
    </group>
  );
}

export default function ModelCanvas({ url, activeFeatureIndex }) {
  useEffect(() => {
    ScrollTrigger.config({ ignoreMobileResize: true });
  }, []);

  return (
    <div className="glb-canvas-container fixed inset-0 h-[100svh] w-screen z-[1] pointer-events-none transition-opacity duration-300">
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 1000,
          position: [0, 0.8, 5.2],
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

        <ambientLight intensity={1.0} color="#ffffff" />
        <directionalLight
          position={[5, 5, 4]}
          intensity={2.5}
          color="#ffffff"
        />
        <directionalLight
          position={[-5, -2, -2]}
          intensity={1.2}
          color="#88bbff"
        />
        <pointLight
          position={[-3, 3, -2]}
          intensity={1.5}
          distance={10}
          color="#ffffff"
        />

        <Suspense fallback={<Loader />}>
          <Model url={url} activeFeatureIndex={activeFeatureIndex} />
        </Suspense>
      </Canvas>
    </div>
  );
}
