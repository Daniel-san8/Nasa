import React from "react";
import Header from "./Components/Header";
import MobileNavigation from "./Components/MobileNavigation";
import { ProviderGlobal } from "./Context/GlobalContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Destination from "./Components/Destination";
import Home from "./Components/Main";
function App() {
  return (
    <BrowserRouter>
      <ProviderGlobal>
        <div className="relative bg-home-mobile md:bg-home-tablet lg:bg-home-desktop h-full w-full bg-cover">
          <Header />
          <MobileNavigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
          </Routes>
        </div>
      </ProviderGlobal>
    </BrowserRouter>
  );
}

export default App;
