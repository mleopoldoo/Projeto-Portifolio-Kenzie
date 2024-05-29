import gitIcon from "../../../../assets/git-icon.png";
import style from "../projetosCard/style.module.css";
export const ProjetosCard = ({ project }) => {
  return (
    <div className={style.divCard}>
      <li className={style.liCard}>
        <h3 className="tittle sm">{project.name}</h3>
        <p className="paragraph">{project.description}</p>
        <a className={`${style.aCard} label`}>Saiba mais</a>
      </li>
      <img className={style.imgPosition} src={gitIcon} alt="" />
    </div>
  );
};
