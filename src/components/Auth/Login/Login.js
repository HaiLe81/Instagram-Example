import React, { useState, useContext, useMemo } from "react";
import "./Login.css";
import "antd/dist/antd.css";
import { Form, Input, Button, message } from "antd";
import { Link } from "react-router-dom";
import { DataContext } from "../../../DataProvider/DataProvider";
import { useRouter } from "../../../hooks/useRouter";
import { login } from "../../../services/auth";

export default function Login(props) {
  const context = useContext(DataContext);
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);

  const onChangeFields = (_, allFields) => {
    const isValid = allFields.every(
      (field) => field.errors.length === 0 && field.touched === true
    );
    setIsValidForm(isValid);
  };

  const initialValues = useMemo(() => {
    const { username = "", password = "" } = router.state || {};
    if (username) setIsValidForm(true);
    return { username, password };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFinish = ({ username, password }) => {
    setLoading(true);
    login(username, password)
      .then((res) => {
        setLoading(false);
        if (res.message === "You have successfully logged in") {
          context.setLoggedIn(true);
          context.setUser(res.user);

          message.success(res.message);
          let to = "/";
          if (router.state && router.state.from) {
            to = router.state.from;
          }
          router.push(to);
        } else {
          message.error(res.message);
        }
      })
      .catch((error) => {
        setLoading(false);
        message.error(error.message);
      });
  };

  return (
    <div className="sign-in-page d-flex-center flex-column">
      <div className="card">
        <div className="title" />
        <div className="sign-in-form">
          <Form
            initialValues={initialValues}
            onFieldsChange={onChangeFields}
            scrollToFirstError
            name="sign-in"
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Hãy nhập username của bạn!" },
              ]}
              hasFeedback
            >
              <Input className="form-input" placeholder="username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Hãy nhập mật khẩu của bạn!" },
              ]}
              hasFeedback
            >
              <Input.Password className="form-input" placeholder="Mật khẩu" />
            </Form.Item>
            <Form.Item>
              <Button
                disabled={!isValidForm}
                type="primary"
                htmlType="submit"
                loading={loading}
                className="form-button"
              >
                Đăng Nhập
              </Button>
            </Form.Item>
          </Form>
          <Link className="forgot-link" to="/forget">
            Bạn quên mật khẩu?
          </Link>
        </div>
      </div>
      <div className="card d-flex-center">
        <span>
          Bạn chưa có tài khoản? <Link to="/signup">Đăng ký</Link>
        </span>
      </div>
    </div>
  );
}
