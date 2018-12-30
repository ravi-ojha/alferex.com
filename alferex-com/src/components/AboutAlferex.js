/**
 *
 * AboutAlferex
 *
 */

import React from 'react';
import {
  Header, Segment, Container,
} from 'semantic-ui-react';

import '../../semantic/semantic-dist/semantic.css';
import '../assets/custom.css';


class AboutAlferex extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Segment basic style={{ padding: '5em 0' }}>
        <Container>
          <Header as="h1" textAlign="center" style={{ fontWeight: '400', fontSize: '2em' }} className="about-header">
            Our mission is to push the limits of precision and accuracy
          </Header>
          <Header as="h2" textAlign="center" style={{ fontWeight: '400', fontSize: '1.6em', lineHeight: '1.4' }} color="grey">
            We are an industrial technology company that manufactures heavy-duty military grade machinery equipments of unmatched precision and accuracy. The continuous innovation in our production lines enables us to adapt to the ever changing products of the future.
          </Header>
        </Container>
      </Segment>
    );
  }
}

export default AboutAlferex;
