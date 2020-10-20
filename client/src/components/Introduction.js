import React from "react"

const Introduction = props => {
  return (
    props.data.map((e, i) => (
      <>
        {e.paragraphe.map((paragraphe, index) => (
          <section className="introduction"
            data-sal="fade"
            data-sal-duration="800"
            data-sal-delay="100"
            data-sal-easing="ease"
          >
            <h3 key={index}>{paragraphe['paragraphe_' + props.lang]}</h3>
          </section>
        ))}
      </>
    ))
  );
};

export default Introduction;
