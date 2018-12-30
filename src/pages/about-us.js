import React from 'react';
import { Link } from 'gatsby';
import { Segment, Header, Breadcrumb, Container } from 'semantic-ui-react';


import SiteHeader from '../components/Header';
import Footer from '../components/Footer';
import AboutAlferex from '../components/AboutAlferex';
import '../../semantic/semantic-dist/semantic.css';
import '../assets/custom.css';

class AboutUs extends React.PureComponent {
  render() {

    return (
      <div>
        <SiteHeader {...this.props} />
        <Segment basic style={{ background: '#ffffff' }}>
          <Container>
            <Segment basic style={{ marginBottom: '0' }}>
              <Breadcrumb size="large">
                <Breadcrumb.Section link><Link to="/">Home</Link></Breadcrumb.Section>
                <Breadcrumb.Divider icon="right chevron" />
                <Breadcrumb.Section active>About Us</Breadcrumb.Section>
              </Breadcrumb>
            </Segment>
            <Segment basic>
              <Header as="h1" textAlign="center" className="about-header alferex-header">
                Mission Statement
              </Header>
              <AboutAlferex />
            </Segment>
          </Container>
        </Segment>
        <Footer />
      </div>
    );
  }
}

export default AboutUs;
