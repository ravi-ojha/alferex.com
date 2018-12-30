import React from 'react';
import { Link } from 'gatsby';
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
    return (
      <div>
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
