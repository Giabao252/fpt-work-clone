import { AppBar, Toolbar, CssBaseline, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NavBar = ({ home_endpoint, user_endpoint, buttonText }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.navbar_wrapper}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h5" className={classes.home}>
          <Link to={home_endpoint} className={classes.home}>
            ProfCraft.
          </Link>
        </Typography>
        <div className={classes.navlinks}>
          <Link to={user_endpoint} className={classes.link}>
            {buttonText}
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;