import React from "react";
import "./FooterRight.css";

export default function FooterRight() {
  return (
    <div className="f-wrapper">
      <nav>
        <ul className="f-nav">
          <li>
            <a className="f-item" href="/">
              Giới thiệu
            </a>
          </li>
          <li>
            <a href="/">Trợ giúp</a>
          </li>
          <li>
            <a href="/">Báo chí</a>
          </li>
          <li>
            <a href="/">API</a>
          </li>
          <li>
            <a href="/">Việc làm</a>
          </li>
          <li>
            <a href="/">Quyền riêng tư</a>
          </li>
          <li>
            <a href="/">Điều khoản</a>
          </li>
          <li>
            <a href="/">Vị trí</a>
          </li>
          <li>
            <a href="/">Tài khoản liên quan nhất</a>
          </li>
          <li>
            <a href="/">Hashtag</a>
          </li>
          <li>
            <a href="/">Ngôn Ngữ</a>
          </li>
        </ul>
      </nav>
      <span className="year">© 2020 Instagram from Facebook</span>
    </div>
  );
}
