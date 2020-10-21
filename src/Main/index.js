import React, { useState } from "react";
import "./main.css";

import Github from "../assets/github.png";
import Linkedin from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";

export default function Main() {
  const [count, setCount] = useState(0);

  return (
    <div className="container-all">     
      <main className="main-container">      
        <h1 className="count">{count}</h1>

        <div className="button-container">
          <button className="btn" onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
          <button className="btn" onClick={() => setCount(0)}>reset</button>
          <button className="btn" onClick={() => setCount(count + 1)}>+</button>
        </div>
      </main>
      
      <footer className="footer-container">
        <p className="footer-line">Made by Maria Luísa Costa</p>
        <ul className="footer-link-container">
          <li className="footer-link">
            <a href="https://github.com/maluhcosta">
                <img className="footer-icon" src={Github} alt="Logo do Github"/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/maluhcosta/">
                <img className="footer-icon" src={Linkedin} alt="Logo do Linkedin"/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/maluhcosta/">
                <img className="footer-icon" src={Instagram} alt="Logo do Instagram"/>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}