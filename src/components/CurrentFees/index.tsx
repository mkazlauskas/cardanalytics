import { Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../app/reducers';

const LOVELACE = 1000000;

// Render current Cardano transaction fees aggregate
export default function CurrentFees() {
  const data = useSelector(({ cardanoData }: State) => cardanoData);
  if (!data) return null;
  const { min, max, average } = data.currentFees;
  return (
    <Grid container direction="column">
      <span>
        {`Min Fee: ${(min / LOVELACE).toFixed(2)} ADA`}
      </span>
      <span>
        {`Max Fee: ${(max / LOVELACE).toFixed(2)} ADA`}
      </span>
      <span>
        {`Average Fee: ${(average / LOVELACE).toFixed(2)} ADA`}
      </span>
    </Grid>
  );
}