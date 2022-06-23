import React from "react";
import logo from "../../assets/images/logo.png";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="fixed w-screen h-16 px-16 grid grid-cols-header grid-rows-1 items-center bg-white/50 md:px-4 md:grid-cols-2 md:bg-transparent">
            <div className="w-full">
                <img src={logo} className="w-28 md:w-16" alt="logo" onClick={() => window.location.reload()} />
            </div>
            <Navbar />
        </header >
    );
};

export default Header;