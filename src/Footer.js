import React from "react";

import "./styles/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__row">
        <img src={require("./img/author.jpg")} />
        <h1>About The Author</h1>
        <p>
          John Smith is a former journalist who has interviewed murderers on
          death row, flown over L.A. with the LAPD and patrolled with the Royal
          Canadian Mounted Police near the Arctic. He's also reported from the
          Caribbean, Africa and Kuwait's border with Iraq. His books have been
          published in nearly 30 countries, including an illegal translation
          produced in Iran.
          <br /> His work has been praised by James Patterson, Dean Koontz,
          Michael Connelly, Lee Child, Tess Gerritsen, Jeffery Deaver, Sandra
          Brown, James Rollins, Brad Thor, Nick Stone, David Morrell, Allison
          Brennan, Heather Graham, Linwood Barclay, Peter Robinson, Håkan Nesser
          and Kay Hooper.
        </p>
        <h3>Follow Me</h3>
        <div>
          <a href="#" title="twitter">
            Tw
          </a>
          <a href="#" title="facebook">
            FB
          </a>
          <a href="#" title="behance">
            Be
          </a>
          <a href="#" title="dribbble">
            Dr
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
