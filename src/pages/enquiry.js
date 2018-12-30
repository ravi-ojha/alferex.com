import React from 'react';
import { Link } from 'gatsby';
import { Segment, Breadcrumb, Container, Header } from 'semantic-ui-react';


import SiteHeader from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import '../../semantic/semantic-dist/semantic.css';
import '../assets/custom.css';

class Enquiry extends React.PureComponent {
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
                <Breadcrumb.Section active>Enquiry</Breadcrumb.Section>
              </Breadcrumb>
            </Segment>
            <Header as="h1" textAlign="center" className="about-header alferex-header">
              General Enquiry
            </Header>
            <ContactForm />
          </Container>
        </Segment>
        <Footer />
      </div>
    );
  }
}

export default Enquiry;
