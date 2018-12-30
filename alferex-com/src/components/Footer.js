/**
 *
 * Footer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import {
  Grid, Header, List, Segment, Image, Container,
} from 'semantic-ui-react';

import icon from '../assets/alferex_icon_colored_on_transparent_bg.svg';
import '../../semantic/semantic-dist/semantic.css';
import '../assets/custom.css';


class Footer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Segment vertical style={{ padding: '5em 0' }}>
        <Container className="footer-container">
          <div className="ui inverted section divider"></div>
          <Grid columns="equal" divided padded stackable>
            <Grid.Column style={{ boxShadow: 'none' }} width={3}>
              <Header as="h5">
                Company
              </Header>
              <div className="ui link list">
                <Link to="/about-us" name="about-us" className="item">
                  About Us
                </Link>
                <Link to="/contact-us" name="contact-us" className="item">
                  Contact Us
                </Link>
                <Link to="/enquiry" name="enquiry" className="item">
                  Enquiry
                </Link>
              </div>
            </Grid.Column>
            <Grid.Column style={{ boxShadow: 'none' }} width={3}>
              <Header as="h5">Legal</Header>
              <div className="ui link list">
                <Link to="/privacy-and-terms" name="privacy-and-terms" className="item">
                  Privacy and Terms
                </Link>
              </div>
            </Grid.Column>
            <Grid.Column style={{ boxShadow: 'none' }} width={4} floated="right">
              <Header as="h5">
                <Image style={{ marginRight: '1em', marginTop: '0em' }} ui={false} src={icon} size="tiny" />
                Alferex Industries
              </Header>
              <div className="social-media-icons">
                <a href="https://www.facebook.com/AlferexIndustries/" title="Like us on Facebook" target="_blank" className="ui circular icon button tiny">
                  <i className="facebook f icon"></i>
                </a>
                <a href="https://twitter.com/AlferexInd" title="Follow us on Twitter" target="_blank" className="ui circular icon button tiny">
                  <i className="twitter icon"></i>
                </a>
                <a href="https://www.linkedin.com/company/alferex-industries/" title="Follow us on LinkedIn" target="_blank" className="ui circular icon button tiny">
                  <i className="linkedin in icon"></i>
                </a>
              </div>
              <List link horizontal size="mini">
                <List.Item>&copy; Alferex Industries</List.Item>
                <List.Item>Version: 0.1</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
