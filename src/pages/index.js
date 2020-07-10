import React from "react"
import dayjs from 'dayjs'
import { graphql } from "gatsby"
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import SEO from "../components/seo"
import LaunchCard from "../components/launchCard"

const IndexPage = ({ data }) => {
  const ongoingLaunches = data.allStrapiLaunch.edges.filter(({ node }) => {
    const hoursDiff = dayjs(node.date).diff(dayjs(), 'hour')
    return hoursDiff > -24 && hoursDiff < 0
  })

  const incomingLaunches = data.allStrapiLaunch.edges.filter(({ node }) => (
    Date.now() - new Date(node.date) < 0
  )).sort((a, b) => new Date(a.node.date) - new Date(b.node.date))

  const pastLaunches = data.allStrapiLaunch.edges.filter(({ node }) => (
    !ongoingLaunches.find(({ node: ongoingLaunch }) => (
      ongoingLaunch.id === node.id
    )) && Date.now() - new Date(node.date) > 0
  )).sort((a, b) => new Date(b.node.date) - new Date(a.node.date))

  return (
    <>
      <SEO title="Home" />
      <Container>
        <Box mt={2}>
          <Typography variant="h1">
            SpaceX launches
          </Typography>
          <Typography variant="h2">
            Ongoing launches
          </Typography>
          <Grid container spacing={2}>
            {ongoingLaunches.map(({ node }) => (
              <Grid key={node.id} item xs={6} sm={4} md={2}>
                <LaunchCard node={node} />
              </Grid>
            ))}
          </Grid>
          <Typography variant="h2">
            Incoming launches
          </Typography>
          <Grid container spacing={2}>
            {incomingLaunches.map(({ node }) => (
              <Grid key={node.id} item xs={6} sm={4} md={2}>
                <LaunchCard node={node} />
              </Grid>
            ))}
          </Grid>
          <Typography variant="h2">
            Past launches
          </Typography>
          <Grid container spacing={2}>
            {pastLaunches.map(({ node }) => (
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
