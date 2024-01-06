import { makeStyles } from "@material-ui/core/styles";
import backgroundImg from "../../asset/herobanner.jpg";

export const useStyles = makeStyles((theme) => ({
  herobanner_wrapper: {
    backgroundImage: `url(${backgroundImg})`,
    color: "white",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  herobanner_content: {
    textAlign: "center",
    color: theme.palette.common.white,
    padding: theme.spacing(2),
    backdropFilter: "brightness(70%)",
  },
  header: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: theme.spacing(2),

  },
}));
