import React from "react";
import "./top-division-c.css";
import MytypedComponent from "../typing-effect/typing.js";

import { TOP_SECTION } from "../../Module/General";
import { Link } from "react-router-dom";
import Counter from "components/counter/Counter";
function Btn(props) {
  return (
    <div
      className="apply-button"
      data-hackathon-slug="HTM 5.0"
      data-button-theme="light"
      style={{ height: "44px", width: "312px" }}
    ></div>
  );
}

function About() {
  return (
    <div className="AboutMe">
      <h2>{TOP_SECTION.TITLE}</h2>
      <MytypedComponent />
    </div>
  );
}
const applyButtonStyle = {
  display: 'inline-block',
  padding: '20px 20px',
  backgroundColor: 'rebeccapurple',
  color: 'white',
  borderRadius: '5px',
  textDecoration: 'none',
  transition: 'background-color 0.3s ease-in-out',
  fontSize: '1.5em', // Increase font size
  color: '#000', // Initial color
  transition: 'color 0.3s ease-in-out', // Transition effect

  
};

// Add hover effect
applyButtonStyle[':hover'] = {
  color: 'rebeccapurple', // Color on hover
};


function Myinfo() {
  return (
    <div className="Myinfo">
      <About />
      <br />
      <p className="shortjoin"> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      <br /><br />
      {/*      <a
        href="#devfolio"  
        // rel="noreferrer"
        class="linkclass"
        target="_blank"
      >
*/}{/*        <button class="dev-button">
          <svg
            class="dev-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 115.46 123.46"
            style={{height: "24px", width: "24px", "margin-right": "8px"}}
          >
            <path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z"></path>
            <path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z"></path>
          </svg>
          Apply With Devfolio
        </button>
</a>
      */}

      <div
        class="apply-button"
        data-hackathon-slug="HTM 5.0"
        data-button-theme="light"
      // style="height: 44px; width: 312px"
      >   </div>
      &nbsp;&nbsp;
      {/* <ul>
                        <li className="liw list--general">
                          <Link to="/apply" style={applyButtonStyle}>
                            <span className="links">Apply</span>
                          </Link>
                        </li>
                        </ul>
     
      <br /><br /><br />
      <a href="/" target="_blank"><button>Learn More</button></a> */}
      <div className="align-items">
      <Counter />
  <ul>
    <li className="liw list--general">
      <Link to="/apply" style={applyButtonStyle}>
        <span className="links">Apply</span>
      </Link>
     
    </li>
  </ul>

  <a href="/" target="_blank" className="learn-more"><button>Learn More</button></a>
  
</div>

    </div>


  );
}

export { Btn, Myinfo };
// 