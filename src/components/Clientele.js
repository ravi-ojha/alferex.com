/**
 *
 * Clientele
 *
 */

import React from 'react';
import {
  Card, Header, Segment, Container, Image,
} from 'semantic-ui-react';

import Flickity from 'react-flickity-component'

import '../../semantic/semantic-dist/semantic.css';
import '../assets/custom.css';
import '../assets/flickity.css';

const flickityOptions = {
  wrapAround: true,
  initialIndex: 2,
  autoPlay: true
}

class Clientele extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Segment basic style={{ padding: '5em 0' }}>
        <Container>
          <Header as="h1" textAlign="center" style={{ fontWeight: '400', fontSize: '1.6em' }} className="about-header">
            You're in great company!
          </Header>
          <Segment basic>
            <Flickity
              className={'carousel'} // default ''
              elementType={'div'} // default 'div'
              options={flickityOptions} // takes flickity options {}
              disableImagesLoaded={false} // default false
              reloadOnUpdate // default false
            >
              <Segment basic padded textAlign='center' style={{  height: '140px', width: '26%', margin: 0 }}><Image style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} src="/assets/clientele/adeshwar-moulds-pvt-ltd.jpg" size="medium" /></Segment>
              <Segment basic padded textAlign='center' style={{  height: '140px', width: '26%', margin: 0 }}><Image style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} src="/assets/clientele/ambition-industry.png" size="medium" /></Segment>
              <Segment basic padded textAlign='center' style={{  height: '140px', width: '26%', margin: 0 }}><Image style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} src="/assets/clientele/macons.png" size="medium" /></Segment>
              <Segment basic padded textAlign='center' style={{  height: '140px', width: '26%', margin: 0 }}><Image style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} src="/assets/clientele/hindustan-dorr-oliver.jpeg" size="medium" /></Segment>
              <Segment basic padded textAlign='center' style={{  height: '140px', width: '26%', margin: 0 }}><Image style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} src="/assets/clientele/dhara-engineering-works.jpg" size="medium" /></Segment>
              <Segment basic padded textAlign='center' style={{  height: '140px', width: '26%', margin: 0 }}><Image style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} src="/assets/clientele/capius.png" size="medium" /></Segment>
              <Segment basic padded textAlign='center' style={{  height: '140px', width: '26%', margin: 0 }}><Image style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} src="/assets/clientele/cadmach.jpg" size="medium" /></Segment>
            </Flickity>
          </Segment>
        </Container>
      </Segment>
    );
  }
}

export default Clientele;