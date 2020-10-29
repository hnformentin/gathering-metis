import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  parent: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const FullPageSpinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.parent}>
      <CircularProgress />
    </div>
  );
};
