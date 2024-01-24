import React, { useContext, useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./header.css";
import { LoginContext } from "./ContextProvider/Context";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate, NavLink, unstable_HistoryRouter } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { logindata, setLoginData } = useContext(LoginContext);
  const uid = localStorage.getItem("uid");
  const history = useNavigate();

  const [isOpen, setisOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutuser = async () => {
    localStorage.removeItem("uid");
    navigate("/login");
  };

  const goDash = () => {
    history("/");
  };

  const goError = () => {
    history("*");
  };

  function toggle() {
    history("/profile");
  }

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">
            <h1>FasTrain</h1>
          </NavLink>
          {uid && (
            <div className="avtar">
              <Avatar style={{ background: "blue" }} onClick={handleClick} />
            </div>
          )}

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <div>
              <MenuItem
                onClick={() => {
                  toggle();
                  handleClose();
                }}
              >
                Profile
              </MenuItem>
              {localStorage.getItem("uid") != null && (
                <MenuItem
                  onClick={() => {
                    logoutuser();
                    handleClose();
                  }}
                >
                  Logout
                </MenuItem>
              )}
            </div>
          </Menu>
        </nav>
      </header>
    </>
  );
};

export default Header;
