import React from "react";

import Button from "./Button";
import Book from "./Book";

import "./styles/Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__row">
        <div className="Header__col-left">
          <h1>The Making of A Manager</h1>
          <p>
            An everything you need to know field guide to rocking your job,
            earning your confidence, and leading your team to new horizons and
            opportunities.
          </p>
          <span>
            <Button cName={"btn-secondary"} text={"BUY FOR $49"} href={"#"} />
            <Button
              cName={"btn-tertiary"}
              text={"LEARN MORE"}
              href={"#ability"}
            />
          </span>
        </div>

        <div className="Header__col-right">
          <Book hover={true} />
        </div>
      </div>
      <img
        className="Head-cover"
        src={require("./img/hero-shape-bottom.png")}
        alt="Head-cover"
      />
    </div>
  );
};

export default Header;
