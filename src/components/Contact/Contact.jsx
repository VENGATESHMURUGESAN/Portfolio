import { getImageUrl } from "../../utils";
import "./contact.scss";

const baseCls = "contact";

export const Contact = () => {
  const renderContactMediums = () => {
    return (
      <ul className={`${baseCls}__links`}>
        <li className={`${baseCls}__link`}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:vengateshmurugesan@gmail.com">
            vengateshmurugesan@gmail.com
          </a>
        </li>
        <li className={`${baseCls}__link`}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/vengatesh-murugesan-7188621b4/" target="_blank">linkedin.com/ Vengatesh Murugesan</a>
        </li>
        <li className={`${baseCls}__link`}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/VENGATESHMURUGESAN" target="_blank">Github/ Vengatesh Murugesan</a>
        </li>
      </ul>
    );
  };

  const renderStaticContent = () => {
    return (
      <div className={`${baseCls}__text`}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
    );
  };

  return (
    <footer id="contact" className={`${baseCls}__container`}>
      {renderStaticContent()}
      {renderContactMediums()}
    </footer>
  );
};
