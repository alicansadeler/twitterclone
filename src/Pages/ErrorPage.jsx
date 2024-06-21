import React from "react";
import "../error.css";
import "bootstrap/dist/css/bootstrap.min.css";
import xLogo from "../assets/xlogo.png";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
export const ErrorPage = () => {
  return (
    <>
      <div className="signup-item1">
        <img src={xLogo} alt="sadas" />
      </div>
      <div className="signup-form">
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label
                  for="exampleEmail"
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  Email
                </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label
                  for="examplePassword"
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  Password
                </Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label
              for="exampleAddress"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Address
            </Label>
            <Input
              id="exampleAddress"
              name="address"
              placeholder="1234 Main St"
            />
          </FormGroup>
          <FormGroup>
            <Label
              for="exampleAddress2"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Username
            </Label>
            <Input
              id="exampleAddress2"
              name="username"
              placeholder="@example"
            />
          </FormGroup>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label
                  for="exampleCity"
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  City
                </Label>
                <Input id="exampleCity" name="city" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label
                  for="exampleState"
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  State
                </Label>
                <Input id="exampleState" name="state" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup check style={{ display: "flex", alignItems: "center" }}>
            <Input id="exampleCheck" name="check" type="checkbox" />
            <Label
              check
              for="exampleCheck"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Check me out
            </Label>
          </FormGroup>
          <Button style={{ fontWeight: "bold" }}>Sign in</Button>
        </Form>
      </div>
    </>
  );
};
