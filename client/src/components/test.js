import React, { useEffect } from "react";
import gsap from 'gsap';

const MainText = (props) => {
  const data = [
    {
      sentence: "how are you",
      alternative: "fine thanks"
    },
    {
      sentence: "how was your day",
      alternative: "fabulous"
    }
  ];

  let textGroupFilterStyle = "#goo-1";
  let feblurStdDeviation = 0;

  let feGauRefs = []
  let feColRefs = []
  let sentenceRefs = []
  let alternativeRefs = []
  let timelineArr = []

  const mouseIn = (e, i) => {
    if (timelineArr[i]) {
      timelineArr[i].play()
    }
  };

  const mouseOut = (e, i) => {
    if (timelineArr[i]) {
      timelineArr[i].reverse()
    }
  };

  useEffect(() => {
    sentenceRefs.map((e, i) => {
      const tl = gsap.timeline({ paused: true })
      tl
      .to(feColRefs[i], {
          duration: 0.5,
          ease: "none",
          attr: { values: "1 0 0 0 0  0 1 0 0 0   1 0 1 0 0  0 0 0 18 -8" }
        }, "blur")
        .to(feGauRefs[i], {
          duration: 0.5,
          ease: "none",
          attr: { stdDeviation: 1.5 }
        }, "blur")
        .to(feColRefs[i], {
          duration: 0.5,
          ease: "none",
          attr: { values: "1 0 0 0 0  0 1 0 0 0   1 0 1 0 0  0 0 0 18 -8" }
        }, "blur")
        .to(feGauRefs[i], {
          duration: 0.5,
          ease: "none",
          attr: { stdDeviation: 1.5 }
        }, "blur")
        .to(sentenceRefs[i], {
          duration: 0.5,
          ease: "none",
          opacity: 0
        }, 0.4)
        .to(alternativeRefs[i], {
          duration: 0.5,
          ease: "none",
          opacity: 1
        }, 0)
        .to(feGauRefs[i], {
          duration: 0.5,
          ease: "none",
          attr: { stdDeviation: 0 }
        }, 0.5)
        .to(feColRefs[i], {
          duration: 0.5,
          ease: "none",
          attr: { values: "1 0 0 0 0  0 1 0 0 0  1 0 1 0 0  0 0 0 1 0" }
        }, 0.5)
      timelineArr.push(tl)
    })
  }, []);

  const addRef = e => {
    if (e && !sentenceRefs.includes(e) && e.className.baseVal === 'sentence') {
      sentenceRefs.push(e)
    } else if (e && !alternativeRefs.includes(e) && e.className.baseVal === 'alternative') {
      alternativeRefs.push(e)
    } else if (e && !feGauRefs.includes(e) && e.className.baseVal === 'feGau') {
      feGauRefs.push(e)
    } else if (e && !feColRefs.includes(e) && e.className.baseVal === 'feCol') {
      feColRefs.push(e)
    }
  }

  return (
    <div> {data.map((data, index) => {
      return (
        <a>
          <svg viewBox="0 0 100 20" preserveAspectRatio="xMinYMid meet" >
            <defs>
              <filter id="goo-1">
                <feGaussianBlur ref={addRef} className="feGau" in="SourceGraphic" stdDeviation={feblurStdDeviation} result="blur"></feGaussianBlur>
                <feColorMatrix ref={addRef} className="feCol" in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 1 0 1 0 0 0 0 0 1 0" result="goo"></feColorMatrix>
                <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
              </filter>
            </defs>
            <g onMouseEnter={e => mouseIn(e, index)} onMouseLeave={e => mouseOut(e, index)} style={{ filter: `url(${textGroupFilterStyle})` }}>
              <text className="sentence" style={{ opacity: '1' }} ref={addRef} x="0" y="15"> {data.sentence}</text>
              <text className="alternative" style={{ opacity: '0' }} ref={addRef} x="0" y="15"> {data.alternative}</text>
            </g>
          </svg>
        </a>
      )
    })} </div>
  );
};

export default MainText;
