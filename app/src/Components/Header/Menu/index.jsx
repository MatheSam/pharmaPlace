import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function MenuPopupState() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const user = JSON.parse(localStorage.getItem("@userData"));

  const navigate = useNavigate();

  const handleNav = (path, isTrue = false) => {
    navigate(path);

    if (isTrue) {
      localStorage.clear();
    }
  };

  const token = localStorage.getItem("@userToken");

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <FaUserCircle />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {token ? (
          user.isPharmacy ? (
            <div>
              <MenuItem
                onClick={() => {
                  handleNav("/dashboard");
                }}
              >
                Minha Farmácia
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleNav("/login", true);
                }}
              >
                Log Out
              </MenuItem>
            </div>
          ) : (
            <MenuItem
              onClick={() => {
                handleNav("/login", true);
              }}
            >
              Log Out
            </MenuItem>
          )
        ) : (
          <div>
            <MenuItem
              onClick={() => {
                handleNav("/login");
              }}
            >
              Login
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleNav("/login");
              }}
            >
              Cadastro
            </MenuItem>
          </div>
        )}
      </Menu>
    </div>
  );
}
