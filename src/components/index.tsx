import { Card, CardContent, CardHeader, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import GeneralInfo from './GeneralInfo';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: { backgroundColor: theme.palette.background.default },
  card: { margin: theme.spacing() }
}));

const cards = [{ title: 'General Cardano Info', Component: GeneralInfo }];

// Root layout component
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
