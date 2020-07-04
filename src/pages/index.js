import React from "react"
import { Link, graphql } from "gatsby"
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Box mt={2}>
      <Grid container spacing={2}>
        {data.allStrapiLaunch.edges.map(({ node }) => (
          <Grid key={node.id} item xs={6} sm={4} md={2}>
            <Card>
              {node.id}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
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
