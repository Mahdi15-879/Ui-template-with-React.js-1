import React from "react";

import "./styles/Book.css";

const Book = (props) => {
  return (
    <div className="Book-component">
      <li className="first-li">
        <figure className={`book ${props.hover && "book-h"}`}>
          <ul className="hardcover_front">
            <li>
              <img
                src={require("./img/cover.jpg")}
                alt="cover"
                width="100%"
                height="100%"
              />
            </li>
            <li></li>
          </ul>
          <ul className="page">
            <li></li>
            <li className="author">
              <img
                src={require("./img/author.jpg")}
                alt="author"
                width="100px"
                height="100px"
              />
              <h2>
                A BOOK BY
                <br /> JOHN SMITH
              </h2>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul className="hardcover_back">
            <li></li>
            <li></li>
          </ul>
          <ul className="book_spine">
            <li></li>
            <li></li>
          </ul>
        </figure>
      </li>
    </div>
  );
};

export default Book;
