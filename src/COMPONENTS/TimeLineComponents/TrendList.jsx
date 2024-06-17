import { useContext } from "react";
import { TrendContext } from "../../contextapi/TrendContext";

import Search from "../../assets/trendLogo/Search.png";
import Vector from "../../assets/trendLogo/Vector.png";
import settings from "../../assets/trendLogo/settings.png";
export const TrendList = () => {
  const { dataTrendList, dataFollowList } = useContext(TrendContext);

  const trend = dataTrendList.map((item, index) => {
    return (
      <div key={index} className="trendlist">
        <div className="trendlist-item1">
          <span style={{ color: "gray" }}>
            {"Trending in" + " " + item.country}
          </span>
          <span style={{ fontWeight: "bold" }}> {item.name}</span>
          <span style={{ color: "gray" }}>
            {item.tweet_volume + "K" + " " + "Tweets"}
          </span>
        </div>
        <div className="trendlist-vector">
          <img src={Vector} alt="Vector" />
        </div>
      </div>
    );
  });

  const follow = dataFollowList.map((item, index) => {
    return (
      <div key={index} className="follow-container">
        <div className="follow-item1">
          <div>
            <img
              src={item.avatar}
              alt="avatar"
              style={{ width: "3rem", height: "3rem", borderRadius: "50%" }}
            />
          </div>
          <div className="follow-item2">
            <span style={{ fontWeight: "bold" }}>{item.name}</span>
            <span>{item.username}</span>
          </div>
        </div>
        <div>
          <button>Follow</button>
        </div>
      </div>
    );
  });

  return (
    <div className="trendlist-Container">
      <div className="search-container" /* arama butonu */>
        <label htmlFor="search" className="search-label">
          <img src={Search} alt="Search" />
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search X"
          className="search-input"
        />
      </div>
      <div className="trend-container">
        <div>
          <div className="trend-text">
            <h3>Trends for you</h3>
            <img src={settings} alt="settings" />
          </div>
          <div>
            {trend}
            <button>Show More</button>
          </div>
        </div>
      </div>
      <div className="follow">
        <h3>You might like</h3>
        {follow}
      </div>
    </div>
  );
};
