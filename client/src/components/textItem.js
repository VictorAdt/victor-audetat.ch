import React, { useState, useEffect } from 'react';
import { TimelineLite } from "gsap/all";

const MainText = props => {
    let textGroupFilterStyle = '#goo-1'
    let feblurStdDeviation = 0

    const [toggle, setToggle] = useState(false);

    const [tl] = useState(new TimelineLite({
        paused: true,
    }))

    let text_1 = null;
    let text_2 = null;
    let feGau = null;
    let feColor = null;

    const toggleTimeline = () => {
        setToggle(!toggle);
    };


    useEffect(() => {
        tl
            .to(feColor, {
                duration: 0.5,
                ease: "none",
                attr: { values: "1 0 0 0 0  0 1 0 0 0   1 0 1 0 0  0 0 0 18 -8" }
            }, "blur")
            .to(feGau, {
                duration: 0.5,
                ease: "none",
                attr: { stdDeviation: 1.5 }
            }, "blur")
            .to(text_1, {
                duration: 0.5,
                ease: "none",
                opacity: 0
            }, 0.4)
            .to(text_2, {
                duration: 0.5,
                ease: "none",
                opacity: 1
            }, 0)
            .to(text_1, {
                duration: 1,
                ease: "Power2.easeInOut",
                x: 8
            }, 0)
            .to(text_2, {
                duration: 1,
                ease: "Power2.easeInOut",
                startAt: { x: -8 },
                x: 0
            }, 0)
            .to(feGau, {
                duration: 0.5,
                ease: "none",
                attr: { stdDeviation: 0 }
            }, 0.5)
            .to(feColor, {
                duration: 0.5,
                ease: "none",
                attr: { values: "1 0 0 0 0  0 1 0 0 0   1 0 1 0 0  0 0 0 1 0" }
            }, 0.5)
            .reverse();
    }, []);

    useEffect(() => {
        tl.reversed(!toggle);
    }, [toggle]);

    return (
        <div>
            <a class="menu__item">
                <svg class="menu__text" viewBox="0 0 100 20" preserveAspectRatio="xMinYMid meet">
                    <defs>
                        <filter id="goo-1">
                            <feGaussianBlur ref={e => feGau = e} in="SourceGraphic" stdDeviation={feblurStdDeviation} result="blur"></feGaussianBlur>
                            <feColorMatrix ref={e => feColor = e} in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 1 0 1 0 0 0 0 0 1 0" result="goo"></feColorMatrix>
                            <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
                        </filter>
                    </defs>
                    <g onMouseEnter={toggleTimeline} onMouseLeave={toggleTimeline} style={{ filter: `url(${textGroupFilterStyle})` }}>
                        <text style={{ opacity: '1' }} ref={e => text_1 = e} x="0" y="15"> {props.text.sentence}</text>
                        <text style={{ opacity: '0' }} ref={e => text_2 = e} x="0" y="15"> {props.text.alternative}</text>
                    </g>
                </svg>
            </a>
        </div>
    );
};

export default MainText;