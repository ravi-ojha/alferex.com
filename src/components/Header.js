import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { Link, withPrefix } from 'gatsby';
import {
  Layout, Menu, Icon, Popover, Dropdown,
} from 'antd';

import {
  Segment, Image, Container, Header as SemanticHeader,
} from 'semantic-ui-react';

import logo from '../assets/alferex_logo_colored_on_transparent_bg.svg';
import alferex_og from '../assets/alferex_og.png';
import favicon from '../assets/favicon.ico';
import { enquireScreen } from '../utils/common';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false,
      menuMode: 'horizontal',
    };
  }

  componentWillMount () {
    if (typeof window === 'object') {
      const script = document.createElement("script");
      script.id = 'tawk-script';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = "var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date;!function(){var e=document.createElement('script'),t=document.getElementsByTagName('script')[0];e.async=!0,e.src='https://embed.tawk.to/5d868f659f6b7a4457e2eac9/default',e.charset='UTF-8',e.setAttribute('crossorigin','*'),t.parentNode.insertBefore(e,t)}();";

      const tawkScriptTag = document.getElementById('tawk-script');
      // Don't add script tag if it's already present
      if (!tawkScriptTag) {
        document.body.appendChild(script);
      }
    }
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ menuMode: b ? 'inline' : 'horizontal' });
    });
  }

  handleHideMenu = () => {
    this.setState({
      menuVisible: false,
    });
  }

  handleShowMenu = () => {
    this.setState({
      menuVisible: true,
    });
  }

  onMenuVisibleChange = (visible) => {
    this.setState({
      menuVisible: visible,
    });
  }

  render() {
    const { menuMode, menuVisible } = this.state;
    const { location } = this.props;
    console.log(this.props);
    const path = location.pathname;
    console.log(path);

    const module = location.pathname
      .replace(/(^\/|\/$)/g, '')
      .split('/')
      .slice(0, -1)
      .join('/');
    let activeMenuItem = module || 'home';
    if (/^\/products/.test(path)) {
      activeMenuItem = 'products';
    } else if (/\/about-us/.test(path)) {
      activeMenuItem = 'about-us';
    } else if (/\/clientele/.test(path)) {
      activeMenuItem = 'clientele';
    } else if (/\/contact-us/.test(path)) {
      activeMenuItem = 'contact-us';
    } else if (/\/enquiry/.test(path)) {
      activeMenuItem = 'enquiry';
    } else if (path === '/') {
      activeMenuItem = 'home';
    }

    const productDropdown = (
      <Menu>
        <Menu.Item key="0">
          <Link to="/products/pulleys">Pulleys</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to="/products/gears">Gears</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">
          <Link to="/products">All Products</Link>
        </Menu.Item>
      </Menu>
    );

    const menu = (
      <Menu mode={menuMode} selectedKeys={[activeMenuItem]} id="nav" key="nav" style={{ float: menuMode === 'inline' ? 'none' : 'right', border: 'None', lineHeight: '64px', fontFamily: "'Overpass', 'Helvetica Neue', Arial, Helvetica, sans-serif" }}>
        <Menu.Item key="home" style={{ borderBottom: 'None', fontSize: '1.2em' }}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="products" style={{ borderBottom: 'None', fontSize: '1.2em' }}>
          <Dropdown overlay={productDropdown} trigger={['hover', 'click']}>
            <Link style={{ cursor: 'text' }} to="/products">
              Products <Icon type="down" />
            </Link>
          </Dropdown>
        </Menu.Item>
        <Menu.Item key="about-us" style={{ borderBottom: 'None', fontSize: '1.2em' }}>
          <Link to="/about-us">About Us</Link>
        </Menu.Item>
        <Menu.Item key="clientele" style={{ borderBottom: 'None', fontSize: '1.2em' }}>
          <Link to="/clientele">Clientele</Link>
        </Menu.Item>
        <Menu.Item key="contact-us" style={{ borderBottom: 'None', fontSize: '1.2em' }}>
          <Link to="/contact-us">Contact Us</Link>
        </Menu.Item>
        <Menu.Item key="enquiry" style={{ borderBottom: 'None', fontSize: '1.2em' }}>
          <Link to="/enquiry">Enquiry</Link>
        </Menu.Item>
      </Menu>
    );
    const siteTitle = 'Alferex Industries Private Limited';
    const siteDescription = 'We are an industrial technology company that manufactures heavy-duty military grade machinery equipments of unmatched precision and accuracy';

    return (
      <Layout style={{ boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, 0.10)', background: '#ffffff', padding: '0', marginBottom: '1em' }}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${siteTitle}`}
          link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}>
          <meta property="og:title" content={siteTitle} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://alferex.com/" />
          <meta property="og:description" content={siteDescription} />
          <meta property="og:site_name" content={siteTitle} />
          <meta property="og:image" content={withPrefix("https://alferex.com/assets/alferex_og.png")} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="http://alferex.com/" />
          <meta name="twitter:title" content={siteTitle} />
          <meta name="twitter:description" content={siteDescription} />
          <meta name="twitter:image" content={withPrefix("https://alferex.com/assets/alferex_og.png")} />
        </Helmet>
        <Segment vertical style={{ background: '#ffffff' }}>
          <Container>
            {menuMode === 'inline' ? (
              <Popover
                overlayClassName="popover-menu"
                placement="bottomRight"
                content={menu}
                trigger="click"
                visible={menuVisible}
                arrowPointAtCenter
                onVisibleChange={this.onMenuVisibleChange}
              >
                <Icon
                  className="nav-phone-icon"
                  type="menu"
                  onClick={this.handleShowMenu}
                  style={{ marginTop: '24px', marginRight: '12px', float: 'right', fontSize: '1.6em' }}
                />
              </Popover>
            ) : null}
            <div className="logo" style={{ float: 'left' }}>
              <Link id="logo" to="/">
                <Image src={logo} size="small" style={{ width: '120px' }} />
              </Link>
            </div>
            {menuMode === 'horizontal' ? <div id="menu">{menu}</div> : null}
          </Container>
        </Segment>
      </Layout>
    );
  }
}

Header.propTypes = {
  location: PropTypes.any,
};

export default Header;
