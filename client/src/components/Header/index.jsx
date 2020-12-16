import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  link: {
    color: "white",
    textDecoration: "none",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <NavLink exact to="/" className={classes.link}>
            <Button color="inherit">Home</Button>
          </NavLink>

          <NavLink className={classes.link} to="/mypage">
            <Button color="inherit">My Page</Button>
          </NavLink>

          <NavLink className={classes.link} to="/register">
            <Button color="inherit">Register</Button>
          </NavLink>

          <NavLink className={classes.link} to="/myinfo">
            <Button color="inherit">My Info</Button>
          </NavLink>

          <a
            className={classes.link}
            href="http://www.aao.hcmut.edu.vn/index.php?route=catalog/chuongtrinhdaotao"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="inherit">Chương trình đào tạo</Button>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}
