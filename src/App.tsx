import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import MobileNavigation from "./Components/MobileNavigation";
import { ProviderGlobal } from "./Context/GlobalContext";
function App() {
  return (
    <ProviderGlobal>
      <div className="relative bg-home-mobile md:bg-home-tablet lg:bg-home-desktop h-full w-full bg-cover">
        <Header />
        <Main />
        <MobileNavigation />
      </div>
    </ProviderGlobal>
  );
}

export default App;
