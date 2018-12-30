/**
 *
 * ContactForm
 *
 */

import React from 'react';
import {
  Header, Segment, Container,
} from 'semantic-ui-react';

import '../../semantic/semantic-dist/semantic.css';
import '../assets/custom.css';


class ContactForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Segment basic style={{ padding: '5em 0' }}>
        <Container>
          <Header as="h1" textAlign="center" style={{ fontWeight: '400', fontSize: '1.6em' }} className="about-header">
            Send us a message and we will get back to you within 24 hours!
          </Header>
          <Segment basic>
            <iframe
              title="contact-us"
              src="https://docs.google.com/forms/d/e/1FAIpQLSfgAYsvaamzHqgIpzQQOfhJBNoiAKWZZJEuXFt7Xt32ONya4Q/viewform?embedded=true"
              width="100%"
              height="1031"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading...
            </iframe>
          </Segment>
        </Container>
      </Segment>
    );
  }
}

export default ContactForm;