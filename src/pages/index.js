import React from 'react';

import { Segment, Container, Header, Grid } from 'semantic-ui-react';
import AboutAlferex from '../components/AboutAlferex';
import Clientele from '../components/Clientele';
import ContactDetails from '../components/ContactDetails';


import SiteHeader from '../components/Header';
import Footer from '../components/Footer';
import '../../semantic/semantic-dist/semantic.css';
import '../assets/custom.css';

class Index extends React.PureComponent {
  render() {
    return (
      <div>
        <SiteHeader {...this.props} />
        <Segment basic>
          <Container>
            <Segment basic>
              <Header as="h1" textAlign="center" className="about-header alferex-header">
                Mission Statement
              </Header>
              <AboutAlferex />
            </Segment>
          </Container>
        </Segment>
        <div style={{ position: 'relative' }}>
          <svg style={{ position: 'absolute', width: '100%', height: '100%' }} width="1665px" height="665px" viewBox="0 0 1665 665" preserveAspectRatio="none"><defs><linearGradient x1="-9.76013358%" y1="100%" x2="93.4135454%" y2="47.0457337%" id="linearGradient-1"><stop stopColor="#517384" offset="0%"></stop><stop stopColor="#517384" offset="100%"></stop></linearGradient></defs><polygon fill="#f6f8f9" transform="translate(832.500000, 274.000000) scale(1, -1) translate(-832.500000, -274.000000) " points="0 3 1665 3 1665 346.491263 117.611298 545 0 475.825616"></polygon><polygon fill="url(#linearGradient-1)" points="0 124.293036 1665 0 1665 561.957836 1550.97584 665 0 601.957836"></polygon></svg>
          <Segment basic style={{ padding: '10em 0' }}>
            <Container>
              <Header as="h1" textAlign="center" className="about-header alferex-dark-header">
                Promises
              </Header>
              <Grid centered stackable columns={2}>
                <Grid.Row>
                  <Grid.Column width={6} style={{ padding: '2em 4em' }}>
                    <Header as="h3" textAlign="center" style={{ color: '#fff' }}>
                      Clockwork Precision
                    </Header>
                    <Header as="h4" textAlign="center" style={{ color: '#fff', fontWeight: '300' }}>
                      Every produced equipment passes 3-step QC process laid out by 30 years experienced engineers
                    </Header>
                  </Grid.Column>
                  <Grid.Column width={6} style={{ padding: '2em 4em' }}>
                    <Header as="h3" textAlign="center" style={{ color: '#fff' }}>
                      Timely Delivery
                    </Header>
                    <Header as="h4" textAlign="center" style={{ color: '#fff', fontWeight: '300' }}>
                      We believe in under promising and over delivering. Post quote agreement, we carefully asses the requirements and communicate ETA
                    </Header>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={6} style={{ padding: '2em 4em' }}>
                    <Header as="h3" textAlign="center" style={{ color: '#fff' }}>
                      Material Guarantee
                    </Header>
                    <Header as="h4" textAlign="center" style={{ color: '#fff', fontWeight: '300' }}>
                      Agreed upon material is used to produce the equipments and marked with our company seal of trust
                    </Header>
                  </Grid.Column>
                  <Grid.Column width={6} style={{ padding: '2em 4em' }}>
                    <Header as="h3" textAlign="center" style={{ color: '#fff' }}>
                      On-site Service
                    </Header>
                    <Header as="h4" textAlign="center" style={{ color: '#fff', fontWeight: '300' }}>
                      We will help assemble the parts to complete the product on-site to verify that everything falls in place
                    </Header>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </div>
        <Segment basic>
          <Container>
            <Segment basic>
              <Header as="h1" textAlign="center" className="about-header alferex-header">
                Clientele
              </Header>
              <Clientele />
            </Segment>
          </Container>
        </Segment>
        <Segment basic>
          <Container>
            <Segment basic>
              <Header as="h1" textAlign="center" className="about-header alferex-header">
                Reach Us
              </Header>
              <ContactDetails />
            </Segment>
          </Container>
        </Segment>
        <Footer />
      </div>
    );
  }
}

export default Index;

