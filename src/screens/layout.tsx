import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuth = () => {
      const user = localStorage.getItem("user");
      console.log("🚀 ~ file: layout.tsx:8 ~ handleAuth ~ user:", user);

      if (user) {
        navigate("/dashboard");
      } else {
        navigate("/login");
      }
    };

    handleAuth();
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Layout;
