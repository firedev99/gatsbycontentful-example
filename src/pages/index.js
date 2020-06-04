import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Img from 'gatsby-image'
import SEO from "../components/seo"

const IndexPage = () => {
  const data =  useStaticQuery(graphql`
     query {
        image1: file(relativePath: {eq: "1.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        image2: file(relativePath: {eq: "2.jpg"}) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        image3: file(relativePath: {eq: "3.jpg"}) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
      }
  `)
  return(
    <Layout>
      <SEO title="Home" />
      <Link style={{marginRight: "8px"}} to="/page-2/">Contenful</Link>
      <Link to="/page-3/">Videos</Link>
      <div style={{marginTop: "32px"}}>
        <div className="image-1" style={{marginBottom: "50px"}}>
          <Img fluid={data.image1.childImageSharp.fluid} alt={data.image1.childImageSharp.fluid.originalName} />
        </div>
        <div className="image-2" style={{display: "flex"}}>
          <Img fluid={data.image2.childImageSharp.fluid} style={{width: "450px"}} alt={data.image2.childImageSharp.fluid.originalName} />
          <Img fluid={data.image3.childImageSharp.fluid} style={{width: "450px", marginLeft: "32px"}} alt={data.image3.childImageSharp.fluid.originalName} />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
