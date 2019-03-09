import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "styled-components"
import theresa from '../assets/graphics/organisers/theresa.jpg';
import franca from '../assets/graphics/organisers/franca.jpg';
import jc from '../assets/graphics/organisers/jc.jpg';
import javier from '../assets/graphics/organisers/javier.jpg';
import img from '../assets/graphics/gradient_bg.jpeg';
import { COLOR } from '../constants';

const Container = styled.div`

  background-image: url(${img});
  background-repeat: auto;
  background-size: cover;
  
  margin: 1rem auto;
  max-width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`

const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`

const Excerpt = styled.p`
  margin: 0;
`
const StyledFooterRight = styled.div`
	
	& > * {
		margin-left: 3rem;
		color: ${COLOR.PINK};
		cursor: pointer;
	
		&:focus,
		&:hover {
		  color: ${COLOR.WHITE};
		}
	  }
	
	  & > *:first-child {
		margin-left: 0;
	  }
`

const User = props => (
  <UserWrapper>
    <Avatar src={props.avatar} alt="" />
    <Description>
      <StyledFooterRight>
      <a href={props.twitter} target="_blank">
        <Username>{props.username}</Username>
        </a>
      </StyledFooterRight>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
)

export default ({data}) => (
  <Layout str='About '>
    <Container>
    <User
      username="Theresa Neate"
      avatar={theresa}
      twitter="https://twitter.com/TheresaNeate"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Franca Moretto"
      avatar={franca}
      twitter="https://twitter.com/francalovescake"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="John Contad"
      avatar={jc}
      twitter="https://twitter.com/JohnContad"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Javier Turégano"
      avatar={javier}
      twitter="https://twitter.com/setoide"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Container>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`