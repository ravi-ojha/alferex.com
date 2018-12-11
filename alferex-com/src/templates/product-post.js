import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'
import get from 'lodash/get'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'

class ProductPostTemplate extends React.Component {
  
  render() {
    console.log(this.props);
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const product = this.props.data.productsJson;
    const siteDescription = product.description;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${product.title} | ${siteTitle}`}
        />
        <h1>{product.title}</h1>
      </Layout>
    )
  }
}

export default ProductPostTemplate

export const pageQuery = graphql`
  query ProductPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    productsJson(fields: { slug: { eq: $slug } }) {
      id
      title
      description
      material
      type
      product
      images
    }
  }
`
