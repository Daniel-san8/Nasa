import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="py-8">
        <img className="px-8" src="shared/logo.svg" alt="logo" />
      </div>
      <div>
        <img
          className="px-8"
          src="shared/icon-hamburger.svg"
          alt="hamburguer"
        />
      </div>
    </header>
  );
};

export default Header;
