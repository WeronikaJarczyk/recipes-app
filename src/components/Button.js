import { makeStyles } from "@material-ui/core";

const Button = (props) => {

  const classes = useSyles(props);

  return (
    <button className={classes.button} onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const useSyles = makeStyles({
  button: {
    textAlign: "center",
    color: "white",
    width: "243px",
    height: "35px",
    borderRadius: "15px",
    backgroundColor: (props) => props?.backgroundColor ?? "#3F3D56"
  }
});

export default Button;
