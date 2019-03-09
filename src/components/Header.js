import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';
import { COLOR } from '../constants';
import logo_img from '../assets/graphics/logo.png';

const StyledLogo = styled.img`
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    margin: 0;
`
const HeaderWrapper = styled.div`
  background-color: ${COLOR.BLACK};
  border-top: 0.2rem solid ${COLOR.PINK};
  border-bottom: 0.2rem solid ${COLOR.PINK};
  border-left: 0.2rem solid ${COLOR.PINK};
  border-right: 0.2rem solid ${COLOR.PINK};
`

const HeaderInner = styled.div`
  display: flex;
  flex-flow: nowrap row;
  align-items: center;
  justify-content: center;
`
const SiteTitle = styled.h1`
  margin: 0;
  margin-left: 1rem;
  justify-content: center;
  color: ${COLOR.PINK};
  
`
const Navigation = styled.div`
  margin-left: auto;
  display: flex;
  flex-flow: nowrap row;
  align-items: flex-end;

  & > * {
    margin-left: 1rem;
    color: ${COLOR.PINK};
    cursor: pointer;

    &:focus,
    &:hover {
      color: ${darken(0.2, COLOR.WHITE)};
    }
  }

  & > *:first-child {
    margin-left: 0;
  }
`

const Header = ({ title, navigation }) => (
  <header>
  <HeaderWrapper>
      <HeaderInner>
        <StyledLogo src={logo_img} alt={title}/>
        <SiteTitle to="/">{title}</SiteTitle>
        {navigation && <Navigation>{navigation}</Navigation>}
      </HeaderInner>
    </HeaderWrapper>
    </header>
)

Header.propTypes = {
  /** Title for the site */
  title: PropTypes.string,
  /** Array of navigation items */
  navigation: PropTypes.arrayOf(PropTypes.node),
}

Header.defaultProps = {
  title: null,
  navigation: null,
}

export default Header