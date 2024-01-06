import { useAuth } from "../../hooks/useAuth";
import { Typography, Paper, Grid, CssBaseline } from "@material-ui/core";
import { useStyles } from "./styles";

function ProfilePage() {
    const classes = useStyles();
    const { user } = useAuth();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={6} className={classes.image} />
            <Grid
                className={classes.form_wrapper}
                item
                xs={12}
                sm={8}
                md={6}
                component={Paper}
                elevation={6}
                square
            >
                <div className={classes.paper}>
                    <img
                        src={user.profile_pic}
                        alt="user image"
                        className={classes.avatar}
                    />
                    <Typography
                        component="h1"
                        variant="h5"
                        className={classes.sign_in}
                    >
                        {user.name}
                    </Typography>
                </div>
            </Grid>
        </Grid>
    );
}

export default ProfilePage;
