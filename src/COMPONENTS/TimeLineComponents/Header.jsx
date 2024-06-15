import Customize from "../../assets/sidebarLogo/Customize.png";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <span
          style={{
            marginLeft: "1.5rem",
          }}
        >
          Home
        </span>
        <img src={Customize} alt="Customize" />
      </div>
    </>
  );
};

export default Header;
