import React from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const Navigation: React.FC = ()=> {
  const { pathname } = useLocation();
  return (
    <Menu
      defaultSelectedKeys={[pathname]}
      mode="inline"
    >
      <Menu.Item key="/">
        <Link to="/">
          <b>Home</b>
        </Link>
      </Menu.Item>
      <Menu.Item key="/componentShow">
        <Link to="/componentShow">
          <b>Component Show</b>
        </Link>
      </Menu.Item>
      <Menu.Item key="/chat">
        <Link to="/chat">
          <b>Chat</b>
        </Link>
      </Menu.Item>
      <Menu.Item key="/hooks">
        <Link to="/hooks">
          <b>Hooks Demo</b>
        </Link>
      </Menu.Item>
    </Menu>
  )
}


export default Navigation;