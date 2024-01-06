import { useStyles } from "./styles";
import {
  Avatar,
  CssBaseline,
  Paper,
  Typography,
  Grid,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useAuth } from "../../hooks/useAuth";

const UserAuth = () => {
  const classes = useStyles();
  const { updateAccessToken, updateIdToken, login, firstLogin } = useAuth();

  //Requires extra sign in event to get access token
  const accessTokenRetriever = useGoogleLogin({
    onSuccess: (response) => {
      //console.log(response);
      updateAccessToken(response.access_token, response.expires_in);
    },
    onFailure: () => console.log("Login attempt failed"),
  });

  //Retrieve, process the JWT ID token + handle user's data
  const handleSignInSuccess = (idToken) => {
    var decoded_claims = jwt_decode(idToken.credential);
    //console.log(decoded_claims);

    accessTokenRetriever();

    updateIdToken(decoded_claims);

    const userID = decoded_claims.sub;
    const userData = {
      name: decoded_claims.name,
      email: decoded_claims.email,
      profile_pic: decoded_claims.picture,
    };

    if (!window.localStorage.getItem(userID)) {
      firstLogin(userID, userData);
    } else {
      login(userID)
    }
  };

  const handleSignInFailure = () => {
    console.log("Login attempt failed");
  };

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
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className={classes.sign_in}>
            Sign in
          </Typography>
          <GoogleLogin
            clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
            buttonText="Sign in with Google account"
            onSuccess={handleSignInSuccess}
            onFailure={handleSignInFailure}
            size="large"
            shape="rectangle"
            theme="filled_blue"
            logo_alignment="left"
            className={classes.submit}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default UserAuth
