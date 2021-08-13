import avatar from '../img/friends_icon.svg';
import { makeStyles } from '@material-ui/core';

function Sidebar() {

  const classes = useStyles();

  return (
    <div className={classes.sidebar}>
      <img src={avatar} alt="" className={classes.circle} />
    </div>
  )
}

const useStyles = makeStyles({
  sidebar: {
    backgroundImage: "linear-gradient(#09EB7E, #01C9DB)",
    width: "90px",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    zIndex: -1,
    "@media only screen and (max-width: 1280px)": {
      display: "none"
    }
  },
  circle: {
    backgroundColor: "#2F2E41",
    width: "50px",
    height: "50px",
    borderRadius: "100%",
    marginTop: "28px"
  }
});

export default Sidebar;
