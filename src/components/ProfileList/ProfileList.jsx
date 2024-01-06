/* eslint-disable react/prop-types */
import { Typography, Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import { ProfileCards } from "../export";

const ProfileList = ({ profiles }) => {
    const classes = useStyles();
    
    return (
        <div className={classes.list_wrapper}>
            <Typography variant="h5" align="center" className={classes.header}>
                Showing Results
            </Typography>
            <Grid container spacing={5} justifyContent="center">
                {profiles.map((_, index) => (
                    <Grid item key={index}>
                        <ProfileCards idx={index} profile={profiles}/>
                    </Grid>
                ) )}
            </Grid>
        </div>
    );
};

export default ProfileList;
