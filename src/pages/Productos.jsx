import React from "react";
import { Footer } from "../components/footer/Footer";
import { Navbar3 } from "../components/Navbar/Navbar3";
import PolerasProduts from "../components/products/PolerasProduts";

export const Productos = () => {
  return (
    <>
      <Navbar3 />
      <PolerasProduts />

      <Footer />
    </>
  );
};
