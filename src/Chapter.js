import React from "react";

import Book from "./Book";
import Button from "./Button";

import "./styles/Chapter.css";

const Chapter = () => {
  return (
    <div className="Chapter">
      <h1>The Book Chapters</h1>
      <div className="Chapter__row">
        <div className="Chpater__col-left">
          <Book hover={false} />
        </div>

        <div className="Chapter__col-right">
          <ol>
            <li>People Management Skills</li>
            <li>Business Finance</li>
            <li>Influencing Skills</li>
            <li>Communication Skills</li>
            <li>Negotiation Skills</li>
            <li>Project Management Skills</li>
            <li>Strategy and Planning</li>
          </ol>

          <Button cName={"btn-primary"} text={"I WANT THIS BOOK"} href={"#"} />
        </div>
      </div>
    </div>
  );
};

export default Chapter;
