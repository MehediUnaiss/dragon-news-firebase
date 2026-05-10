import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <header className="w-11/12 mx-auto ">
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto py-10">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
