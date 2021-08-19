import { makeStyles } from '@material-ui/core';
import { ReactComponent as Home } from '../img/home.svg';
import { ReactComponent as Today } from '../img/today_icon.svg';
import { ReactComponent as Avatar } from '../img/avatar_icon.svg';
import { ReactComponent as Friends } from '../img/friends_icon.svg';

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.navbar} >
      <div className={classes.navItems}>
        <div className={classes.home} >
          <Home onClick={() => props.open("homePage")} />
        </div>
        <Today style={{ width: "25px" }} onClick={() => props.open("dayPlanPage")} />
        <button onClick={() => props.open("userPage")}><Avatar style={{ width: "25px" }} /></button>
        <Friends style={{ width: "30px" }} />
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  navbar: {
    height: "100vh",
    width: "80px",
    backgroundColor: "#2F2E41",
    borderRadius: " 0 10px 10px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    "@media only screen and (max-width: 960px)": {
      height: "60px",
      width: "100vw",
      backgroundColor: "#2F2E41",
      borderRadius: 0,
      display: "flex"
    }
  },

  home: {
    position: "absolute",
    top: "28px",
    "@media only screen and (max-width: 960px)": {
      position: "unset"
    }
  },

  navItems: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "100px",
    "@media only screen and (max-width: 960px)": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around"
    },
    "@media only screen and (max-width: 600px)": {
      gap: "15vw"
    }
  }
});

export default Navbar;
