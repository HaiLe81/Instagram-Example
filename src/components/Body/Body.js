import React from "react";
import "./Body.css";
import ListStory from "../ListStory/ListStory";
import TimeLine from "../TimeLine/TimeLine";
import RecommendedFriends from "../RecommendedFriends/RecommendedFriends";
import UserInfo from "../UserInfo/UserInfo";
import FooterRight from "../FooterRight/FooterRight";

export default function Body() {
  return (
    <main className="">
      <section className="m-content">
        <div className="left-content">
          <ListStory />
          <TimeLine />
        </div>
        <div className="right-content">
          <UserInfo />
          <RecommendedFriends />
          <FooterRight />
        </div>
      </section>
    </main>
  );
}
