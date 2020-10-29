import { Container, Theme } from '@material-ui/core';
import React from 'react';
import './App.css';
import { Todos } from './Components/Todos';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ spacing }: Theme) => ({
  content: {
    marginTop: spacing(2)
  },
  alert: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.content}>
      <Todos/>
    </Container>
  );
}

export default App;
