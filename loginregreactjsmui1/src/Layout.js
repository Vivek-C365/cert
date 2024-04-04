import React from "react";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { useSelector } from "react-redux";

function Layout() {
  const { access_token } = useSelector(state => state.auth)
  return (
    <>
      <Home />
      <Footer />
    </>
  );
}

export default Layout;
