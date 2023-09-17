/* eslint-disable react/no-unescaped-entities */
import { getImageUrl } from "../../utils";
const baseCls = "about";
import "./about.scss";
function About() {
  return (
    <section className={`${baseCls}__container`} id="about">
      <h2 className={`${baseCls}__title`}>About</h2>
      <div className={`${baseCls}__content`}>
        <img
          src={getImageUrl("about/me.jpg")}
          alt="Me sitting with a laptop"
          className={`${baseCls}__about-image`}
        />
        <ul className={`${baseCls}__about-items`}>
          <li className={`${baseCls}__about-item`}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={`${baseCls}__about-item-text`}>
              <h3>Frontend Developer</h3>
              <p>
              I'm an experienced Frontend Developer skilled in building responsive and optimized websites using React.
              </p>
            </div>
          </li>
          <li className={`${baseCls}__about-item`}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={`${baseCls}__about-item-text`}>
              <h3>Corporate Projects</h3>
              <p>
                I've had the privilege of contributing to several projects for a prominent US-based financial company, 
                leveraging my expertise in frontend development. My role involved crafting tailored solutions that seamlessly blend technology and finance, ensuring a user-friendly and efficient experience.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
