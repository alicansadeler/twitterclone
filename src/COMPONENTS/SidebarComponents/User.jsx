import { useContext } from "react";
import { TwitterContextLogin } from "../../contextapi/TwitterContextLogin";

export const User = () => {
  const { user } = useContext(TwitterContextLogin);
  const { email, userName, name, avatar } = user;

  return (
    <>
      <button className="userList-container">
        <img src={avatar} alt="avatar" />
        <div className="userList-item">
          <span>{name}</span>
          <span>@{userName}</span>
        </div>
      </button>
    </>
  );
};
