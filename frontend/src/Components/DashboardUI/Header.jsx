import React from "react";

function Header() {
    const logoutHandler = () => {
      console.log("logout");
    };
    return (
        <header className="header">
            <div className="menu-icon"></div>
            <div className="header-left"></div>
            <div className="header-right">
                <h3 onClick={logoutHandler}>Logout</h3>
            </div>
        </header>
    );
}

export default Header;
