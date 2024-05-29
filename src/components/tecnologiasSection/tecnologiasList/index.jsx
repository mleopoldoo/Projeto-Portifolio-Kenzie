import style from "../tecnologiasList/style.module.css";
import { technologies } from "../../../data/technologies";
import { TecnologiasCard } from "./tecnologiasCard";

export const TecnologiasList = () => {
  return (
    <ul className={style.ulList}>
      {technologies.map((tecnologia) => (
        <TecnologiasCard key={technologies.name} tecnologia={tecnologia} />
      ))}
    </ul>
  );
};
