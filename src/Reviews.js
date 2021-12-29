import React from "react";

import Button from "./Button";
import User from "./User";

import "./styles/Reviews.css";

const Reviews = () => {
  return (
    <div className="Reviews">
      <h1 className="Reviews-header">Book Reviews</h1>
      <p className="Reviews-p">See what our readers are saying.</p>
      <div className="Reviews__users">
        <User
          text={
            '"Excellent Book! Add your book review here consectetur adipiscing elit. Aliquam euismod nunc porta urna facilisis tempor. "'
          }
          profileUrl={"./img/review-1.jpg"}
          name={"Emily Hale"}
          job={"Co-Founder, Adobe"}
        />
        <User
          text={
            '"Great Book! Add your book review here consectetur adipiscing elit. Aliquam euismod nunc porta urna facilisis tempor. Praesent mauris neque."'
          }
          profileUrl={"./img/review-2.jpg"}
          name={"Rafael Smith"}
          job={"Developer, Twitter"}
        />
        <User
          text={
            '"Excellent Book! Add your book review here consectetur adipiscing elit. Pellentesque ac leo turpis. Phasellus imperdiet id ligula tempor imperdiet."'
          }
          profileUrl={"./img/review-3.jpg"}
          name={"Eva Williams"}
          job={"Designer, Envato"}
        />
        <User
          text={
            '"Another book review here consectetur adipiscing elit. Pellentesque ac leo turpis. Phasellus imperdiet id ligula tempor imperdiet."'
          }
          profileUrl={"./img/review-4.jpg"}
          name={"Mario Suarez"}
          job={"Consultant, Google"}
        />
        <User
          text={
            '"Another book review here consectetur adipiscing elit. Pellentesque ac leo turpis. Phasellus imperdiet id ligula tempor imperdiet."'
          }
          profileUrl={"./img/review-5.jpg"}
          name={"Lisa Karera"}
          job={"CEO, Themeforest"}
        />
      </div>
      <Button cName={"btn-primary"} text={"GET YOUR COPY TODAY"} href={"#"} />
    </div>
  );
};

export default Reviews;
