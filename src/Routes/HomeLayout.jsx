import { Navigate, useOutlet } from "react-router-dom";
import { NavBar } from "../components/export";
import { useAuth } from "../hooks/useAuth";

const HomeLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/main/profile" replace />;
  }

  return (
    <div>
      <NavBar home_endpoint="/" user_endpoint="/auth" buttonText="Login" />
      {outlet}
    </div>
  );
};

export default HomeLayout;
