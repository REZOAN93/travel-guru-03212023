import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../Shared/Header/Header";
import "./Main.css";
import { Outlet } from "react-router-dom";
import Coxbazar from "../../Hotels/Coxbazar/Coxbazar";

const Main = () => {
  return (
    <div className="bodypage">
      <Header></Header>
      <Coxbazar>
        <Outlet></Outlet>
      </Coxbazar>
    </div>
  );
};

export default Main;
