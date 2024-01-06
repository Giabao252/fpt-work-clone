import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { NavBar } from "../components/export";

const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <NavBar
        home_endpoint="/main"
        user_endpoint="/main/profile"
        buttonText={user.name}
      />
      {outlet}
    </div>
  );
};

export default ProtectedLayout;
