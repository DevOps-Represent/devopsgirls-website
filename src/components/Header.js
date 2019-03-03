import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';
import { COLOR } from '../constants';

const HeaderWrapper = styled.div`
  background-color: ${COLOR.PINK};
  border-top: 0.2rem solid ${darken(0.2, COLOR.PINK)};
  border-bottom: 0.2rem solid ${darken(0.2, COLOR.PINK)};
  border-left: 0.2rem solid ${darken(0.2, COLOR.PINK)};
  border-right: 0.2rem solid ${darken(0.2, COLOR.PINK)};
`

const HeaderInner = styled.div`
  display: flex;
  flex-flow: nowrap row;
`
const SiteTitle = styled.h1`
  margin: 0;
  color: ${COLOR.WHITE};
`
const Navigation = styled.div`
  margin-left: auto;
  display: flex;
  flex-flow: nowrap row;
  align-items: flex-end;

  & > * {
    margin-left: 1rem;
    color: ${COLOR.WHITE};
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