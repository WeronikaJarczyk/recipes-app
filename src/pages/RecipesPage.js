import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import React, { useState, useRef } from 'react';
import { SwitchPage } from '../components/SwitchPage';
import Grid from '@material-ui/core/Grid';
import { Hidden, makeStyles } from '@material-ui/core';
import Recipes from '../components/Recipes';
import history from '../history';

export const RecipesPage = () => {

  const [isPageOpen, setIsPageOpen] = useState(false);
  const pageToOpen = useRef('');

  function openPage(page) {
    if (page === "homePage") {
      setIsPageOpen(false);
      history.push('/home');
    } else {
      setIsPageOpen(!isPageOpen);
      pageToOpen.current = page;
    }
  }

  const classes = useStyles(isPageOpen);

  return (
    <>
      <Navbar open={(page) => openPage(page)} />
      <Grid container spacing={0} className={classes.page}>
        <Grid lg={isPageOpen ? 8 : 12} md={isPageOpen ? 7 : 12} sm={!isPageOpen && 12} item >
          <Hidden smDown={isPageOpen}>
            <Recipes isPageOpen={isPageOpen} />
          </Hidden>
        </Grid >
        <Grid className={classes.sideContent} lg={isPageOpen && 4} md={isPageOpen && 5} smdown={isPageOpen ? 12 : undefined} item >
          <SwitchPage pageToOpen={pageToOpen.current} setIsPageOpen={setIsPageOpen} />
        </Grid>
      </Grid >
      {!isPageOpen && <Sidebar />}
    </>
  )
}


const useStyles = makeStyles({
  page: {
    height: '100vh',
    "@media only screen and (max-width: 960px)": {
      height: "auto",
      width: "100vw"
    }
  },
  sideContent: {
    display: isPageOpen => isPageOpen ? 'block' : 'none'
  },
});