import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/User.css";

const User = ({ text, profileUrl, name, job }) => {
  return (
    <div className="User">
      <span className="user-icons">
        <FontAwesomeIcon className="user-icon" icon={faQuoteRight} size="lg" />
      </span>
      <p>{text}</p>
      <div className="profile">
        <img src={require(`${profileUrl}`)} alt="Profile" />
        <span>
          <h5>{name}</h5>
          <h6>{job}</h6>
        </span>
      </div>
    </div>
  );
};

export default User;
