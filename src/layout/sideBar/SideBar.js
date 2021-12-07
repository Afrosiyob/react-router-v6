import React from "react";
import { Affix, Menu, Row, Button, Col, Badge } from "antd";

import {
  DesktopOutlined,
  NotificationOutlined,
  PieChartOutlined,
  // SearchOutlined,
  SettingFilled,
  UserOutlined,
} from "@ant-design/icons";

// import WhiteLogo from "../../assets/images/white-logo.png";

import "./SideBar.scss";

import { Link } from "react-router-dom";
import Avatar from "antd/lib/avatar/avatar";
function SideBar() {
  const { SubMenu } = Menu;

  return (
    <Affix offsetTop={0}>
      <div className="logo">
        {/* <Row align="middle" justify="center" gutter={ 8 }>
          <img
            src={ WhiteLogo }
            alt="site logo"
            style={ { width: "40%", height: "auto", margin: "10px" } }
          />
        </Row> */}
      </div>

      <Row
        justify="start"
        style={{ padding: "15px 10px 10px 10px " }}
        align="middle"
        gutter={[16, 16]}
      >
        <Col>
          <Avatar
            size="large"
            style={{ cursor: "pointer", marginLeft: "10px" }}
            src={`https://1.bp.blogspot.com/-szrHwWDJkfk/VGj_bKFhiKI/AAAAAAAAD6c/EleQJHuWRjo/s1600/templatezy4.jpg`}
          />
        </Col>

        <Col>
          <Link to={`/setting`}>
            <Button
              style={{ backgroundColor: "transparent", color: "white" }}
              shape="circle"
              icon={<SettingFilled />}
            />
          </Link>
        </Col>

        <Col>
          <Link to={`/notifications`}>
            <Badge count={5}>
              <Button
                style={{ backgroundColor: "transparent", color: "white" }}
                shape="circle"
                icon={<NotificationOutlined />}
              />
            </Badge>
          </Link>
        </Col>
      </Row>

      <span className="user-box">
        <span className="user-name">Тохтамуродов Акмал</span>
        <small className="user-role"> Admin </small>
      </span>

      <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to={`/home`}> Home </Link>
        </Menu.Item>

        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        {/* <SubMenu key="sub2" icon={ <TeamOutlined /> } title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu> */}
        {/* <Menu.Item key="9" icon={ <SettingFilled /> }>
          <Link to={ `${ url }/setting` }> Setting </Link>
        </Menu.Item> */}
      </Menu>
    </Affix>
  );
}

export default SideBar;
