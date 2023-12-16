import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { useEffect } from "react";

function LayoutProtected() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuth = () => {
      const user = localStorage.getItem("user");

      if (user) {
        navigate("/protected/dashboard");
      } else {
        navigate("/login");
      }
    };

    handleAuth();
  }, [navigate]);

  return (
    <div>
      <Header />

      <SideBar />

      <Outlet />
    </div>
  );
}

export default LayoutProtected;
