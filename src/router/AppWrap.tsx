import React, { useEffect } from "react";
import { Layout } from "antd";
import Navigation from "@page/Navigation";
import "./style.less";

const { Sider, Content } = Layout;

interface NavigationProps {
  children?: any
}

export default function (props: NavigationProps) {

  useEffect(() => {
    
  }, [])

  return (
    <Layout className="app-wrap">
      <Sider
        className="navigation"
        theme="light"
      >
        <Navigation />
      </Sider>
      <Content>
        {props.children}
      </Content>
    </Layout>
  )
}