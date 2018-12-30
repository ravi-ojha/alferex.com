/**
 *
 * ContactDetails
 *
 */

import React from 'react';
import {
  Header, Segment, Container, Table,
} from 'semantic-ui-react';

import '../../semantic/semantic-dist/semantic.css';
import '../assets/custom.css';


class ContactDetails extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Segment vertical style={{ padding: '5em 0' }}>
        <Container>
          <Header as="h1" textAlign="center" style={{ fontWeight: '400', fontSize: '2em' }} className="about-header">
            Reach us via any of these mediums
          </Header>
          <Table basic="very" celled collapsing style={{ margin: 'auto' }}>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4" color="grey">
                    Email
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <Header as="h4">
                    <a href="mailto:info@alferex.com">info@alferex.com</a>
                  </Header>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4" color="grey">
                    Mobile
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  <Header as="h4">
                    <a href="tel:+918971895463">+91 8971895463</a>
                  </Header>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <div style={{ marginTop: '2em' }}>
            <Header as="h2" textAlign="center" style={{ fontWeight: '400', fontSize: '1.8em' }} className="about-header">
              Or send us a post like good ol&apos; days
            </Header>
            <Header as="h4" color="grey" textAlign="center">
              Registered Address
            </Header>
            <Header as="h4" textAlign="center">
              #20, Shri Hari Villas, Near Adani Circle,
              <br />
              SP Ring Road, Ahmedabad - 382445
            </Header>
            <Header as="h4" color="grey" textAlign="center">
              Google Maps
            </Header>
            <div className="mapouter" style={{ textAlign: 'center' }}>
              <div className="gmap_canvas">
                <iframe
                  title="alferex_gmaps"
                  width="260"
                  height="260"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=20%2C%20Shree%20Hari%20Villas%20Ahmedabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                >
                Loading...
                </iframe>
              </div>
            </div>
          </div>
        </Container>
      </Segment>
    );
  }
}

export default ContactDetails;