import React, { useContext, useEffect } from "react";
import LoginImage from "../assets/Xlogin.jpeg";
import { TwitterContextLogin } from "../contextapi/TwitterContextLogin";
import { TrendContext } from "../contextapi/TrendContext";

export const Login = () => {
  const {
    errorMessage,
    formData,
    errors,
    setIsValid,
    validateEmail,
    validatePassword,
    handleChange,
    handleSubmit,
  } = useContext(TwitterContextLogin);
  const { setloggedIn } = useContext(TrendContext);
  useEffect(() => {
    const { email, password, terms } = formData;
    if (validateEmail(email) && validatePassword(password) && terms) {
      setIsValid(true);
      setloggedIn(true);
    } else {
      setIsValid(false);
      setloggedIn(false);
    }
  }, [formData]);

  return (
    <div className="form-container">
      <div className="image-container">
        <img src={LoginImage} alt="Login" className="aligned-image" />
      </div>
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <div className="login-metin">
            <h2>Login</h2>
          </div>
          <label>
            Email
            <input
              type="text"
              placeholder="Lütfen email adresinizi girin"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
            {errors.email && <h4>{errorMessage.email}</h4>}
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="Lütfen şifrenizi giriniz.."
              id="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
            />
            {errors.password && <h4>{errorMessage.password}</h4>}
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              onChange={handleChange}
              checked={formData.terms}
            />
            I have read the contract information
            {!errors.terms && <h4>{errorMessage.terms}</h4>}
          </label>
          <div>
            <button className="login-button">Giriş</button>
          </div>
        </form>
      </div>
    </div>
  );
};
