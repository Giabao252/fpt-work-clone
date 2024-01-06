import { makeStyles } from "@material-ui/core/styles";
import BgImage from "../../asset/bg.jpg";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  form_wrapper: {
    backgroundColor: "black",
    color: "rgba(255, 196, 0, 0.976)",
  },
  image: {
    backgroundImage: `url(${BgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: { 
    margin: theme.spacing(1),
    backgroundColor: "black",
  },
  submit: {
    margin: theme.spacing(4, 5, 10),
  },
  submit_text: {
    fontWeight: "bold",
  },
  sign_in: {
    fontWeight: "bold",
    marginBottom: "5%",
  },
}));
