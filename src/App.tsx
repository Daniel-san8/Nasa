import React from "react";
import Header from "./Components/Header";
import MobileNavigation from "./Components/MobileNavigation";
import { ProviderGlobal } from "./Context/GlobalContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Destination from "./Components/Destination";
import Home from "./Components/Main";
import Background from "./Components/Background";
function App() {
  return (
    <BrowserRouter>
      <ProviderGlobal>
        <Background>
          <Header />
          <MobileNavigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
          </Routes>
        </Background>
      </ProviderGlobal>
    </BrowserRouter>
  );
}

export default App;
