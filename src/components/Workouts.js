import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';

const Workouts = () => {

  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <div className={classes.card}>
            Workouts
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.card}>
            Workouts
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.card}>
            Workouts
          </div>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.main}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  )
};

const useStyles = makeStyles({
  main: {
    height: "100vh",
    width: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px",
    "@media only screen and (max-width: 960px)": {
      height: "auto",
      width: "100vw",
      marginTop: "10%"
      /* gap: 10vh; */
    },
    "@media only screen and (max-width: 600px)": {
      height: "100%",
      justifyContent: "space-evenly"
    }
  },
  cards: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    gap: "53px",
    marginTop: "116px",
    "@media only screen and (max-width: 600px)": {
      marginTop: "0",
      gap: "5vw"
    }
  },
  card: {
    width: "207px",
    height: "240px",
    borderRadius: "20px",
    boxShadow: "4px 4px 40px 2px hsla(0, 0%, 49%, 0.46)",
    paddingTop: "25px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "@media only screen and (max-width: 1280px)": {
      padding: "5px",
      width: "170px",
      height: "197px",
      fontSize: "20px"
    },
    "@media only screen and (max-width: 600px)": {
      boxShadow: "4px 4px 20px 4px hsla(0, 0%, 60%, 0.46)",
      padding: "5px",
      width: "150px",
      height: "177px"
    }
  },
});

export default Workouts;
