import { createContext, useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { PropTypes } from "prop-types";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [idToken, setIdToken] = useLocalStorage("id_token", null);
  const [accessToken, setAccessToken] = useLocalStorage("access_token", null);
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useLocalStorage(
    userId !== null ? userId : null,
    null
  );
  const navigate = useNavigate();

  const updateIdToken = (idToken) => {
    setIdToken(idToken);
  };

  //update the current user's access token state and calculate the token's expiration time
  const updateAccessToken = (accessToken, expiresIn) => {
    const now = new Date().getTime();
    const expirationTime = now + expiresIn * 1000;
    setAccessToken({
      access_token: accessToken,
      expiration_time: expirationTime,
    });

    const timeUntilExpiration = expirationTime - now;
    setTimeout(sessionTimeout, timeUntilExpiration);
  };

  const firstLogin = async (userId, userData) => {
    setUserId(userId);
    setUser(userData);
    navigate("/main/profile", { replace: true });
  };

  const login = async (userId) => {
    setUserId(userId);
    navigate("/main/profile", { replace: true });
  };

  const sessionTimeout = () => {
    localStorage.removeItem("id_token");
    localStorage.removeItem("access_token");
    navigate("/", { replace: true });
  };

  useEffect(() => {
    //if the user is currently in the web page, extend login session
    const now = new Date().getTime();
    if (
      accessToken &&
      now >= accessToken.expiration_time &&
      document.visibilityState == "hidden"
    ) {
      sessionTimeout();
    }
    else if (idToken && document.visibilityState == "visible") {
      setUserId(idToken.sub);
      navigate("/main", { replace: true });
    }
    
}, [userId]);



  const values = useMemo(
    () => ({
      user,
      userId,
      idToken,
      accessToken,
      firstLogin,
      login,
      sessionTimeout,
      updateIdToken,
      updateAccessToken,
    }),
    [user]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

// Added this prop validation to fix the error "children is missing in props validation"
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
