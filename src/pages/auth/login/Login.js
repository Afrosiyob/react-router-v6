import React, { useContext, useState } from "react";
import { Col, Row, Form, Input, Button } from "antd";
import "./Login.scss";
import { useMutation } from "react-query";
import { apiLogin } from "../../../service/api/api.service";
import { useNavigate } from "react-location";
import { UserContext } from "../../../context/context";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const { mutate } = useMutation(apiLogin, {
    onMutate: (variables) => {
      setLoading(true);
    },
    onError: (error, variables) => {
      // An error happened!
      setLoading(false);
      console.log("error", error.response.data);
      console.log("variables", variables);
    },
    onSuccess: (data) => {
      setLoading(false);
      console.log("data", data);
      localStorage.setItem("accessToken", data?.data?.accessToken);
      localStorage.setItem("refreshToken", data?.data?.refreshToken);
      setUser(data?.data?.user);
      navigate({
        to: "/home",
        replace: true,
      });
    },
  });

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
    mutate(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row className="login-box">
      <Col xs={0} sm={0} md={12} lg={16} className="left-login-box" />
      <Col xs={24} sm={24} md={12} lg={8}>
        <Row className="right-login-box">
          <Col sm={22} md={20}>
            <Form
              form={form}
              layout="vertical"
              name="control-hooks"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="E-mail"
                name="email"
                hasFeedback
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                  {
                    min: 6,
                    message: "More than 6 character",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-submit-button"
                  loading={loading}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Login;
