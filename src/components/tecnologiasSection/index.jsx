import { TecnologiasList } from "./tecnologiasList/index.jsx";
import style from "../../components/tecnologiasSection/style.module.css";
export const Tecnologias = () => {
  return (
    <section>
      <h2 className={`${style.h2Tec} tittle md`}>Tecnologias</h2>
      <TecnologiasList />
    </section>
  );
};
