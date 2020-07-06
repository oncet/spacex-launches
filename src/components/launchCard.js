import React from 'react'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const LaunchCard = ({ node }) => (
  <Card>
    <CardContent>
      <Typography>
        {node.id}
      </Typography>
    </CardContent>
  </Card>
)

export default LaunchCard
