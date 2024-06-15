import axios from "axios";
import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";

export const TwitterContextLogin = createContext();

export const TwitterContextLoginProvider = ({ children }) => {
  const initialForm = {
    email: "",
    password: "",
    userName: "",
    terms: false,
  };

  const errorMessage = {
    email: "Lütfen geçerli bir e-mail adresi girin.",
    password: "Lütfen geçerli bir şifre girin.",
    userName: "Lütfen geçerli bir kullanıcı adı girin.",
    terms: "Lütfen sözleşmeyi kabul edin.",
  };

  const history = useHistory();
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    userName: false,
    terms: false,
  });
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function validatePassword(password) {
    return (
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[^A-Za-z0-9]/.test(password) &&
      password.length > 4
    );
  }

  const validateUser = (userName) => {
    return userName[0] === "@" && userName.length >= 4;
  };

  const handleChange = (event) => {
    let { value, name, type, checked } = event.target;
    value = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: value });

    /// validasyon kontrolü
    if (name === "email") {
      if (validateEmail(value)) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }

    if (name === "userName") {
      if (validateUser(value)) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }

    if (name === "password") {
      if (validatePassword(value)) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }

    if (name === "terms") {
      if (terms) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    axios
      .post("https://reqres.in/api/users", formData)
      .then(function (response) {
        console.log(response.data);
        setFormData(initialForm);
        history.push("/home");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <TwitterContextLogin.Provider
      value={{
        initialForm,
        errorMessage,
        formData,
        setFormData,
        errors,
        setErrors,
        isValid,
        setIsValid,
        validateEmail,
        validatePassword,
        validateUser,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </TwitterContextLogin.Provider>
  );
};
