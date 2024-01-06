import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  form_wrapper: {
    backgroundColor: "black",
    color: "rgba(255, 196, 0, 0.976)",
  },
  title: {
    fontWeight: "bold",
    padding: "10px",
  },
  text_fields: {
    color: "rgba(255, 196, 0, 0.976)",
    backgroundColor: "rgba(255, 196, 0, 0.976)",
    margin: "15px",
    borderRadius: "12px",
    width: '40%',
    height: "47px",
    marginLeft: "30px",
  },
  form: {
    overflow: "auto",
    maxHeight: '120vh'
  },
  pdf_paper: {
    backgroundColor:"#808080",
    maxHeight: "120vh",
    alignItems: "center",
    justifyContent: "center",
  },
  fullwidth_fields: {
    color: "rgba(255, 196, 0, 0.976)",
    backgroundColor: "rgba(255, 196, 0, 0.976)",
    margin: "15px",
    borderRadius: "12px",
    width: '87%',
    height: "50px",
    marginLeft: "30px",
  },
  btn: {
    margin: "15px",
    fontWeight: "bold",
    fontSize: "17px",
    backgroundColor: "rgba(255, 196, 0, 0.976)",
    "&:hover": {
        backgroundColor: "white",
    },
  },
  submit: {
    margin: "15px",
    backgroundColor: "blue",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
        backgroundColor: "rgba(255, 196, 0, 0.976)",
        color: "black"
    }
  },
  resume_download_btn: {
    marginLeft: '4%',
    fontWeight: "bold",
    fontSize: "14px",
    backgroundColor: "rgba(255, 196, 0, 0.976)",
    "&:hover": {
        backgroundColor: "white",
    },
  }
}));
