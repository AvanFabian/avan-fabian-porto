import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { 
  Decal, Float, OrbitControls, Preload, useTexture
 } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Ball = (props) => {
  // props.imgUrl, imgUrl is the url of the image 
  // to be used as a decal
  const [decal] = useTexture([props.imgUrl])
  return (
    <Float speed={1.75} rotationIntensity={1}
    floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.25]} />
      <mesh castShadow receiveShadow scale={2.75}>
      {/* args in icosahedronGeometry is the radius */}
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#fff8aeb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal 
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      gl = {{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
      {/* Suspense is for loading the 3d model */}
        <OrbitControls enableZoom={false}/>
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas