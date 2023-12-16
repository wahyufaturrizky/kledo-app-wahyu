import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
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
      <Outlet />
    </div>
  );
}

export default Layout;
