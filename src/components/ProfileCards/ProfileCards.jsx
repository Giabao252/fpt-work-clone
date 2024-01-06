import { useState } from "react";
import { Typography, Card, CardContent, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./styles";

const ProfileCards = ({ profile, idx }) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem(profile[idx]));

    const handleClick = () => {
        navigate("/main/resume_preview", {state: { user }});
    }

    return (
        <Card className={classes.card_wrapper}>
            <CardContent>
                <img
                    src={user.profile_pic}
                    alt="profile pic"
                    className={classes.profile_img}
                />
                <Typography
                    align="center"
                    variant="h5"
                    className={classes.name}
                >
                    {user.name}
                </Typography>
                <Typography align="center" variant="subtitle1">
                    {user.profession}
                </Typography>
                <Typography align="center" variant="subtitle2">
                    {user.email}
                </Typography>
                <Typography align="center" variant="subtitle2">
                    {user.phone}
                </Typography>
                <Typography align="center" variant="subtitle2">
                    {user.residency}
                </Typography>
                <Button className={classes.btn} onClick={handleClick}>Download CV</Button>
            </CardContent>
        </Card>
    );
};

export default ProfileCards;
