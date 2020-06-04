import React from "react"
import Img from 'gatsby-image'
import { graphql } from "gatsby"
import Layout from "../components/layout"

const ComponentName = ({ 
    data: {
        product: {
            title,
            price,
            image: { fixed },
            info: { info }
        }
    }
}) => {
    return(
        <Layout>
           <Img fixed={fixed} alt={title} />
           <h3>{title}</h3>
           <h5>price: ${price}</h5>
           <p>{info}</p>
        </Layout>
    )
}

export const query = graphql`
query GetSingleProuduct($slug:String) {
    product: contentfulGatsbyExample(slug: {eq: $slug}) {
      title
      slug
      price
      info {
        info
      }
      image {
          fixed(height: 300, width:400, quality: 100) {
              ...GatsbyContentfulFixed
          }
      }
    }
  }
`

export default ComponentName

