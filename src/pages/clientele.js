import React from 'react';
import { Link } from 'gatsby';
import { Segment, Header, Breadcrumb, Container } from 'semantic-ui-react';


import SiteHeader from '../components/Header';
import Footer from '../components/Footer';
import ClienteleCarousel from '../components/Clientele';
import '../../semantic/semantic-dist/semantic.css';
import '../assets/custom.css';

class Clientele extends React.PureComponent {
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
                <Breadcrumb.Section active>Clientele</Breadcrumb.Section>
              </Breadcrumb>
            </Segment>
            <Segment basic>
              <Header as="h1" textAlign="center" className="about-header alferex-header">
                Clientele
              </Header>
              <ClienteleCarousel />
            </Segment>
          </Container>
        </Segment>
        <Footer />
      </div>
    );
  }
}

export default Clientele;
