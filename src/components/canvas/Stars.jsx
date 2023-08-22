import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } 
from '@react-three/drei'

import * as random 
from 'maath/random/dist/maath-random.esm'

const Stars = (props) => {
  const ref = useRef()

  const sphere = random.inSphere(new Float32Array(4500),
   { radius:1.2})

   useFrame((state, delta) => {
    // delta is the time between frames
    ref.current.rotation.x += 0.0005
    ref.current.rotation.y += 0.0005
   })

  return (
    // group is a container for other objects
    <group>    
      <Points ref={ref} positions={sphere} 
      frustumCulled {...props}>
        <PointMaterial 
        transparent 
        color='#f272c8' 
        size={0.002} 
        sizeAttenuation={true}
        depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute
    inset-0 z-[-1]'>
      <Canvas camera={{ position:[0, 0, 1] }}>
        <Suspense>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas