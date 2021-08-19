import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ReactComponent as Arrow } from '../img/arrow.svg';

export const DayPlan = ({ setIsPageOpen }) => {

  const classes = useStyles();

  return (
    <div className={classes.profile} >
      <div className={classes.side}></div>

      <div className={classes.container}>
        <div className={classes.header}>
          Today
          <Arrow onClick={() => setIsPageOpen(false)}
            className={classes.arrow} />
        </div>
        <div className={classes.card}>
          Sth
        </div>

        Food and training
      </div>
    </div>
  )
};

const useStyles = makeStyles({
  profile: {
    display: "flex",
    width: "auto",
    backgroundColor: "#ffffff",
    "@media only screen and (max-width: 960px)": {
      height: "auto",
      width: "100vw",
      justifyContent: "center"
    }
  },
  side: {
    backgroundImage: "linear-gradient(#09EB7E, #01C9DB)",
    width: "30px",
    height: "100vh",
    "@media only screen and (max-width: 960px)": {
      display: "none"
    }
  },
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media only screen and (max-width: 960px)": {
      padding: "5px",
      width: "360px",
      height: "auto",
      alignItems: "baseline",
      gap: "50px",
      fontSize: "22px"
    },
    "@media only screen and (max-width: 600px)": {
      width: "270px",
      gap: "30px"
    }
  },
  header: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "20px",
    marginTop: "8px",
    gap: "30px",
    position: "relative",
    fontWeight: "600",
    "@media only screen and (max-width: 960px)": {
      marginTop: "50px"
    },
    "@media only screen and (max-width: 600px)": {
      marginTop: "10px",
      fontSize: "22px"
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
    }
  },
  arrow: {
    width: "30px"
  },
});
