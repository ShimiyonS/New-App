import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'
import marcus from "../../3D_Models/marcus.glb"

const ProductModel  = (props) => {
    const { scene } = useGLTF(marcus);
    return <primitive object={scene}  scale={0.01} {...props} />
}

export default function Model() {
  return (
    <div className="model" style={{ width: '100%', minHeight: '100vh' }}>
      <Canvas dpr={[1,2]} shadows camera={{ fov: 75 }} style={{ position: "absolute" }} >
        <color  attach="background" args={['#fff']} />
        <PresentationControls speed={3} global zoom={.5} polar={[-0.1, Math.PI/4]} >
          <Stage environment={null}>
            <ProductModel scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  )
}
