import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

import get from 'lodash/get';
import { Segment, Header, Breadcrumb, Container } from 'semantic-ui-react';


import SiteHeader from '../components/Header';
import Footer from '../components/Footer';
import PrivacyDetails from '../components/PrivacyDetails';
import '../../semantic/semantic-dist/semantic.css';
import '../assets/custom.css';

class Privacy extends React.PureComponent {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    );

    return (
      <div>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${siteTitle}`}
        />
        <SiteHeader {...this.props} />
        <Segment basic style={{ background: '#ffffff' }}>
          <Container>
            <Segment basic style={{ marginBottom: '0' }}>
              <Breadcrumb size="large">
                <Breadcrumb.Section link><Link to="/">Home</Link></Breadcrumb.Section>
                <Breadcrumb.Divider icon="right chevron" />
                <Breadcrumb.Section active>Privacy and Terms</Breadcrumb.Section>
              </Breadcrumb>
            </Segment>
            <Segment basic>
              <Header as="h1" textAlign="center" className="about-header alferex-header">
                Privacy and Terms
              </Header>
              <PrivacyDetails />
            </Segment>
          </Container>
        </Segment>
        <Footer />
      </div>
    );
  }
}

export default Privacy;
