import React from "react";
import { Outlet } from "react-router-dom";
import { Layout, Affix } from "antd";

import SideBar from "../../layout/sideBar/SideBar";
import TopBar from "../../layout/topBar/TopBar";

import { Header } from "antd/lib/layout/layout";

import "./Admin.scss";

const Admin = () => {
  const { Content, Footer, Sider } = Layout;

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          trigger={null}
          collapsible
          //   collapsed={ width < 768 ? true : collapsed }
          //   onCollapse={ onCollapse }
        >
          <SideBar />
        </Sider>
        <Layout className="site-layout">
          {" "}
          <Affix offsetTop={0}>
            <Header
              className="site-layout-background"
              style={{ padding: "0 16px", borderBottom: "1px solid lightgrey" }}
            >
              <TopBar />
            </Header>
          </Affix>
          <Content style={{ margin: "0 16px" }}>
            <div style={{ padding: 24 }}>
              <Outlet />
            </div>{" "}
          </Content>{" "}
          <Footer style={{ textAlign: "center" }}>
            {" "}
            2021 Created by Afrosiyob🐝{" "}
          </Footer>{" "}
        </Layout>{" "}
      </Layout>{" "}
      {/* <Link to="/admin/page-one"> page one </Link>
      <Link to="/admin/page-two"> page two </Link> */}
    </>
  );
};

export default Admin;
