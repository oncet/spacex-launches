import React, { useMemo } from 'react'
import dayjs from 'dayjs'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress'

const LaunchCard = ({ node }) => {
  const daysDiff = useMemo(() => (
    dayjs(node.date).diff(dayjs(), 'day')
  ), [node])

  return (
    <Card>
      <CardContent>
        <Typography>
          { daysDiff === 0 && `${node.title} is live!`}
          { daysDiff > 0 && `${daysDiff} days left until ${node.title}.`}
          { daysDiff < 0 && `${node.title} (${daysDiff * -1} days ago).`}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default LaunchCard
