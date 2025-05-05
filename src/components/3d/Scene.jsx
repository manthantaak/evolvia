
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Float, Text, Sphere } from '@react-three/drei';
import { Vector3 } from 'three';
import { motion } from 'framer-motion-3d';

const FloatingParticles = ({ count = 100, radius = 10 }) => {
  const particles = useRef([]);
  const group = useRef();

  useEffect(() => {
    particles.current = Array.from({ length: count }, () => ({
      position: new Vector3(
        (Math.random() - 0.5) * radius,
        (Math.random() - 0.5) * radius,
        (Math.random() - 0.5) * radius
      ),
      speed: Math.random() * 0.01 + 0.002,
      offset: Math.random() * Math.PI * 2,
      scale: Math.random() * 0.5 + 0.5,
      color: [
        Math.random() * 0.2 + 0.3,
        Math.random() * 0.2 + 0.5,
        Math.random() * 0.2 + 0.8,
      ],
    }));
  }, [count, radius]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    
    group.current.children.forEach((particle, i) => {
      const data = particles.current[i];
      
      // Circular motion with different speeds and offsets
      particle.position.x = data.position.x + Math.sin(time * data.speed + data.offset) * 2;
      particle.position.y = data.position.y + Math.cos(time * data.speed + data.offset) * 2;
      particle.position.z = data.position.z + Math.sin(time * data.speed * 0.5 + data.offset) * 2;
    });
  });

  return (
    <group ref={group}>
      {particles.current.map((data, i) => (
        <motion.mesh
          key={i}
          position={[data.position.x, data.position.y, data.position.z]}
          initial={{ scale: 0 }}
          animate={{ scale: data.scale }}
          transition={{ duration: 1, delay: i * 0.01 }}
        >
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color={`rgb(${data.color[0] * 255}, ${data.color[1] * 255}, ${data.color[2] * 255})`} toneMapped={false} />
        </motion.mesh>
      ))}
    </group>
  );
};

const DigitalMarketingText = () => {
  const { viewport } = useThree();
  const isMobile = viewport.width < 5;
  
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
      <Text
        font="/fonts/Poppins-Bold.ttf"
        position={[0, 0, 0]}
        fontSize={isMobile ? 0.5 : 0.8}
        color="#4f8bff"
        anchorX="center"
        anchorY="middle"
      >
        DIGITAL MARKETING
      </Text>
    </Float>
  );
};

const GlowingSphere = () => {
  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
      <Sphere args={[1.5, 32, 32]} position={[0, 0, -5]}>
        <meshBasicMaterial color="#1a56db" toneMapped={false} opacity={0.1} transparent />
      </Sphere>
    </Float>
  );
};

const Scene = () => {
  const controlsRef = useRef();
  
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = true;
      controlsRef.current.autoRotateSpeed = 0.5;
    }
  }, []);

  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <color attach="background" args={['#050505']} />
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        
        <FloatingParticles count={150} radius={15} />
        <DigitalMarketingText />
        <GlowingSphere />
        
        <OrbitControls
          ref={controlsRef}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Scene;
