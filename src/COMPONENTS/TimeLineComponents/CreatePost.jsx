import { useContext } from "react";
import { TwitterContextLogin } from "../../contextapi/TwitterContextLogin";

import Gif from "../../assets/LOGOpost/gif.png";
import image from "../../assets/LOGOpost/image.png";
import stats from "../../assets/LOGOpost/stats.png";
import smile from "../../assets/LOGOpost/smile.png";
import schedule from "../../assets/LOGOpost/schedule.png";
import axios from "axios";

export const CreatePost = () => {
  const { createPost, setCreatePost, user, setPostCreated } =
    useContext(TwitterContextLogin);
  const { avatar } = user;

  const handleChange = (event) => {
    event.preventDefault();
    let { value } = event.target;
    setCreatePost({ ...createPost, post: value });
  };
  let initialCreate = {
    post: createPost.post,
    avatar: user.avatar,
    name: user.name,
    userName: user.userName,
  };
  const handleClickPost = () => {
    axios
      .post(
        "https://6658a29a5c36170526494b43.mockapi.io/users/create",
        initialCreate
      )
      .then(function (response) {
        console.log(response.data);
        setPostCreated(true);
        setCreatePost({ ...createPost, post: "" });
      })
      .catch(function (error) {
        console.log(error);
      });
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
        <button onClick={handleClickPost}>Tweet</button>
      </div>
    </div>
  );
};
