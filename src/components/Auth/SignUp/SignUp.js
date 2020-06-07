import React, { useState } from "react";
import "./SignUp.css";
import "antd/dist/antd.css";
import { Form, Input, Button, message } from "antd";
import { Link } from "react-router-dom";
// import { DataContext } from "../../../DataProvider/DataProvider";
import { useRouter } from "../../../hooks/useRouter";
import { signup } from "../../../services/auth";

export default function SignUp(props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);

  // let history = useHistory();
  // const [err, setErr] = useState({ list: [] });
  const onChangeFields = (_, allFields) => {
    const isValid = allFields.every(
      (field) => field.errors.length === 0 && field.touched === true
    );
    setIsValidForm(isValid);
  };

  const onFinish = ({ username, fullname, email, password }) => {
    setLoading(true);
    signup(username, fullname, email, password)
      .then((res) => {
        if (res.message === "Signup successfully") {
          message.success(res.message);
          router.push("/login", {
            username: username,
            password: password,
          });
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
    <div className="sign-up-page d-flex-center flex-column">
      <div className="card">
        <div className="title" />
        <div className="sign-up-form">
          <h2 className="form-title">Đăng ký để xem ảnh và video từ bạn bè.</h2>
          <Form
            onFieldsChange={onChangeFields}
            scrollToFirstError
            name="sign-up"
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Hãy nhập tên người dùng của bạn!" },
              ]}
              hasFeedback
            >
              <Input className="form-input" placeholder="Tên người dùng" />
            </Form.Item>
            <Form.Item
              name="fullname"
              rules={[
                { required: true, message: "Hãy nhập tên đầy đủ của bạn!" },
              ]}
              hasFeedback
            >
              <Input
                className="form-input"
                placeholder="Tên đầy đủ người dùng"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Hãy nhập email của bạn!" },
                { type: "email", message: "Email không hợp lệ!" },
              ]}
              hasFeedback
            >
              <Input className="form-input" placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              hasFeedback
              rules={[
                { required: true, message: "Hãy nhập mật khẩu của bạn!" },
              ]}
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
                Đăng ký
              </Button>
            </Form.Item>
          </Form>
          <p className="terms">
            Bằng cách đăng ký, bạn đồng ý với{" "}
            <a href="https://help.instagram.com/581066165581870">Điều khoản</a>,{" "}
            <a href="https://help.instagram.com/519522125107875">
              Chính sách dữ liệu
            </a>{" "}
            và <a href="/legal/cookies/">Chính sách cookie</a> của chúng tôi.
          </p>
        </div>
      </div>
      <div className="card d-flex-center">
        <span>
          Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
        </span>
      </div>
    </div>
  );
}
