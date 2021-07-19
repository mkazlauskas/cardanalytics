import { Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../app/reducers';

// Render general Cardano blockchain information
export default function GeneralInfo() {
  const data = useSelector(({ cardanoData }: State) => cardanoData);
  if (!data) return null;
  return (
    <Grid container direction="column">
      <span>
        Epoch:
        {' '}
        {data.epoch.toLocaleString()}
      </span>
      <span>
        Block:
        {' '}
        {data.blocks.toLocaleString()}
      </span> 
      <span>
        Slot:
        {' '}
        {data.slot.toLocaleString()}
      </span>
      <span>
        Total transactions:
        {' '}
        {data.transactions.toLocaleString()}
      </span>
      <span>
        Total assets:
        {' '}
        {data.assets.toLocaleString()}
      </span> 
    </Grid>
  );
}