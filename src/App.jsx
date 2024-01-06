import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import { Home, ProtectedHomePage } from "./mains/export";
import { UserAuth, ProfilePage, ResumePage } from "./components/export";
import { HomeLayout, ProtectedLayout, AuthLayout } from "./Routes/export";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<AuthLayout />}
    >
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<UserAuth />} />
      </Route>

      <Route element={<ProtectedLayout />}>
        <Route path="/main" element={<ProtectedHomePage />} />
        <Route path="/main/profile" element={<ProfilePage />} />
        <Route path="/main/resume_preview" element={<ResumePage />} />
      </Route>
    </Route>
  )
);
