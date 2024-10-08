import { useState } from "react";

import "./App.css";
import MainNavbar from "./components/MainNavbar";

import Heading from "./components/Heading";
import TableHeading from "./components/TableHeading";
import Footer from "./components/Footer";
import CardGrid from "./components/Card";
import Card from "./components/Card";
import Table from "./components/Table";
import SignupForm from "./components/SignUp";

function App() {
  return (
    <div className="">
      <MainNavbar />
      <div className="  w-full  border-t border-gray-200 dark:border-gray-700 my-4" />

      <Heading />

      <TableHeading />
      <hr className="border-t border-gray-300 w-full block mt-10 mb-6" />
      <Table />
      <hr className="border-t border-gray-300 w-full block mt-10 mb-6" />
      <Card />

      <Footer />
    </div>
  );
}

export default App;
