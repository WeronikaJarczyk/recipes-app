import { ReactComponent as Workouts } from '../img/workout.svg';
import { ReactComponent as Recipes } from '../img/breakfast.svg';
import { ReactComponent as Water } from '../img/water-bottle.svg';
import { makeStyles } from '@material-ui/core';
import chart from '../img/chart.svg';
import React from 'react';

const Main = React.forwardRef((props, ref) => {

  const classes = useStyles();

  return (
    <div className={classes.main} ref={ref}>
      <div className={classes.chart}>
        <img src={chart} alt="" className={classes.chartImg} />
      </div>

      <div className={classes.cards}>
        <div className={classes.card}>
          <Workouts className={classes.cardImage} />
          Workouts
        </div>
        <div className={classes.card}>
          <Recipes className={classes.cardImage} />
          Food Recipes
        </div>
        <div className={classes.card}>
          <Water className={classes.cardImage} />
          Water
        </div>
      </div>
    </div>
  )
});

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
  chartImg: {
    width: "80%",
    "@media only screen and (max-width: 960px)": {
      width: "70%"
    },
    "@media only screen and (max-width: 600px)": {
      width: "50%"
    }
  },
  chart: {
    display: "flex",
    justifyContent: "center"
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
  cardImage: {
    width: "129px",
    height: "138px"
  }
});

export default Main;
