import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from 'react-three-fiber'
import Model from './Model'

const Contact = props => {
    const [cursor, setCursor] = useState(false)
    const [position, setPosition] = useState(null)


    const style = {
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: '0',
        left: '0',
        cursor: cursor ? 'pointer' : null
    }

    useEffect(() => {
        window.addEventListener('scroll', () => setPosition(window.scrollY));
      }, []);
    
    return (
        <Canvas style={style} onScroll={() => console.log('asdasd')}>
            <Suspense fallback={null}>
                <Model position={position} setCursor={setCursor} lang={props.lang} setLang={props.setLang} />
                <pointLight position={[-10, -10, 10]} penumbra={1} castShadow/>
                <pointLight position={[10, 10, 10]} penumbra={1} castShadow/>
            </Suspense>
        </Canvas>

    );
};

export default Contact;