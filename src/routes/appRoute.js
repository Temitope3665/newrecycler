import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Home from "../pages";
import "@fontsource/josefin-sans";
import "@fontsource/roboto";
import WastePickup from "../pages/WastePickup";
import Successful from "../pages/Successful";

const AppRoute = () => {

  return render(
    <BrowserRouter>
     <ChakraProvider theme={theme} resetCSS>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/waste-pick-up" element={<WastePickup />} />
        <Route path="/success" element={<Successful />} />
      </Routes>
     </ChakraProvider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

export default AppRoute;
