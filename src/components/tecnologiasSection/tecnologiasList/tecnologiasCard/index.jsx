import style from "../tecnologiasCard/style.module.css";
export const TecnologiasCard = ({ tecnologia }) => {
  return (
    <div>
      <li className={style.liCard}>
        <img src={tecnologia.img} alt={tecnologia.name} />
        <h3>{tecnologia.name}</h3>
      </li>
    </div>
  );
};
