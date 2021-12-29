import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/TargetReaders.css";

const TargetReaders = () => {
  return (
    <div className="TargetReaders">
      <h1>Who This Book Is For</h1>
      <p className="target-p">
        List your target readers in this section and back up with reviews. Lorem
        ipsum dolor sit amet.
      </p>
      <div className="TargetReaders__row">
        <div>
          <span className="Target__row-head">
            <FontAwesomeIcon className="target-icon" icon={faChevronRight} />
            <h4>Entrepreneurs</h4>
          </span>
          <p>
            Learn lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            sodales sit amet neque sit amet molestie.
          </p>
        </div>
        <div>
          <span className="Target__row-head">
            <FontAwesomeIcon className="target-icon" icon={faChevronRight} />
            <h4>Project Managers</h4>
          </span>
          <p>
            Learn lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            sodales sit amet neque sit amet molestie.
          </p>
        </div>
        <div>
          <span className="Target__row-head">
            <FontAwesomeIcon className="target-icon" icon={faChevronRight} />
            <h4>Students</h4>
          </span>
          <p>
            Learn lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            sodales sit amet neque sit amet molestie.
          </p>
        </div>
        <div>
          <span className="Target__row-head">
            <FontAwesomeIcon className="target-icon" icon={faChevronRight} />
            <h4>Investors</h4>
          </span>
          <p>
            Learn lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            sodales sit amet neque sit amet molestie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TargetReaders;
