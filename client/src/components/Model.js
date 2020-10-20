import React, { useState, useRef, useEffect } from "react"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader, useFrame } from 'react-three-fiber'
import { useSpring, animated } from 'react-spring/three'
import { navigate } from 'gatsby';


const Model = attr => {
    const [hovered, setHovered] = useState(false)
    const [active, setActive] = useState(false)

    const gltf = useLoader(GLTFLoader, '/static/model/sign/scene.gltf')
    const signRef = useRef()

    const getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    const { color, scale, position, ...props } = useSpring({
        color: active ? 'hotpink' : 'blue',
        scale: hovered ? [.14, .14, .14] : [.1, .1, .1],
    })

    useFrame(() => (signRef.current.rotation.y += .02, signRef.current.rotation.x -= .02))

    const height = document.getElementsByClassName('content')[0].clientHeight
    
    const redirect = () => {
        navigate('/contact', {
            state: {
                lang: attr.lang,
                setLang: attr.setLang
            }
        })
    }

    // position={[0,attr.position / height * 50 - 10, 0 ]}

    return (
        <>
            <animated.mesh
                ref={signRef}
                onPointerOver={e => {
                    setHovered(true)
                    attr.setCursor(true)
                }}
                onPointerOut={e => {
                    setHovered(false)
                    attr.setCursor(false)
                }}
                onClick={e => {
                    setActive(!active)
                    redirect()
                }}
                {...props}
                scale={scale}>
                <primitive
                    object={gltf.scene}>
                </primitive>
            </animated.mesh>
        </>
    )
}

export default Model