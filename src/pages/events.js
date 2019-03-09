import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import styled from "styled-components"
import event1 from '../assets/graphics/events/event1.jpg'
import img from '../assets/graphics/gradient_bg.jpeg';
import { COLOR } from '../constants';

const Container = styled.div`

  background-image: url(${img});
  background-repeat: auto;
  background-size: cover;
  
  margin: 1rem auto;
  max-width: auto;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;

  min-height: 800px;
  padding: 30px;
  content: "";
  display: table;
  clear: both;
`
const EventWrapper = styled.div`
  display: flex;
  align-items: left;
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

const EventName = styled.h2`
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

const Heading = styled.h1`
  margin: 0;
  margin-left: 1rem;
  justify-content: center;
  color: ${COLOR.PINK};
  
`

const Event = props => (
  <EventWrapper>
    <Avatar src={props.avatar} alt="" />
    <Description>
      <StyledFooterRight>
      <a href={props.link} target="_blank">
        <EventName>{props.eventName}</EventName>
        </a>
      </StyledFooterRight>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </EventWrapper>
)

export default ({data}) => (
  <Layout str={'Events of '+ data.site.siteMetadata.title}>
    <Container>
    <Event
      eventName="Free Yoga session and our topic for discussion: 'What is DevOps'?"
      avatar={event1}
      link="https://www.meetup.com/DevOpsGirls/events/246693961/"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <Event
      eventName="DevOps Girls Lightning Talks WORKSHOP"
      avatar={event1}
      link="https://www.meetup.com/DevOpsGirls/events/249823826/"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <Event
      eventName="DevOps Girls Lightning Talks"
      avatar={event1}
      link="https://www.meetup.com/DevOpsGirls/events/249823011/"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <Event
      eventName="Seek And DevOps Girls Bootcamp"
      avatar={event1}
      link="https://www.meetup.com/DevOpsGirls/events/258051232/"
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