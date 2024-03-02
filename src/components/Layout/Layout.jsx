import React from "react";
import styles from "./Layout.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function Layout(props) {
  const { pathname } = useLocation();

  return (
    <>
      <NavBar />
      <Outlet />
      <Toaster />
      {pathname.includes("/details") ? "" : <Footer />}
    </>
  );
}
