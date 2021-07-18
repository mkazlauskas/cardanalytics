import { Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../app/reducers';

export default function GeneralStats() {
  const stats = useSelector(({ generalStats }: State) => generalStats);
  if (!stats) return null;
  return (
    <Grid container direction="column">
      <span>
        Total blocks:
        {' '}
        {stats.blocks.toLocaleString()}
      </span>
      <span>
        Total transactions:
        {' '}
        {stats.transactions.toLocaleString()}
      </span>
      <span>
        Total stake pools:
        {' '}
        {stats.stakePools.toLocaleString()}
      </span>
      <span>
        Total ADA stake:
        {' '}
        {stats.adaStake.toLocaleString()}
      </span>
      <span>
        Total assets:
        {' '}
        {stats.assets.toLocaleString()}
      </span>
      <span>
        Era:
        {' '}
        {stats.era}
      </span>
      <span>
        Epoch:
        {' '}
        {stats.epoch.toLocaleString()}
      </span>
      <span>
        Slot:
        {' '}
        {stats.slot.toLocaleString()}
      </span>
    </Grid>
  );
}