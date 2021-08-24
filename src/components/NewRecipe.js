import { Hidden, makeStyles, TextField, Grid } from '@material-ui/core';
import { ReactComponent as Clock } from '../img/clock.svg';
import { ReactComponent as Calories } from '../img/cal_icon.svg';
import { ReactComponent as Protein } from '../img/protein_fish.svg';
import { ReactComponent as Carbs } from '../img/Bread_icon.svg';
import { ReactComponent as Fat } from '../img/fat_icon.svg';
import { ReactComponent as Arrow } from '../img/arrow.svg';
import { useForm } from "react-hook-form";
import Button from './Button';

export const NewRecipe = ({ isPageOpen, isButtonClicked, setButton }) => {

  const classes = useStyles();

  const { register, handleSubmit } = useForm();

  return (
    <div>
      <Hidden xlDown={isPageOpen} smDown={!isButtonClicked}>
        <div className={classes.header}>
          Add New Recipe
          <Hidden mdUp>
            <Arrow onClick={() => setButton()
            } className={classes.arrow} />
          </Hidden>
        </div>
        <TextField
          {...register("recipeName")}
          id="standard-number"
          type="text"
        />
        <div className={classes.input} style={{ marginTop: "50px" }}>
          <Clock />
          <TextField className={classes.inputArea} id="time" type="number" {...register("time")} />
          <select name="timeUnit" id="timeUnit-select" {...register("unit")}>
            <option value="hour">h</option>
            <option value="minutes">min</option>
          </select>
        </div>

        {/* <Grid container spacing={2} style={{ marginTop: "50px" }}>
          <Grid container item xs={12} spacing={false} justifyContent="center">
            <Grid item xs={3} justifyContent="flex-end">
              <Calories />
            </Grid>
            <Grid item xs={3}>
              <TextField className={classes.inputArea} id="time" type="number" {...register("time")} />
              g
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={false} justifyContent="center">
            <Grid item xs={3}>
              <Protein />
            </Grid>
            <Grid item xs={3}>
              <TextField className={classes.inputArea} id="time" type="number" {...register("time")} />
              g
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={false} justifyContent="center">
            <Grid item xs={3}>
              <Carbs />
            </Grid>
            <Grid item xs={3}>
              <TextField className={classes.inputArea} id="time" type="number" {...register("time")} />
              g
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={false} justifyContent="center">
            <Grid item xs={3}>
              <Fat />
            </Grid>
            <Grid item xs={3}>
              <TextField className={classes.inputArea} id="time" type="number" {...register("time")} />
              g
            </Grid>
          </Grid> */}
        <div className={classes.items}>
          <div className={classes.inputRow}>
            <div className={classes.input}>
              <Calories />
              <TextField className={classes.inputArea} id="time" type="number" {...register("time")} />
            </div>
            g
          </div>
          <div className={classes.input}>
            <Protein />
            <TextField className={classes.inputArea} id="time" type="number" {...register("time")} />
            g
          </div>
          <div className={classes.input}>
            <Carbs />
            <TextField className={classes.inputArea} id="time" type="number" {...register("time")} />
            g
          </div>
          <div className={classes.input}>
            <Fat />
            <TextField className={classes.inputArea} id="time" type="number" {...register("time")} />
            g
          </div>
          <Button text="Add" />
        </div>
      </Hidden>
    </div>
  )
}

const useStyles = makeStyles({
  inputRow: {
    display: "flex",
    justifyContent: "center"
  },
  items: {
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px"
  },
  header: {
    fontWeight: "600",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px"
  },
  input: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end"
  },
  inputArea: {
    width: "76px",
    color: "#3F3D56",
    // margin: "0 10px"
  },
  arrow: {
    width: "30px"
  }
});
