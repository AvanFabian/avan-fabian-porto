import { Suspense, useEffect, useState } from 
"react";
import { Canvas } from 
"@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from 
"@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const Computer = useGLTF('./comp/scene.gltf')
  return (
    // mesh tag purpose is to add light to the scene
    <mesh>
      <hemisphereLight intensity={0.15} 
      groundColor="black" />  
      <pointLight intensity={1} />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={Computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [-1.5, -3.25, -1.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
      </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Add a listener for change in screen size
    const mediaQuery = window.matchMedia('(max-width: 648px)')

    // Set the initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches)

    // Define a callback function to handle changes to 
    // the media query
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches)
    }

    // Add the callback function as a listener for
    // changes to the media query
    mediaQuery.addEventListener('change', 
    handleMediaQueryChange)
    return () => {
      // removeEventListener when the component is unmounted
      mediaQuery.removeEventListener('change',
      handleMediaQueryChange)
    }
  }, []) // [] is for the useEffect to run only once 
  return (
    // Canvas purpose is to render the scene
    <Canvas
      frameloop="demand"
      shadows
      // position: [20, 3, 5] is for camera position
      // fov: 50 is for camera zoom
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl = {{ preserveDrawingBuffer: true }}
    >
    { /* don't render or call any file if the content is still including an html tag like div etc. */ }
    { /* <Suspense fallback={<canvasLoader />}> */}
    { /* div below is for the canvas */}
      <Suspense fallback={<CanvasLoader />}>
      {/* Suspense is for loading the 3d model */}
        <OrbitControls 
          enableZoom={false} 
          // maxPolarAngle is for the camera to not rotate vertically
          maxPolarAngle={Math.PI / 2}
          // minPolarAngle is for the camera to not rotate vertically
          minPolarAngle={Math.PI / 2}
        />
        {/* isMobile is for the 3d model to be responsive */}
        <Computers isMobile={isMobile} />
      </Suspense>

      {/* Preload is for loading the 3d model */}
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas