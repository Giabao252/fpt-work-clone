import { useOutlet } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";

const AuthLayout = () => {
  const outlet = useOutlet();

  return (
    <AuthProvider > {outlet} </AuthProvider>
  );
};

export default AuthLayout;
