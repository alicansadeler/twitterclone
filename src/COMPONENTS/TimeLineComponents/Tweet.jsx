import axios from "axios";
import { useEffect, useState } from "react";

export const Tweet = () => {
  const [posts, setPosts] = useState([]);

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

  const createTweet = posts.slice(0, 3).map((post, index) => (
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
        </div>
      </div>
    </div>
  ));

  return <>{createTweet}</>;
};
