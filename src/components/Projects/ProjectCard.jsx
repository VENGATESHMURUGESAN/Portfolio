/* eslint-disable react/prop-types */

import { getImageUrl } from "../../utils";
import "./project-card.scss";
const baseCls = "project-card";
export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const renderSourceCodeLink = () => {
    return (
      <div className={`${baseCls}__links`}>
        <a href={demo} className={`${baseCls}__link`}>
          Demo
        </a>
        <a href={source} className={`${baseCls}__link`} target="_blank">
          Source
        </a>
      </div>
    );
  };

  const renderSkills = () => {
    return skills.map((skill, id) => {
      return (
        <li key={id} className={`${baseCls}__skill`}>
          {skill}
        </li>
      );
    });
  };

  const renderProjectImg = () => {
    return (
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={`${baseCls}__image`}
      />
    );
  };
  const renderTilteandDescription = () => {
    return (
      <>
        <h3 className={`${baseCls}__title`}>{title}</h3>
        <p className={`${baseCls}__description`}>{description}</p>
      </>
    );
  };
  return (
    <div className={`${baseCls}__container`}>
      {renderProjectImg()}
      {renderTilteandDescription()}
      <ul className={`${baseCls}__skills`}>{renderSkills()}</ul>
      {renderSourceCodeLink()}
    </div>
  );
};
