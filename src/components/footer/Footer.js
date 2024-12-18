import "./style.css";

import inst from "./../../img/icons/instagram.svg";
import git from "./../../img/icons/gitHub.svg";
import linkID from "./../../img/icons/linkedIn.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://www.instagram.com/yar1k__roadster/">
                <img src={inst} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/dashboard">
                <img src={git} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/in/yaroslav-chekhanyuk-0728112a6/">
                <img src={linkID} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
