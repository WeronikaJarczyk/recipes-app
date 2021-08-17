import React from 'react';
import Button from './Button';
import { ReactComponent as Clock } from '../img/clock.svg';
import { TextField, makeStyles } from '@material-ui/core';

export const ProfileForm = React.forwardRef((props, ref) => {

  const classes = useStyles();

  return (
    <div className={classes.content}>
      <form>
        <div className={classes.insideContent}>
          <div className={classes.input}>
            Weight
            <TextField id="weight" className={classes.inputArea} />
            kg
          </div>
          <div className={classes.input}>
            Height
            <TextField id="height" className={classes.inputArea} />
            cm
          </div>
          <div className={classes.input}>
            Age
            <TextField id="age" className={classes.inputArea} />
            <div></div>
          </div>
          <select className={classes.select} name="sex" id="sex-select">
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <div className={classes.insideContent}>
          Level Of Activity
          <div className={classes.input}>
            <TextField className={classes.inputArea}
              id="standard-number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            /> x per week
          </div>
          <div>
            <select className={classes.select} name="intensity" id="intensity-select">
              <option value="light">Light</option>
              <option value="moderate">Moderate</option>
              <option value="intense">Intense</option>
            </select>
          </div>
          <div>
            <select className={classes.select} name="typeOfTraining" id="typeOfTraining-select">
              <option value="strength">Strength Treining</option>
              <option value="aero">Aerobic Treining</option>
            </select>
          </div>
          <div className={classes.input}>
            <Clock />
            <TextField className={classes.inputArea} id="time" type="number" />
            <select name="timeUnit" id="timeUnit-select">
              <option value="hour">h</option>
              <option value="minutes">min</option>
            </select>
          </div>
          <Button backgroundColor={"#3F3D56"} text={"Calculate"} />
        </div>
      </form>
      <form className={classes.insideContent}>
        Your Calorie Needs:
        <div>
          <TextField
            id="standard-number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <Button backgroundColor={"#09EB7E"} text={"Save"} />
      </form>
    </div>
  )
});

const useStyles = makeStyles({
  select: {
    color: "#3F3D56",
    width: "100%",
    fontWeight: "200"
  },
  insideContent: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "5px",
  },
  input: {
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  inputArea: {
    width: "76px",
    color: "#3F3D56"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
    margin: "30px 15% 15% 15%",
    gap: "20px",
    "@media only screen and (max-width: 960px)": {
      margin: "0px"
    },
    "@media only screen and (max-width: 600px)": {
      fontSize: "22px"
    }
  },
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
  }
});
