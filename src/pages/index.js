import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export default ({data}) => (
  <Layout>
    <h1>Hi! Wolcome to {data.site.siteMetadata.title}</h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac nulla dictum, vehicula neque et, sodales nisi. Duis sapien nulla, bibendum ut tempor vitae, vehicula tristique nulla. Phasellus sagittis arcu a odio scelerisque, vel blandit nunc dictum. Praesent non nunc eu sapien vestibulum suscipit. Phasellus volutpat porttitor augue, eget suscipit velit mattis sed. Praesent nec sagittis mi. Etiam feugiat dignissim condimentum. Pellentesque laoreet pellentesque turpis sit amet scelerisque. Quisque fringilla pretium lacus et volutpat. Duis dignissim a turpis vel ultricies. Sed metus turpis, convallis vitae orci non, vehicula mollis orci. Mauris consectetur dignissim justo, ullamcorper mollis leo consequat eget. Morbi ultrices nisi sit amet nibh posuere malesuada. Aliquam faucibus, nunc eu varius finibus, felis magna mattis arcu, sit amet imperdiet neque tortor at mauris. Nulla mi nisi, lobortis eget interdum id, sollicitudin vitae lacus. Nullam commodo urna sit amet nisi mollis, vitae sollicitudin nisl hendrerit.
    </p>
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