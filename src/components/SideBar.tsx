import { useNavigate, useLocation, Link } from "react-router-dom";
import Text from "./Text";
import { useLogOut } from "../services/auth/useAuth";

const SideBar = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const { mutate: logOut, isPending } = useLogOut({
    options: {
      onSuccess: () => {
        localStorage.removeItem("user");
        localStorage.removeItem("access_token");

        navigate("/login");
      },
    },
  });
  return (
    <aside
      id="default-sidebar"
      className="fixed w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-[#F2F2F2] relative">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="/protected/dashboard"
              className={`${
                location.pathname === "/protected/dashboard" ? "text-kl-blue" : "text-[#828282]"
              } flex items-center p-2 hover:text-kl-blue font-extralight group`}
            >
              <svg
                className="w-6 h-6 transition duration-75"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="28" />
                <g id="Halaman Admin Dashboard" clipPath="url(#clip0_0_1)">
                  <g id="Group 2">
                    <g id="Group 3">
                      <g id="home 1">
                        <path
                          id="Vector"
                          className={`${
                            location.pathname === "/protected/dashboard"
                              ? "stroke-kl-blue"
                              : "stroke-[#828282]"
                          }  group-hover:stroke-kl-blue`}
                          d="M3 10.3847L12 2.30774L21 10.3847V23.077C21 23.689 20.7893 24.276 20.4142 24.7088C20.0391 25.1415 19.5304 25.3847 19 25.3847H5C4.46957 25.3847 3.96086 25.1415 3.58579 24.7088C3.21071 24.276 3 23.689 3 23.077V10.3847Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          id="Vector_2"
                          d="M9 25.3847V13.8462H15V25.3847"
                          className={`${
                            location.pathname === "/protected/dashboard"
                              ? "stroke-kl-blue"
                              : "stroke-[#828282]"
                          }  group-hover:stroke-kl-blue`}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_0_1">
                    <rect width="1440" height="1024" fill="white" transform="translate(-30 -68)" />
                  </clipPath>
                </defs>
              </svg>

              <span className="ms-3">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link
              to="/protected/shipping-comps"
              className={`${
                location.pathname === "/protected/shipping-comps"
                  ? "text-kl-blue"
                  : "text-[#828282]"
              } flex items-center p-2 hover:text-kl-blue font-extralight group`}
            >
              <svg
                className="w-6 h-6 transition duration-75"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 3H1V16H16V3Z"
                  className={`${
                    location.pathname === "/protected/shipping-comps"
                      ? "stroke-kl-blue"
                      : "stroke-[#828282]"
                  }  group-hover:stroke-kl-blue`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 8H20L23 11V16H16V8Z"
                  className={`${
                    location.pathname === "/protected/shipping-comps"
                      ? "stroke-kl-blue"
                      : "stroke-[#828282]"
                  }  group-hover:stroke-kl-blue`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 21C6.88071 21 8 19.8807 8 18.5C8 17.1193 6.88071 16 5.5 16C4.11929 16 3 17.1193 3 18.5C3 19.8807 4.11929 21 5.5 21Z"
                  className={`${
                    location.pathname === "/protected/shipping-comps"
                      ? "stroke-kl-blue"
                      : "stroke-[#828282]"
                  }  group-hover:stroke-kl-blue`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z"
                  className={`${
                    location.pathname === "/protected/shipping-comps"
                      ? "stroke-kl-blue"
                      : "stroke-[#828282]"
                  }  group-hover:stroke-kl-blue`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="ms-3">Shipping Comps</span>
            </Link>
          </li>
        </ul>

        <div
          onClick={() => (isPending ? undefined : logOut())}
          className="flex items-center bg-kl-blue absolute w-full p-2 left-0 bottom-28 gap-2 justify-center cursor-pointer hover:bg-kl-blue-light"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="log-out 1">
              <path
                id="Vector"
                d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M16 17L21 12L16 7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_3"
                d="M21 12H9"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>

          <Text
            label={isPending ? "Loading..." : "Log Out"}
            className="font-bold font-roboto text-lg text-white"
          />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
