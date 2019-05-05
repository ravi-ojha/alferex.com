import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql, withPrefix } from 'gatsby';
import get from 'lodash/get';
import {
  Carousel,
} from 'antd';
import { Grid, Segment, List, Breadcrumb, Image, Container, Header } from 'semantic-ui-react';


import SiteHeader from '../components/Header';
import Footer from '../components/Footer';
import '../../semantic/semantic-dist/semantic.css';
import '../assets/custom.css';

class ProductPostTemplate extends React.PureComponent {
  render() {
    const { location, data, pageContext } = this.props;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const product = data.productsJson;
    const siteDescription = product.description;
    const { previous, next } = pageContext;

    const carouselContent = product.images.map((image, idx) => (
      <Image alt={product.title} src={withPrefix(image)} size="medium" key={idx} />
    ));

    const carouselProps = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      effect: 'fade',
      autoplay: true,
    };

    return (
      <div>
        <SiteHeader {...this.props} />
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${product.title} | ${siteTitle}`}
        />
        <Segment basic style={{ background: '#ffffff' }}>
          <Container>
            <Segment basic style={{ marginBottom: '0' }}>
              <Breadcrumb size="large">
                <Breadcrumb.Section link><Link to="/">Home</Link></Breadcrumb.Section>
                <Breadcrumb.Divider icon="right chevron" />
                <Breadcrumb.Section link><Link to="/products">Products</Link></Breadcrumb.Section>
                <Breadcrumb.Divider icon="right chevron" />
                <Breadcrumb.Section active>{product.title}</Breadcrumb.Section>
              </Breadcrumb>
            </Segment>
            <Segment basic>
              <Header as="h1" textAlign="center" className="about-header alferex-header">
                {product.title}
              </Header>
              <Segment vertical style={{ padding: '5em 0' }}>
                <Container>
                  <Grid stackable columns={2}>
                    <Grid.Column>
                      <Segment basic>
                        <Carousel {...carouselProps}>
                          {carouselContent}
                        </Carousel>
                      </Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment basic>
                        <List divided relaxed="very" size="large">
                          <List.Item>
                            <List.Content>
                              <List.Header>Description</List.Header>
                              {product.description}
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content>
                              <List.Header>Material</List.Header>
                              {product.material}
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content>
                              <List.Header>Type</List.Header>
                              {product.type}
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content>
                              <List.Header>Product</List.Header>
                              {product.product}
                            </List.Content>
                          </List.Item>
                        </List>
                      </Segment>
                    </Grid.Column>
                  </Grid>
                </Container>
              </Segment>
            </Segment>
          </Container>
        </Segment>
        <Footer />
      </div>
    );
  }
}

export default ProductPostTemplate;

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
`;
