import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function MenuPopupState() {
    const navigate = useNavigate();


    const handleNav = (path) => {
        navigate(path)
    }
  return (
    <PopupState  variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            <FaUserCircle />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={() => {handleNav("/login")}}>Login</MenuItem>
            <MenuItem onClick={() => {handleNav("/registerUser")}}>Cadastro</MenuItem>
            <MenuItem onClick={() => {handleNav("/login")}}>Log Out</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

