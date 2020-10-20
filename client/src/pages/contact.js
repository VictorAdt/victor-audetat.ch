import React, { useState } from 'react';
import Layout from '../components/layout';
import { LangContext } from './../context/LangContext'

const Contact = ({ data }) => {

    const [contact, setContact] = useState({
        name: '',
        email: '',
        subject: '',
        honeypot: '', // if any value received in this field, form submission will be ignored.
        message: '',
        replyTo: 'doubleo.vk@gmail.com',
        accessKey: 'e96a811b-8460-4e0f-856f-0e0e3846b4e2'
    });

    const handleChange = e => {
        setContact({ [e.target.name]: e.target.value });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await fetch('https://api.staticforms.xyz/submit', {
                method: 'POST',
                body: JSON.stringify(contact),
                headers: { 'Content-Type': 'application/json' }
            });
            const json = await res.json();
            if (json.success) {
                alert('yes')
            }
        } catch (e) {
            console.log('An error occurred', e)
        }
    }

    return (
        <LangContext.Consumer>
            { langContext => (
                <Layout lang={langContext.lang} setLang={langContext.setLang}>
                    <form className="form"
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-delay="100"
                        data-sal-easing="ease"
                    >
                        {
                            data.allStrapiForm.nodes[0].form_field.map((form, index) => (
                                <div className="group">
                                    {
                                        form.type !== 'textarea' &&
                                        <input
                                            className={form.name}
                                            name={form.name}
                                            key={index}
                                            onChange={handleChange}
                                            type={form.type}
                                            required
                                        />

                                    }

                                    {
                                        form.type === 'textarea' &&
                                        <textarea
                                            name={form.name}
                                            key={index}
                                            onChange={handleChange}
                                            required
                                        />
                                    }

                                    <span className="highlight"></span>
                                    <label>{form['label_' + langContext.lang]}</label>
                                </div>
                            ))
                        }
                        <button type="submit" onClick={handleSubmit}>{langContext.lang === 'fr' ? 'Envoyer' : 'Send'}</button>
                    </form>
                </Layout>
            )}
        </LangContext.Consumer>
    );
};

export default Contact;


export const pageQuery = graphql`
query {
    allStrapiForm {
        nodes {
          form_field {
            id
            label_en
            label_fr
            name
            type
          }
        }
      }
    }
`

