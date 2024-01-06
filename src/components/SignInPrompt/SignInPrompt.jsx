import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useStyles } from "./styles";

const SignInPrompt = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/auth");
    }

    return (
        <div className={classes.component_wrapper}>
            <Button
            className={classes.btn}
            onClick={handleClick}
            >
                Sign in to edit your profile
            </Button>
        </div>
    );
}

export default SignInPrompt;
