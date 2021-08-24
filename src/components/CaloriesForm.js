import React from 'react';
import Button from './Button';
import { useForm } from "react-hook-form";
import { TextField, makeStyles } from '@material-ui/core';

const CaloriesForm = ({ calories, setCalories }) => {

  const classes = useStyles();

  const { register, handleSubmit } = useForm();

  const updateCalories = async (data) => {
    const { calories } = data;

    if (calories === "" || !calories) {
      return;
    }
    try {
      const body = JSON.stringify({ _id: "610a7baf6e8f5e3184fc0377", calories });

      const userInfo = await fetch('/user/info/calories', {
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
    <form className={classes.insideContent} onSubmit={handleSubmit(updateCalories)}>
      Your Calorie Needs:
      <div>
        <TextField
          {...register("calories")}
          value={calories}
          onChange={(e) => setCalories(e.target.valueAsNumber)}
          style={{ width: "243px" }}
          id="standard-number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <Button backgroundColor={"#09EB7E"} text={"Save"} />
    </form>
  )
}

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


export default CaloriesForm;
