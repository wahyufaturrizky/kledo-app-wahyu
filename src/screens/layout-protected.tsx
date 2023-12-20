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
      <Header className="bg-kl-blue flex justify-between p-4 z-10 sticky top-0" />

      <SideBar />

      <Outlet />
    </div>
  );
}

export default LayoutProtected;
