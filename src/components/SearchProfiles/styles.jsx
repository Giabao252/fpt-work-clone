import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  title: {
    fontWeight: "bold",
    padding: "5%",
  },
  search_wrapper: {
    backgroundColor: "black",
    color: "rgba(255, 196, 0, 0.976)",
    textAlign: "center",
    justifyContent: "center"
  },
  search_box: {
    color: "rgba(255, 196, 0, 0.976)",
    backgroundColor: "rgba(255, 196, 0, 0.976)",
    borderRadius: "5px",
    width: '50%',
    height: "42px",
    marginBottom: "40px"
  },
  submit: {
    color: "black",
    backgroundColor: "rgba(255, 196, 0, 0.976)",
    borderRadius: "5px",
    "&:hover": {
        backgroundColor: "white",
    },
    fontWeight: "bold",
    marginLeft: "10px"
  }
}));
