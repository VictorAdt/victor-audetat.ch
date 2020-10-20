import React from 'react';

const TextBlock = props => {
    return (
        <section className="textBlock">
            {props.data.map((e, i) => (
                e.service.map((paragraphe, index) => (
                    <div
                        data-sal="slide-up"
                        data-sal-duration="800"
                        data-sal-delay="100"
                        data-sal-easing="ease"
                    >
                        <h4>{paragraphe['title_' + props.lang]}</h4>
                        <p key={index}>{paragraphe['paragraphe_' + props.lang]}</p>
                    </div>
                ))
            ))}

        </section>
    )
};

export default TextBlock;

/*

    Des outils modernes
    Je travaille principalement avec react (gatsbyJS et nextJS) pour votre site web sur-mesure et offrir la meilleure experience utlisateur.

    Sur mesure
    Je developpe votre site web, avec vous, sur mesure et selon vos attentes. Une libérté de création infini.

    Flexibilité
    Double casquette, je peux vous accompagner sur vos projet de la maquette au produit final.


*/