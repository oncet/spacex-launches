import React from "react"
import { graphql } from "gatsby"
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import Layout from "../components/layout"
import SEO from "../components/seo"
import LaunchCard from "../components/launchCard"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Box mt={2}>
        <Grid container spacing={2}>
          {data.allStrapiLaunch.edges.map(({ node }) => (
            <Grid key={node.id} item xs={6} sm={4} md={2}>
              <LaunchCard node={node} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  </Layout>
)

export const query = graphql`
  {
    allStrapiLaunch {
      edges {
        node {
          id
          date
          url
        }
      }
    }
  }
`

export default IndexPage
