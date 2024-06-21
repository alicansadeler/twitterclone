import React, { useEffect, useState } from "react";
import "../error.css";
import "bootstrap/dist/css/bootstrap.min.css";
import xLogo from "../assets/xlogo.png";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export const ErrorPage = () => {
  const initialForm = {
    email: "",
    password: "",
    userName: "",
    adres: "",
    name: "",
    terms: false,
  };

  const errorMessage = {
    email: "Lütfen geçerli bir e-mail adresi girin.",
    password: "Lütfen geçerli bir şifre girin.",
    userName: "Lütfen geçerli bir kullanıcı adı girin.",
    adres: "Lütfen adres bilgisi girin.",
    name: "Lütfen isim bilgilerinizi girin.",
    terms: "Lütfen sözleşmeyi kabul edin.",
  };

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    userName: false,
    adres: false,
    name: false,
    terms: false,
  });
  const [isValid, setIsValid] = useState(false);
  const history = useHistory();

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
      /[^A-Za-z]/.test(password) && // Sadece özel karakterler
      password.length > 4
    );
  }

  const validateUser = (userName) => {
    return userName[0] === "@";
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
      if (formData.terms) {
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
      .post(
        "https://6658a29a5c36170526494b43.mockapi.io/users/pokemons",
        formData
      )
      .then(function (response) {
        history.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    const { email, password, terms, userName } = formData;
    if (
      validateEmail(email) &&
      validatePassword(password) &&
      terms &&
      validateUser(userName)
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  return (
    <>
      <div className="signup-item1">
        <img src={xLogo} alt="sadas" />
      </div>
      <div className="signup-form">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label
                  for="exampleEmail"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  Email
                </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <h4
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      textAlign: "left",
                    }}
                  >
                    {errorMessage.email}
                  </h4>
                )}
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label
                  for="examplePassword"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  Password
                </Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <h4
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      textAlign: "left",
                    }}
                  >
                    {errorMessage.password}
                  </h4>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label
                  for="examplename"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  Name/Surname
                </Label>
                <Input
                  id="examplename"
                  name="name"
                  placeholder="user information"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <h4
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      textAlign: "left",
                    }}
                  >
                    {errorMessage.name}
                  </h4>
                )}
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label
                  for="exampleAddress2"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  Username
                </Label>
                <Input
                  id="exampleAddress2"
                  name="userName"
                  placeholder="@example"
                  value={formData.userName}
                  onChange={handleChange}
                />
                {errors.userName && (
                  <h4
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      textAlign: "left",
                    }}
                  >
                    {errorMessage.userName}
                  </h4>
                )}
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label
              for="exampleAddress"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Address
            </Label>
            <Input
              id="exampleAddress"
              name="adres"
              placeholder="1234 Main St"
              value={formData.adres}
              onChange={handleChange}
            />
            {errors.adres && (
              <h4
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  textAlign: "left",
                }}
              >
                {errorMessage.adres}
              </h4>
            )}
          </FormGroup>

          <FormGroup check style={{ display: "flex", alignItems: "center" }}>
            <Input
              id="exampleCheck"
              name="terms"
              type="checkbox"
              checked={formData.terms}
              onChange={handleChange}
            />
            <Label
              check
              for="exampleCheck"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Check me out
            </Label>
            {!errors.terms && (
              <h4
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  textAlign: "left",
                }}
              >
                {errorMessage.terms}
              </h4>
            )}
          </FormGroup>
          <Button
            style={{ fontWeight: "bold", color: "white" }}
            disabled={!isValid}
          >
            Sign in
          </Button>
        </Form>
      </div>
    </>
  );
};
