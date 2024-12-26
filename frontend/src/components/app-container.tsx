import useAuth from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router";
import { BarLoader } from "react-spinners";

const AppContainer = () => {
  const { user, isLoading } = useAuth();

  return isLoading ? (
    <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />
  ) : user ? (
    //   <UserMenu/>
    <Outlet />
  ) : (
    <Navigate
      to={"/login"}
      replace
      state={{
        redirectUrl: window.location.pathname,
      }}
    />
  );
};

export default AppContainer;
