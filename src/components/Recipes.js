import { Hidden, makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React, { useState } from 'react';
import Button from './Button';
import { NewRecipe } from './NewRecipe';

const Recipes = ({ isPageOpen }) => {

  const classes = useStyles();
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
    <div>
      <Grid container spacing={0} className={classes.page}>
        <Hidden smDown={isButtonClicked}>
          <Grid md={isPageOpen ? 12 : 8} sm={12} className={classes.containerLeft} item>
            <div className={classes.card}>
              Przepisik
            </div>
            <Hidden mdUp>
              <Button text={"Add New Recipe"} onClick={() => setIsButtonClicked(true)} />
            </Hidden>
          </Grid >
        </Hidden>
        <Grid md={isPageOpen ? false : 4} sm={isButtonClicked ? 12 : false} className={classes.containerRight} item>
          <NewRecipe isPageOpen={isPageOpen} isButtonClicked={isButtonClicked} setButton={() => setIsButtonClicked(false)} />
        </Grid>
      </Grid >
    </div >
  )
};

const useStyles = makeStyles({
  page: {
    margin: "50px 0px"
  },
  card: {
    width: "80%",
    height: "80px",
    borderRadius: "20px",
    boxShadow: "4px 4px 40px 2px hsla(0, 0%, 49%, 0.46)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "@media only screen and (max-width: 1280px)": {
      width: "700x",
      fontSize: "20px"
    },
    "@media only screen and (max-width: 600px)": {
      boxShadow: "4px 4px 20px 4px hsla(0, 0%, 60%, 0.46)",
    }
  },
  containerLeft: {
    paddingLeft: "20px",
    height: "100%",
    backgroundColor: "#d9c8fa",
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
    gap: "50px",
    "@media only screen and (max-width: 960px)": {
      alignItems: "center",
      padding: "0"
    }
  },
  containerRight: {
    paddingTop: "50px",
    height: "100%",
    backgroundColor: "#c8fad5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

export default Recipes;
