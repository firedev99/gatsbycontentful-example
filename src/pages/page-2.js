import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from 'gatsby'

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulGatsbyExample(filter: {node_locale: {eq: "en-US"}}) {
        nodes {
          title
          info {
            info
          }
          slug
          image {
            fluid(quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  
  `)
  const {
    allContentfulGatsbyExample: { nodes: products }
  } = data
  console.log(products)
  return(
    <Layout>
      <SEO title="Page two" />
      <div style={{display: "flex", justifyContent: "center"}}>
          {products.map(product => (
             <div key={product.id} style={{height: "300px", width: "360px", marginBottom: "30px"}}>
                <h3 style={{letterSpacing: "1px", textTransform: "uppercase"}} >{product.title}</h3>
                <Img style={{width: "140px", marginBottom: "16px"}} fluid={product.image.fluid} alt={product.title} />
                <Link to={`page-2/${product.slug}`}>more details</Link>
              </div>
          ))}
        
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
