import React from 'react';
import Language from './Language'
import { Link } from "gatsby"

const Header = props => {
    console.log(props);
    return (
        <header>
            <div style={{opacity: props.isVisible ? 1 : 0}}>
                <Link to={'/'}> <h1>Victor Audétat </h1></Link>
                <nav>
                    <Link to={'/contact'}> <p>Contact</p></Link>
                </nav>
            </div>
            <Language setLang={props.setLang} lang={props.lang} />
        </header>
    );
};

export default Header;