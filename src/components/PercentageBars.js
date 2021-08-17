import { makeStyles } from '@material-ui/core';
import { ReactComponent as Flame } from '../img/flame.svg';
import { ReactComponent as Water } from '../img/water_bar.svg';
import { ReactComponent as Burnt } from '../img/burnt_bar.svg';
import { ReactComponent as Broccoli } from '../img/broccoli.svg';
import { ReactComponent as Calories } from '../img/calorie_bar.svg';
import { ReactComponent as WaterDrops } from '../img/water_drops.svg';


const PercentageBars = () => {

  const classes = useStyles();

  return (
    <div className={classes.graph}>
      <div>
        <div className={classes.graphHeader}>
          <WaterDrops />
          Water
          <div className={`${classes.percentage} ${classes.blue}`}>
            50%
          </div>
        </div>
        <Water />
      </div>

      <div>
        <div className={classes.graphHeader}>
          <Broccoli />
          Calories
          <div className={`${classes.percentage} ${classes.green}`}>
            60%
          </div>
        </div>
        <Calories />
      </div>

      <div>
        <div className={classes.graphHeader}>
          <Flame />
          Burnt calories
          <div className={`${classes.percentage} ${classes.red}`}>
            60%
          </div>
        </div>
        <Burnt />
      </div>
    </div >
  )
}

const useStyles = makeStyles({

  graph: {
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
    gap: "20px",
    "@media only screen and (max-width: 960px)": {
      margin: "0%",
      marginTop: "50px"
    },
    "@media only screen and (max-width: 600px)": {
      marginTop: "10px"
    }
  },

  graphHeader: {
    fontSize: "20px",
    display: "flex",
    justifyContent: "flex-start",
    gap: "10px",
    position: "relative",
    "@media only screen and (max-width: 600px)": {
      fontSize: "18px"
    }
  },

  percentage: {
    fontSize: "20px",
    position: "absolute",
    right: 0,
    "@media only screen and (max-width: 600px)": {
      fontSize: "18px"
    }
  },

  blue: {
    color: "#02A0F5"
  },

  green: {
    color: "#09EB7E"
  },

  red: {
    color: "#F76775"
  }
});

export default PercentageBars
