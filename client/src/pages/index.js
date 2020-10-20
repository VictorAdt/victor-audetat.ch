import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Introduction from '../components/Introduction'
import ContactButton from '../components/ContactButton'
import TextBlock from '../components/TextBlock'
import './../components/font.css'
import { LangContext } from "../context/LangContext"

const IndexPage = ({ data }) => {


  return (
    <LangContext.Consumer>
      { langContext => ( 
        <Layout setLang={langContext.setLang} lang={langContext.lang} style={{ position: 'relative', zIndex: 10 }}>
          <SEO title="Home" />
          <Introduction lang={langContext.lang} data={data.allStrapiIntroduction.nodes} />
          <TextBlock lang={langContext.lang} data={data.allStrapiTextBlock.nodes} />
          <ContactButton lang={langContext.lang} setLang={langContext.setLang} />
        </Layout>
      )}
    </LangContext.Consumer>
  )
}

export default IndexPage

export const pageQuery = graphql`
query MyQuery {
  allStrapiTextBlock {
    nodes {
      service {
        id
        paragraphe_en
        paragraphe_fr
        title_en
        title_fr
      }
    }
  }
  allStrapiIntroduction {
    nodes {
      paragraphe {
        id
        paragraphe_en
        paragraphe_fr
      }
    }
  }
}
`