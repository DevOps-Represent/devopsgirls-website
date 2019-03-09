import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import styled from "styled-components"

const Container = styled.body`
height: 800px;
`

export default ({data}) => (
  <Layout str={'~/'+ data.site.siteMetadata.title}>
    <Container><br/></Container>
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