import React, { useContext, useEffect, useState } from "react";
import "./Comment.css";
import { DataContext } from "../../../../DataProvider/DataProvider";
import {
  addComment,
  getDataComments,
  addLike,
} from "../../../../services/comment";

export default function Comment(props) {
  const { item } = props;
  const contex = useContext(DataContext);
  const countLiked = item.usersLiked.length;
  const [valueComment, setValueComment] = useState({ comment: "" });
  const [comments, setComments] = useState([]);
  const [liked, setLiked] = useState({ count: countLiked, status: false });
  useEffect(() => {
    getDataComments(item.postId).then((doc) => setComments(doc));
  }, [item.postId]);

  useEffect(() => {
    // check liked
    // params postId, userId
    // had in listLiked => state: true
    // hadn't in listLiked => state: false
    const result = item.usersLiked.find(
      (item) => item.userId === contex.user.id
    );
    result ? setLiked({ status: true }) : setLiked({ status: false });
  }, [contex.user.id, item.usersLiked]);
  const onLike = async () => {
    // params: userId postId, authorId
    addLike(contex.user.id, item.postId, item.userId).then((doc) => {
      if (doc.message !== "user liked") {
        setLiked({ count: doc.post.usersLiked.length, status: true });
      }
    });
  };
  const onChange = (e) => {
    setValueComment({ comment: e.target.value });
  };
  const onSubmit = async () => {
    const authorId = contex.actions.getUserNameById(item.userId);
    addComment(
      item.postId,
      authorId,
      contex.user.id,
      valueComment.comment
    ).then((doc) => setComments(doc.comments));
    setValueComment({ comment: "" });
  };
  return (
    <div className="comment">
      <section className="t-action">
        <span className="fr66n">
          <button onClick={onLike} className="wpO6b" type="button">
            {!liked.status && (
              <svg
                aria-label="Thích"
                className="_8-yf5 "
                fill="#262626"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path
                  clipRule="evenodd"
                  d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z"
                  fillRule="evenodd"
                />
              </svg>
            )}
            {liked.status && (
              <svg
                aria-label="Bỏ thích"
                className="_8-yf5 "
                fill="#ed4956"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
            )}
          </button>
        </span>
        <span className="_15y0l">
          <button className="wpO6b " type="button">
            <svg
              aria-label="Bình luận"
              className="_8-yf5 "
              fill="#262626"
              height="24"
              viewBox="0 0 48 48"
              width="24"
            >
              <path
                clipRule="evenodd"
                d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </span>
        <button className="wpO6b " type="button">
          <svg
            aria-label="Chia sẻ bài viết"
            className="_8-yf5 "
            fill="#262626"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path d="M46.5 3.5h-45C.6 3.5.2 4.6.8 5.2l16 15.8 5.5 22.8c.2.9 1.4 1 1.8.3L47.4 5c.4-.7-.1-1.5-.9-1.5zm-40.1 3h33.5L19.1 18c-.4.2-.9.1-1.2-.2L6.4 6.5zm17.7 31.8l-4-16.6c-.1-.4.1-.9.5-1.1L41.5 9 24.1 38.3z" />
            <path d="M14.7 48.4l2.9-.7" />
          </svg>
        </button>
        <span className="wmtNn">
          <button className="wpO6b " type="button">
            <svg
              aria-label="Lưu"
              className="_8-yf5 "
              fill="#262626"
              height="24"
              viewBox="0 0 48 48"
              width="24"
            >
              <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z" />
            </svg>
          </button>
        </span>
      </section>
      <section className="likeNumbers">
        <button>
          <span>{liked.count}</span> lượt thích
        </button>
      </section>
      <div className="l-comments">
        <div className="l-comment">
          <a href="/" title="username">
            {contex.actions.getUserNameById(item.userId)}
          </a>{" "}
          <span className="caption">{item.caption}</span>
        </div>
        {comments &&
          comments.map((item, index) => (
            <div key={index} className="l-comment">
              <a href="/" title="username">
                {contex.actions.getUserNameById(item.userId)}
              </a>{" "}
              <span>{item.content}</span>
            </div>
          ))}
      </div>
      <div className="timePost">
        <a href="/">4 GiỜ TRƯỚC</a>
      </div>
      <section className="addComment">
        <div>
          <div className="form">
            <input
              value={valueComment.comment}
              name="comment"
              onChange={onChange}
              placeholder="Thêm bình luận…"
            />
            <button onClick={onSubmit}>Đăng</button>
          </div>
        </div>
      </section>
    </div>
  );
}
