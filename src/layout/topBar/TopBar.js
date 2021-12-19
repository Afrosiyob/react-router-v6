import React from "react";
import {
  Avatar,
  Col,
  Row,
  // Select,
  // Tooltip,
  Menu,
  Button,
  // Badge,
  Dropdown,
} from "antd";

import {
  LogoutOutlined,
  // SettingOutlined,
  // NotificationOutlined,
} from "@ant-design/icons";

import "./TopBar.scss";
// import { Link } from "react-router-dom";
// import BtnPrimary from "../../components/btnPrimary/BtnPrimary";

function TopBar() {
  // const { i18n, t } = useTranslation();
  // const { Option } = Select;
  // let history = useHistory();
  // const dispatch = useDispatch();

  const logoutHandle = () => {
    // dispatch( authLogout( history ) );
  };

  // const { loading } = useSelector( ( state ) => state.authReducer );
  const menu = (
    <Menu>
      {/* <Menu.Item key="1">
        <Link to={ `${ url }/setting` }>
          <Button type="text" size="small" icon={ <SettingOutlined /> }>
            { " " }
            Setting{ " " }
          </Button>
        </Link>
      </Menu.Item> */}

      <Menu.Item key="2">
        {" "}
        <Button
          type="text"
          danger
          size="small"
          icon={<LogoutOutlined />}
          onClick={logoutHandle}
          // loading={ loading }
        >
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );

  // const handleChange = ( lang ) => {
  //   i18n.changeLanguage( lang );
  // };

  return (
    <Row gutter={[16, 16]} justify="end" align="middle">
      {/* <Col>
   
        <Tooltip color="blue" placement="left" title={ t( `msg` ) }>
          <Select
            defaultValue={
              localStorage.getItem( "i18nextLng" )
                ? localStorage.getItem( "i18nextLng" )
                : "uz"
            }
            style={ { width: 70, marginRight: "10px" } }
            onChange={ handleChange }
          >
            <Option value="uz">uz</Option>
            <Option value="ru">ru</Option>
            <Option value="en">en</Option>
          </Select>
        </Tooltip>
      </Col> */}
      {/* <Col>
      
        <Badge count={5}>
          <BtnPrimary icon={<NotificationOutlined />} label="Notification" />
        </Badge>
   
      </Col>
      <Col>
        
        <Link to={`/setting`}>
          <BtnPrimary icon={<SettingOutlined />} label="Setting" />
        </Link>
      
      </Col> */}
      <Col>
        <span className="user-box">
          <span className="user-name">John Doe</span>
          <small className="user-role"> Admin </small>
        </span>
      </Col>

      <Col>
        <Dropdown overlay={menu} placement="bottomRight" arrow>
          <Avatar
            size="large"
            style={{ cursor: "pointer", marginLeft: "10px" }}
            src={`https://1.bp.blogspot.com/-szrHwWDJkfk/VGj_bKFhiKI/AAAAAAAAD6c/EleQJHuWRjo/s1600/templatezy4.jpg`}
          />
        </Dropdown>
      </Col>
    </Row>
  );
}

export default TopBar;
