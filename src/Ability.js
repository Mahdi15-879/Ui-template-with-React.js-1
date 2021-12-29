import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faBullhorn,
  faKey,
  faHandshake,
  faChartLine,
  faLifeRing,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/Ability.css";

const Ability = () => {
  return (
    <div className="Ability" id="ability">
      <div className="Ability__header">
        <h1>What Will You Get From This Book?</h1>
        <p>
          Offering successes from leading companies, This book gives you a set
          of rules for capitalizing on the phenomenon of disruptive innovation.
        </p>
      </div>

      <div className="Ability__body">
        <div>
          <FontAwesomeIcon className="icon" icon={faLightbulb} size="3x" />
          <h3>Business Tips</h3>
          <p>
            List one of your book's benefits here. Lorem ipsum dolor sit amet
          </p>
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faBullhorn} size="3x" />
          <h3>Leadership Skills</h3>
          <p>
            List one of your book's benefits here. Lorem ipsum dolor sit amet
          </p>
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faKey} size="3x" />
          <h3>Communication Keys</h3>
          <p>
            List one of your book's benefits here. Lorem ipsum dolor sit amet
          </p>
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faHandshake} size="3x" />
          <h3>Learn Negotiation</h3>
          <p>
            List one of your book's benefits here. Lorem ipsum dolor sit amet
          </p>
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faChartLine} size="3x" />
          <h3>Strategy and Planning</h3>
          <p>
            List one of your book's benefits here. Lorem ipsum dolor sit amet
          </p>
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faLifeRing} size="3x" />
          <h3>Work in a Team</h3>
          <p>
            List one of your book's benefits here. Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ability;
