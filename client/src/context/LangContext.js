import React, { Component } from 'react';

const defaultLang = { lang: 'fr' }

export const LangContext = React.createContext(defaultLang)

export class LangProvider extends Component {
    state = {
        lang: null,
    }

    componentDidMount() {
        const lang = localStorage.getItem('lang')
        lang ? this.setState({ lang: lang }) : this.setState(defaultLang)
    }

    setLang = lang => {
        this.setState({ lang: lang })
        localStorage.setItem('lang', lang)
    }

    render() {
        const lang = this.state.lang
        return (
            <LangContext.Provider value={{
                lang: lang,
                setLang: lang => this.setLang(lang)
            }}>
                {this.props.children}
            </LangContext.Provider>
        );
    }
}