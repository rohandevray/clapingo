import React from "react";
import Nav from "../components/nav";
import Home from "../components/home";
import Book from "../components/trail";
import Offer from "../components/offer";
import Work from "../components/works";

const Basic = () => {
  return (
    <div>
      <Nav />
      <Home />
      <Book />
      <Offer />
      <Work />
    </div>
  );
};

export default Basic;
