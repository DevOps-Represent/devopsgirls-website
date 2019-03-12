import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';
import img from '../assets/graphics/background_img.jpg';
import  Header from './Header';
import { NAV_ITEMS } from '../constants';
import Footer from './Footer';
import styled from "styled-components"

const Container = styled.div`
margin: 0 auto;
padding: 1.5rem 1rem;

display: flex;
background-image: url(${img});
background-attachment: fixed;
background-repeat: auto;
background-size: cover;
justify-content: center;
max-width: auto;
min-height: 100%;
color: white;
`
const navigationItems = NAV_ITEMS.map(({ to, href, label }) => {
    if (href) {
      return (
        <a key={label} href={href}>
          {label}
        </a>
      );
    }

    return (
      <Link key={label} to={to}>
        {label}
      </Link>
    );
  });

const Layout =  ({ str, children }) => (
  
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
        
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
          >
            <html lang="en" />
          </Helmet>
          <Header title={str} navigation={navigationItems} />
          <Container>{children}</Container>
          <Footer/>
        </>
      )}
    />
  
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout