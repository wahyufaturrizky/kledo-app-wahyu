import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import {
  LoaderFunctionArgs,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Dashboard from "./screens/dashboard";
import ErrorPage from "./screens/error-page";
import Layout from "./screens/layout";
import Login from "./screens/login";
import LayoutProtected from "./screens/layout-protected";
import ShippingComps from "./screens/shipping-comps";

const user = localStorage.getItem("user");

const queryClient = new QueryClient();

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import("@tanstack/react-query-devtools/build/modern/production.js").then((d) => ({
    default: d.ReactQueryDevtools,
  }))
);

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/protected",
    element: <LayoutProtected />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "shipping-comps",
        element: <ShippingComps />,
      },
    ],
  },
]);

function App() {
  const [showDevtools, setShowDevtools] = React.useState(false);

  React.useEffect(() => {
    // @ts-ignore
    window.toggleDevtools = () => setShowDevtools((old) => !old);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />

      <ReactQueryDevtools initialIsOpen />

      {showDevtools && (
        <React.Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </React.Suspense>
      )}
    </QueryClientProvider>
  );
}

export default App;
