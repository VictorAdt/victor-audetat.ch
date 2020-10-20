/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import "./styles.scss"
import Footer from './Footer'


const Layout = props => {

  const [isVisible, setVisible] = useState(true)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let lastScrollTop = 0

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > lastScrollTop){
        setVisible(false)
      } else {
        setVisible(true)
      }
      lastScrollTop = window.scrollY
    })
  }, []);

  console.log(isVisible);

  return (
    <>
      <Header isVisible={isVisible} siteTitle={data.site.siteMetadata?.title || `Title`} setLang={props.setLang} lang={props.lang} />
      <div className={`content`}>
        <main>{props.children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
