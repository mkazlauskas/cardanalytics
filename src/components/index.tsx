import { Card, CardContent, CardHeader, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import GeneralStats from './GeneralStats';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: { backgroundColor: theme.palette.background.default },
  card: { margin: theme.spacing() }
}));

const cards = [{ title: 'General Stats', Component: GeneralStats }];

function Layout() {
  const classes = useStyles();
  return (
    <Grid className={classes.container} container>
      {cards.map(({ title, Component }) => (
        <Card className={classes.card} key={title}>
          <CardHeader title={title} />
          <CardContent>
            <Component />
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
}

export default Layout;
