/* eslint-disable react/no-unescaped-entities */
import { getImageUrl } from "../../utils";
import "./hero.scss";

const baseCls = "hero";
const Hero = () => {
  const renderBlur = () => {
    return (
      <>
        <div className={`${baseCls}__top-blur`}></div>
        <div className={`${baseCls}__bottom-blur`}></div>
      </>
    );
  };

  const renderImage = () => {
    return (
      <img
        className={`${baseCls}__hero-img`}
        src={getImageUrl("hero/circle.png")}
        alt="Hero image of me"
      />
    );
  };

  const renderProfileDetails = () => {
    return (
      <div className={`${baseCls}__content`}>
        <h1 className={`${baseCls}__title`}>Hola, I'm Vengatesh</h1>
        <p className={`${baseCls}__description`}>
        With 2 years of React expertise, I'm your go-to Frontend Developer. Let's chat if you're interested in exploring my skills further! ✨🚀
        </p>
        <a
          className={`${baseCls}__contact-btn`}
          href="mailto:vengateshmurugesan@gmail.com"
        >
          Contact Me
        </a>
      </div>
    );
  };
  return (
    <section className={`${baseCls}__contaniner`}>
      {renderProfileDetails()}
      {renderImage()}
      {renderBlur()}
    </section>
  );
};

export default Hero;
