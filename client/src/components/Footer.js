import React, { useRef, Suspense } from 'react';
import { Canvas, useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Footer = () => {

    const socialMedia = [
        {name: 'linkedin', link: 'https://ch.linkedin.com/in/victor-aud%C3%A9tat-8aa43315b'},
        {name: 'instagram', link: 'instagram'},
        {name: 'github', link: 'github'},
    ]

    const getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    const LogoModel = name => {
        const gltf = useLoader(GLTFLoader, `/static/model/${name.name}_logo/scene.glb`)
        const logoRef = useRef()
        const yRotationSpeed = getRandomArbitrary(0.005, 0.1)
        const xRotationSpeed = getRandomArbitrary(0.005, 0.1)
        useFrame(() => (logoRef.current.rotation.y += yRotationSpeed, logoRef.current.rotation.x -= xRotationSpeed))
        return (
            <mesh
                ref={logoRef}
                scale={[60, 60, 60]}
            >
                <primitive
                    object={gltf.scene}>
                </primitive>
            </mesh>
        )
    }

    const style = {
        height: '120px',
        width: '120px',
    }

    return (
        <footer>
            <>
                {socialMedia.map((link, index) => (
                    link &&
                    <div className="footer__socialMedia__item">
                        <Canvas style={style} key={index}>
                            <Suspense fallback={null}>
                                <LogoModel name={link.name} />
                            </Suspense>
                            <pointLight position={[10, 10, 10]} penumbra={1} />
                        </Canvas>
                        <a target="blank" href={link.link}>{link.name}</a>
                    </div>
                ))
                }
            </>
        </footer>
    );
};

export default Footer;