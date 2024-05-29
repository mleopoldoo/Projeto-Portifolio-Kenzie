import { ProjetoList } from "./projetosList";
import style from "../../components/projetos/style.module.css";
export const Projetos = () => {
  return (
    <section>
      <h2 className={`${style.h2Projetos} tittle md`}>Projetos</h2>
      <ProjetoList />
    </section>
  );
};
