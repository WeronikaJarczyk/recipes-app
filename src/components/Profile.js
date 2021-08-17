import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { ReactComponent as Arrow } from '../img/arrow.svg';
import { ProfileOne } from './ProfileOne';
import { ProfileForm } from './ProfileForm';

export const Profile = ({ setIsPageOpen }) => {

  const classes = useStyles();

  const [isPageFormOpen, setIsPageFormOpen] = useState(false);

  return (
    <div className={classes.profile} >
      <div className={classes.side}></div>

      <div className={classes.container}>
        <div className={classes.header}>
          Name Lastname
          <div className={classes.circle}></div>
          <Arrow onClick={() => {
            setIsPageOpen(false);
            setIsPageFormOpen(false);
          }} className={classes.arrow} />
        </div>
        {isPageFormOpen ? <ProfileForm /> : <ProfileOne openPage={() => setIsPageFormOpen(true)} />}
      </div>
    </div>
  )
};

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
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media only screen and (max-width: 960px)": {
      padding: "5px",
      width: "360px",
      height: "auto",
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
  },
});
