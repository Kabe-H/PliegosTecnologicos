import React, { useState } from "react";
//MUI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip"; //router
import { useNavigate } from "react-router-dom";

//Assets
import LogoPliegos from "../../../assets/logo-pliegos.png";
//Styles
import "./styles.css";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onMiCuentaClick = () => {
    setAnchorEl(null);
    console.log(process.env.REACT_APP_URL_PERFIL);
    window.location.href = process.env.REACT_APP_URL_PERFIL;
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onBotonVeDiPanelPress = () => {
    setAnchorEl(null);
    console.log(process.env.REACT_APP_URL_VEDI);
    window.location.href = process.env.REACT_APP_URL_VEDI;
  };

  const onClickLogo = () => {
    navigate(`/`);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, display: "flex" }}>
        <AppBar
          position="static"
          style={{
            backgroundColor: "#70A457",
            position: "relative",
            boxShadow: "1px 8px 6px 1px rgba(0,0,0,0.72)",
          }}
        >
          <Toolbar>
            <Tooltip title="Inicio" arrow>
              <IconButton color="inherit" onClick={onClickLogo}>
                <img
                  id="pliegoImg"
                  alt="Logo Pliegos Header"
                  src={LogoPliegos}
                />
              </IconButton>
            </Tooltip>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "#fafafa" }}
            >
               Pliegos Tecnologicos
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleClick}
            >
              <MenuIcon sx={{ flexGrow: 1, color: "#fafafa" }} />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
          <MenuItem onClick={onMiCuentaClick} divider>Mi cuenta</MenuItem>
          <MenuItem onClick={onBotonVeDiPanelPress}>VeDi Portal</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
