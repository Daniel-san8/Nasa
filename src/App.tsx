import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import MobileNavigation from "./Components/MobileNavigation";
function App() {
  return (
    <div className="relative bg-home-mobile md:bg-home-tablet lg:bg-home-desktop h-full w-full bg-cover">
      <Header />
      <Main />
      <MobileNavigation />
    </div>
  );
}

export default App;
