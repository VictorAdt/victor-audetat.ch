import React, {useRef} from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Canvas, useLoader, useFrame, extend, useThree } from 'react-three-fiber'


extend({ OrbitControls })


const Controls = () => {
    const orbitRef = useRef()
    const { camera, gl } = useThree()
    useFrame(() => {
        orbitRef.current.update()
    })
    return (
        <orbitControls
            args={[camera, gl.domElement]}
            ref={orbitRef}
        />
    )
}

export default Controls
