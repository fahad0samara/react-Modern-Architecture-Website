import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

interface ModelProps {
  modelUrl: string;
}

function Model({ modelUrl }: ModelProps) {
  const { scene } = useGLTF(modelUrl);
  return <primitive object={scene} />;
}

interface ModelViewerProps {
  modelUrl: string;
}

const ModelViewer = ({ modelUrl }: ModelViewerProps) => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model modelUrl={modelUrl} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;