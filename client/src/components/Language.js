import React from 'react';

const Language = props => {
    console.log(props.lang);
    return (
        <div>
            <button
                style={{ textDecoration: props.lang === 'fr' ? 'underline' : 'none' }}
                onClick={() => {
                    props.setLang('fr')
                }}>
                fr
            </button>
            <button
                style={{ textDecoration: props.lang === 'en' ? 'underline' : 'none' }}
                onClick={() => {
                    props.setLang('en')
                }}>
                en
            </button>
        </div>
    );
};

export default Language;