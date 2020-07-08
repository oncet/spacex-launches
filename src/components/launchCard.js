import React, { useMemo } from 'react'
import dayjs from 'dayjs'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress'

const LaunchCard = ({ node }) => {
  const daysLeft = useMemo(() => {
    return dayjs(node.date).diff(dayjs(), 'day')
  }, [node])
  console.log(daysLeft)
  return (
    <Card>
      <CardContent>
        <Typography>
          {`${daysLeft} days left until ${node.title}.`}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default LaunchCard
