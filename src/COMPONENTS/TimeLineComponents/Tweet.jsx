import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import comment from "../../assets/tweetLogo/comment.png";
import Vector from "../../assets/tweetLogo/Vector.png";
import share from "../../assets/tweetLogo/share.png";
import statistics from "../../assets/tweetLogo/statistics.png";
import { TwitterContextLogin } from "../../contextapi/TwitterContextLogin";

export const Tweet = () => {
  const {
    posts,
    setPosts,
    newPostCreate,
    setNewPostCreate,
    postCreated,
    setPostCreated,
  } = useContext(TwitterContextLogin);

  const [liked, setLiked] = useState(false);
  const [like, setLike] = useState(20);

  const handleLikeClick = () => {
    setLiked(!liked);
    setLike(like + 1);
  };

  useEffect(() => {
    axios
      .get("https://6658a29a5c36170526494b43.mockapi.io/users/pokemons")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (postCreated) {
      axios
        .get("https://6658a29a5c36170526494b43.mockapi.io/users/create")
        .then((res) => {
          setNewPostCreate(res.data);
          setPostCreated(false); // Veri alındıktan sonra postCreated state'ini false yap
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [postCreated]);

  const randomYorum = Math.floor(Math.random() * 50);

  const createTweet = posts.map((post, index) => (
    <div key={index} className="post-container">
      <div className="post-item1">
        <span>
          <img src={post.avatar} alt="avatar" />
        </span>
        <div className="post-item2">
          <div>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              {post.name}{" "}
            </span>{" "}
            <span style={{ color: "gray", fontSize: "1rem" }}>
              @{post.userName}
            </span>
          </div>

          <div>
            <p>{post.news}</p>
          </div>

          <div className="post-item3">
            <img src={post.imageNews} alt="imageNews" />
          </div>
          <div className="postImage-container">
            <div className="postImage-item1">
              <img src={comment} alt="comment" />
              <span style={{ color: "gray" }}>{randomYorum}</span>
            </div>
            <img src={Vector} alt="Vector" />

            <div className="postImage-item2">
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: liked ? "red" : "gray", cursor: "pointer" }}
                onClick={handleLikeClick}
              />
              <span className="like-count" style={{ color: "gray" }}>
                {like}
              </span>
            </div>

            <img src={share} alt="share" />
            <img src={statistics} alt="statictics" />
          </div>
        </div>
      </div>
    </div>
  ));

  const newPost = newPostCreate.reverse().map((post, index) => (
    <div key={index} className="newpost-container">
      <div className="post-item1">
        <span>
          <img src={post.avatar} alt="avatar" />
        </span>
        <div className="post-item2">
          <div>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              {post.name}{" "}
            </span>{" "}
            <span style={{ color: "gray", fontSize: "1rem" }}>
              @{post.userName}
            </span>
          </div>
          <div>
            <p>{post.post}</p>
          </div>
          <div className="postImage-container">
            <div className="postImage-item1">
              <img src={comment} alt="comment" />
              <span style={{ color: "gray" }}>{randomYorum}</span>
            </div>
            <img src={Vector} alt="Vector" />

            <div className="postImage-item2">
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: liked ? "red" : "gray", cursor: "pointer" }}
                onClick={handleLikeClick}
              />
              <span className="like-count" style={{ color: "gray" }}>
                {like}
              </span>
            </div>

            <img src={share} alt="share" />
            <img src={statistics} alt="statictics" />
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div>{newPost}</div>
      <div>{createTweet}</div>
    </div>
  );
};
