import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import React, { useState, useRef } from 'react';
import { SwitchPage } from '../components/SwitchPage';
import Grid from '@material-ui/core/Grid';
import { Hidden, makeStyles } from '@material-ui/core';

export const HomePage = () => {

  const [isPageOpen, setIsPageOpen] = useState(false);
  const pageToOpen = useRef('');

  function openPage(page) {
    setIsPageOpen(!isPageOpen);
    pageToOpen.current = page;
  }

  const classes = useStyles(isPageOpen);

  return (
    <>
      <Navbar open={(page) => openPage(page)} />
      <Grid style={{ height: '100%' }} container spacing={0} >
        <Grid lg={isPageOpen ? 8 : 12} md={isPageOpen ? 7 : 12} sm={!isPageOpen && 12} item >
          <Hidden smDown={isPageOpen}>
            <Main />
          </Hidden>
        </Grid >
        {/* <Grid style={{ display: isPageOpen ? 'block' : 'none' }} lg={isPageOpen && 4} md={isPageOpen && 5} smdown={isPageOpen ? 12 : undefined} item > */}
        <Grid className={classes.something} lg={isPageOpen && 4} md={isPageOpen && 5} smdown={isPageOpen ? 12 : undefined} item >
          <SwitchPage pageToOpen={pageToOpen.current} />
        </Grid>
      </Grid >
      <Sidebar />
    </>
  )
}


const useStyles = makeStyles({
  something: {
    display: isPageOpen => isPageOpen ? 'block' : 'none'
  },
});