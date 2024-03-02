import React, { useContext } from "react";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
 import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound/NotFound";
import Brands from "./components/Brands/Brands";
 import { useEffect } from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { tokenContext } from "./Context/TokenContext";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import Verify from "./components/Verify/Verify";
import ResetPassword from "./components/ResetPassword/ResetPassword";
export default function App() {
  let { token, setToken } = useContext(tokenContext);

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setToken(localStorage.getItem("userToken"));
    }
  }, []);

  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          ),
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path : "forgetpassword",
          element : <ForgetPassword/>
        },
        {
          path : "verify",
          element : <Verify/>
        },
        {
          path: "resetpassword",
          element: <ResetPassword/>
        },
       
        {
          path: "brands",
          element: (
            <ProtectedRoutes>
              <Brands />
            </ProtectedRoutes>
          ),
        },

        {
          path: "cart",
          element: (
            <ProtectedRoutes>
              <Cart />
            </ProtectedRoutes>
          ),
        },
        {
          path: "details/:id",
          element: (
            <ProtectedRoutes>
              <ProductDetails />
            </ProtectedRoutes>
          ),
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}

