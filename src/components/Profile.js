import React from 'react';
import PercentageBars from './PercentageBars';
import { makeStyles } from '@material-ui/core';
import { ReactComponent as Arrow } from '../img/arrow.svg';
import { ReactComponent as Arrow2 } from '../img/arrow2.svg';


export const Profile = React.forwardRef((props, ref) => {

  const classes = useStyles();

  return (
    <div className={classes.profile} ref={ref} >
      <div className={classes.side}></div>

      <div className={classes.container}>
        <div className={classes.header}>
          Name Lastname
          <div className={classes.circle}></div>
          <Arrow className={classes.arrow} />
        </div>
        <div className={classes.description}>
          Update Your Profile
          <div className={classes.text}>
            You can add or calculate your calorie
            goals, water intake and sth else
          </div>
          <Arrow2 className={classes.arrow2} />
        </div>
        <PercentageBars />
      </div>
    </div>
  )
});

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
    width: "auto",
    "@media only screen and (max-width: 960px)": {
      padding: "5px",
      width: "360px",
      height: "auto",
      display: "flex",
      flexDirection: "column",
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
  description: {
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
    margin: "100px 15% 15% 15%",
    gap: "20px",
    fontSize: "24px",
    "@media only screen and (max-width: 960px)": {
      margin: "0px"
    },
    "@media only screen and (max-width: 600px)": {
      fontSize: "22px"
    }
  },
  text: {
    fontSize: "20px",
    "@media only screen and (max-width: 600px)": {
      fontSize: "18px"
    }
  },
  circle: {
    backgroundColor: "#2F2E41",
    width: "60px",
    height: "60px",
    borderRadius: "100%",
    "@media only screen and (max-width: 600px)": {
      display: "none"
    }
  },
  arrow: {
    width: "30px"
  },
  arrow2: {
    "@media only screen and (max-width: 600px)": {
      width: "20%"
    }
  }
});
