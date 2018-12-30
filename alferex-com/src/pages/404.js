import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import get from 'lodash/get';
import {
  Layout, Row, Col,
} from 'antd';
import { Segment, Header } from 'semantic-ui-react';

import SiteHeader from '../components/Header';
import Footer from '../components/Footer';
import '../../semantic/semantic-dist/semantic.css';
import '../assets/custom.css';

class NotFoundPage extends React.PureComponent {
  render() {
    console.log(this.props);
    const headerProps = {
      ...this.props,
    };
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const pageDescription = 'We manufacture & export V-Belt Pulley, Timing Toothed Belt Pulley, Motor Shaft, Crank Shaft and similar machinery parts';

    return (
      <div>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: pageDescription }]}
          title={`${siteTitle}`}
        />
        <SiteHeader {...headerProps} />
        <Segment basic style={{ marginBottom: '0' }}>
        </Segment>
        <Segment basic>
          <Header as="h2">
            Oops! You have found a dead link
            <Header.Subheader>
              Please go back to
              <Link to="/"> home</Link>
            </Header.Subheader>
          </Header>
        </Segment>
        <Footer />
      </div>
    );
  }
}

export default NotFoundPage;
