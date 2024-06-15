import XLOGO from "../../assets/sidebarLogo/icons8-twitterx-30.png";
import HomeLogo from "../../assets/sidebarLogo/home.png";
import ExploreLogo from "../../assets/sidebarLogo/explore.png";
import NotificationsLogo from "../../assets/sidebarLogo/Notifications.png";
import MessagesLogo from "../../assets/sidebarLogo/Messages.png";
import BookmarksLogo from "../../assets/sidebarLogo/Bookmarks.png";
import ListsLogo from "../../assets/sidebarLogo/Lists.png";
import ProfileLogo from "../../assets/sidebarLogo/Profile.png";
import More from "../../assets/sidebarLogo/More.png";
import TweetButton from "../../assets/sidebarLogo/Tweet-Buton-Xl.png";

export const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-item">
          <img src={XLOGO} alt="XLOGO" />
        </div>
        <div className="sidebar-item">
          <img src={HomeLogo} alt="Bookmarks" />
          <span>Bookmarks</span>
        </div>
        <div className="sidebar-item">
          <img src={ExploreLogo} alt="ExploreLogo" />
          <span>Explore</span>
        </div>
        <div className="sidebar-item">
          <img src={NotificationsLogo} alt="NotificationsLogo" />
          <span>Notifications</span>
        </div>
        <div className="sidebar-item">
          <img src={MessagesLogo} alt="MessagesLogo" />
          <span>Messages</span>
        </div>
        <div className="sidebar-item">
          <img src={BookmarksLogo} alt="BookmarksLogo" />
          <span>Bookmarks</span>
        </div>
        <div className="sidebar-item">
          <img src={ListsLogo} alt="ListsLogo" />
          <span>Lists</span>
        </div>
        <div className="sidebar-item">
          <img src={ProfileLogo} alt="ProfileLogo" />
          <span>Profile</span>
        </div>
        <div className="sidebar-item">
          <img src={More} alt="More" />
          <span>More</span>
        </div>

        <button className="sidebar-button">Twiit</button>
      </div>
    </>
  );
};
