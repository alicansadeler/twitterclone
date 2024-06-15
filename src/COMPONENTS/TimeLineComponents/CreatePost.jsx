import { useContext } from "react";
import { TwitterContextLogin } from "../../contextapi/TwitterContextLogin";

import Gif from "../../assets/LOGOpost/gif.png";
import image from "../../assets/LOGOpost/image.png";
import stats from "../../assets/LOGOpost/stats.png";
import smile from "../../assets/LOGOpost/smile.png";
import schedule from "../../assets/LOGOpost/schedule.png";

export const CreatePost = () => {
  const { createPost, setCreatePost, user } = useContext(TwitterContextLogin);
  const { avatar } = user;

  const handleChange = (event) => {
    event.preventDefault();
    let { value } = event.target;
    setCreatePost({ ...createPost, post: value });
  };

  const handleClick = () => {
    console.log("Tweet gönderildi:", createPost.post);
    setCreatePost({ post: "" });
  };

  return (
    <div className="create-container">
      <div className="create-item1">
        <img src={avatar} alt="avatar" />
        <label>
          <input
            name="textarea"
            id="textarea"
            placeholder="What's happening"
            onChange={handleChange}
            value={createPost.post}
            style={{
              width: "30rem",
              height: "5rem",
              border: "none",
              fontSize: "1.1rem",
              color: "gray",
            }}
          />
        </label>
      </div>
      <div className="create-item2">
        <span>
          <img src={image} alt="image" />
          <img src={Gif} alt="Gif" />
          <img src={stats} alt="stats" />
          <img src={smile} alt="smile" />
          <img src={schedule} alt="schedule" />
        </span>
        <button onClick={handleClick}>Tweet</button>
      </div>
    </div>
  );
};
