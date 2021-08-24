import React, { useState } from 'react';
import Button from './Button';
import { useForm } from "react-hook-form";
import { ReactComponent as Clock } from '../img/clock.svg';
import { TextField, makeStyles } from '@material-ui/core';
import CaloriesForm from './CaloriesForm';

export const ProfileForm = React.forwardRef((props, ref) => {

  const classes = useStyles();

  const [calories, setCalories] = useState();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {

    try {
      const body = JSON.stringify({ _id: "610a7baf6e8f5e3184fc0377", data });

      const userInfo = await fetch('/user/info', {
        method: 'POST',
        body,
        headers: {
          "Content-type": "application/json",
        },
      });
      const json = await userInfo.json();
      console.log(json);
      setCalories(json.calorieNeeds);
      // return json;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className={classes.content}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.insideContent}>
          <div className={classes.input}>
            Weight
            <TextField id="weight" className={classes.inputArea} {...register("weight")} />
            kg
          </div>
          <div className={classes.input}>
            Height
            <TextField id="height" className={classes.inputArea} {...register("height")} />
            cm
          </div>
          <div className={classes.input}>
            Age
            <TextField id="age" className={classes.inputArea} {...register("age")} />
            <div></div>
          </div>
          <select className={classes.select} name="sex" id="sex-select" {...register("sex")}>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <div className={classes.insideContent}>
          Level Of Activity
          <div className={classes.input}>
            <TextField className={classes.inputArea}
              {...register("timesPerWeek")}
              id="standard-number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            /> x per week
          </div>
          <div>
            <select className={classes.select} name="intensity" id="intensity-select" {...register("tempo")}>
              <option value="light">Light</option>
              <option value="moderate">Moderate</option>
              <option value="intense">Intense</option>
            </select>
          </div>
          <div>
            <select className={classes.select} name="trainingType" id="trainingType-select" {...register("trainingType")}>
              <option value="strength">Strength Training</option>
              <option value="aero">Aerobic Training</option>
            </select>
          </div>
          <div className={classes.input}>
            <Clock />
            <TextField className={classes.inputArea} id="time" type="number" {...register("time")} />
            <select name="timeUnit" id="timeUnit-select" {...register("unit")}>
              <option value="hour">h</option>
              <option value="minutes">min</option>
            </select>
          </div>
          <Button text={"Calculate"} />
        </div>
      </form>
      <CaloriesForm calories={calories} setCalories={setCalories} />
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
    marginBottom: "80px"
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
    color: "#3F3D56",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
    margin: "30px 15%",
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
