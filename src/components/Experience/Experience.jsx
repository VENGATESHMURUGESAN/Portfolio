import "./experience.scss";
import skills from "../Data/skills.json";
import history from "../Data/history.json";
import { getImageUrl } from "../../utils";
const baseCls = "experience";
const Experience = () => {
  // const renderSkils = (skill, id) => {
  //   return (
  //     <div key={id} className={`${baseCls}__skill`}>
  //       <div className={`${baseCls}__skill-image-container`}>
  //         <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
  //       </div>
  //       <p>{skill.title}</p>
  //     </div>
  //   );
  // };

  // const renderHistory = () => {};
  return (
    <section className={`${baseCls}__container`} id="experience">
      <h2 className={`${baseCls}__title`}>Experience</h2>
      <div className={`${baseCls}__content`}>
        <div className={`${baseCls}__skills`}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={`${baseCls}__skill`}>
                <div className={`${baseCls}__skill-image-container`}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        <ul className={`${baseCls}__history`}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={`${baseCls}__history-item`}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={`${baseCls}__history-item-details`}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
