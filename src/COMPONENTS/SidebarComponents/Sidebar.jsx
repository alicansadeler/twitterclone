import { User } from "./User";

import XLOGO from "../../assets/sidebarLogo/icons8-twitterx-30.png";
import HomeLogo from "../../assets/sidebarLogo/home.png";
import ExploreLogo from "../../assets/sidebarLogo/explore.png";
import NotificationsLogo from "../../assets/sidebarLogo/Notifications.png";
import MessagesLogo from "../../assets/sidebarLogo/Messages.png";
import BookmarksLogo from "../../assets/sidebarLogo/Bookmarks.png";
import ListsLogo from "../../assets/sidebarLogo/Lists.png";
import ProfileLogo from "../../assets/sidebarLogo/Profile.png";
import More from "../../assets/sidebarLogo/More.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-item">
          <img src={XLOGO} alt="XLOGO" />
        </div>
        <Link className="sidebar-item" to="home">
          <img src={HomeLogo} alt="Bookmarks" />
          <span>Bookmarks</span>
        </Link>
        <Link className="sidebar-item" to="home">
          <img src={ExploreLogo} alt="ExploreLogo" />
          <span>Explore</span>
        </Link>
        <Link className="sidebar-item" to="home">
          <img src={NotificationsLogo} alt="NotificationsLogo" />
          <span>Notifications</span>
        </Link>
        <Link className="sidebar-item" to="home">
          <img src={MessagesLogo} alt="MessagesLogo" />
          <span>Messages</span>
        </Link>
        <Link className="sidebar-item" to="home">
          <img src={BookmarksLogo} alt="BookmarksLogo" />
          <span>Bookmarks</span>
        </Link>
        <Link className="sidebar-item" to="home">
          <img src={ListsLogo} alt="ListsLogo" />
          <span>Lists</span>
        </Link>
        <Link className="sidebar-item" to="home">
          <img src={ProfileLogo} alt="ProfileLogo" />
          <span>Profile</span>
        </Link>
        <Link className="sidebar-item" to="home">
          <img src={More} alt="More" />
          <span>More</span>
        </Link>

        <button className="sidebar-button">Twiit</button>
        <User />
      </div>
    </>
  );
};
