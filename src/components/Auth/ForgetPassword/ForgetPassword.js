import React from "react";
import "./ForgetPassword.css";
import logo from "../../../images/logoInstargram.png";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};
export default function ForgetPassword() {
  let history = useHistory();

  const onFinish = async values => {
    const data = { email: values.email };
    const url =
      "https://crud-list-book.glitch.me/api/v1/instagram/forgetpassword";
    const requestOptions = {
      method: "PATCH",
      headers: new Headers({
        // Accept: "application/json",
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(data)
    };
    const result = await fetch(url, requestOptions)
      .then(res => res.json())
      .then(data => data)
      .catch(err => console.log(err, err));
    if (result) {
      history.push("/login");
    }
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="forgetpass">
      <div className="wrapper">
        <div className="nav-content">
          <div className="left-nav">
            <a href="/">
              <div>
                <img alt="not found" src={logo} />
              </div>
            </a>
          </div>
          <div className="center-nav" />
          <div className="right-nav" />
        </div>
      </div>
      <div className="for-content">
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your username!"
              }
            ]}
          >
            <Input
              type="text"
              placeholder="email user"
              name="username"
              required
            />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      {/* <div className="for-content">
        <div className="form-forget">
          <div className="top">
            <span className="coreSpriteLockSmall" />
          </div>
          <div className="f-title">2</div>
          <div className="f-content">3</div>
          <div className="f-email">4</div>
          <div className="f-btn">5</div>
          <div className="f-or">6</div>
          <div className="f-goCreateAccount">7</div>
          <div className="f-goLogin">8</div>
        </div>
      </div> */}
    </div>
  );
}
