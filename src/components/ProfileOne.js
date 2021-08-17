import React from 'react'
import PercentageBars from './PercentageBars';
import { makeStyles } from '@material-ui/core';
import { ReactComponent as Arrow2 } from '../img/arrow2.svg';

export const ProfileOne = ({ openPage }) => {

  const classes = useStyles();

  return (
    <div className={classes.content}>
      <div className={classes.description}>
        Update Your Profile
        <div className={classes.text}>
          You can add or calculate your calorie
          goals, water intake and sth else
        </div>
        <Arrow2 onClick={() => openPage()} className={classes.arrow2} />
      </div>
      <PercentageBars />
    </div>
  )
}

const useStyles = makeStyles({
  content: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "baseline",
    margin: "30px 15% 15% 15%",
    justifyContent: "space-around",
    "@media only screen and (max-width: 960px)": {
      margin: "0px"
    },
    "@media only screen and (max-width: 600px)": {
      fontSize: "22px"
    }
  },
  description: {
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
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
  arrow2: {
    "@media only screen and (max-width: 600px)": {
      width: "20%"
    }
  }
});

