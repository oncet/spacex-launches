import React from "react"
import { graphql } from "gatsby"
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import SEO from "../components/seo"
import LaunchCard from "../components/launchCard"

const IndexPage = ({ data }) => {
  const incomingLaunches = data.allStrapiLaunch.edges.filter(({ node }) => (
    Date.now() - new Date(node.date) < 0
  )).sort((nodeA, nodeB) => nodeA.date - nodeB.date)
  const pastLaunches = data.allStrapiLaunch.edges.filter(({ node }) => (
    Date.now() - new Date(node.date) > 0
  ))
  console.log('incomingLaunches', incomingLaunches)
  console.log('pastLaunches', pastLaunches)
  incomingLaunches.forEach(({ node }) => console.log(node.id, node.date))
  pastLaunches.forEach(({ node }) => console.log(node.id, node.date))
  return (
    <>
      <SEO title="Home" />
      <Container>
        <Box mt={2}>
          <Grid container spacing={2}>
            {incomingLaunches.map(({ node }) => (
              <Grid key={node.id} item xs={6} sm={4} md={2}>
                <LaunchCard node={node} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export const query = graphql`
  {
    allStrapiLaunch {
      edges {
        node {
          id
          title
          date
          url
        }
      }
    }
  }
`

export default IndexPage
