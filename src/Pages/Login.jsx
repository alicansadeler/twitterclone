import React, { useContext, useEffect } from "react";
import LoginImage from "../assets/Xlogin.jpeg";
import { TwitterContextLogin } from "../contextapi/TwitterContextLogin";

export const Login = () => {
  const {
    errorMessage,
    formData,
    errors,
    isValid,
    setIsValid,
    validateEmail,
    validatePassword,
    handleChange,
    handleSubmit,
  } = useContext(TwitterContextLogin);

  useEffect(() => {
    const { email, password, terms } = formData;
    if (validateEmail(email) && validatePassword(password) && terms) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  return (
    <div className="form-container">
      <div className="image-container">
        <img src={LoginImage} alt="Login" className="aligned-image" />
      </div>
      <div className="form-content">
        <div className="login-metin">
          <h1>Happening Now</h1>
          <h2>Join X Today</h2>
        </div>
        <form onSubmit={handleSubmit}>
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
            Parola
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
            Sözleşme Bilgilerini Okudum
            {errors.terms && <h4>{errorMessage.terms}</h4>}
          </label>
          <div>
            <button className="login-button" disabled={!isValid}>
              Giriş
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
