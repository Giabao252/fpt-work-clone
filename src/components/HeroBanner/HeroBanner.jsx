import { Typography, CssBaseline } from "@material-ui/core";
import { useStyles } from "./styles";

function HeroBanner() {
  const classes = useStyles();

  return (
    <div className={classes.herobanner_wrapper}>
      <CssBaseline />
      <div className={classes.herobanner_content}>
        <Typography className={classes.header} variant="h4">
          Create your profile and CVs with ProfCraft
        </Typography>
      </div>
    </div>
  );
}

export default HeroBanner;
