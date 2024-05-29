import { projects } from "../../../data/projects";
import { ProjetosCard } from "./projetosCard";
import style from "../../projetos/projetosList/style.module.css";

export const ProjetoList = () => {
  return (
    <ul className={style.ulList}>
      {projects.map((projetosMap) => (
        <ProjetosCard key={projects.name} project={projetosMap} />
      ))}
    </ul>
  );
};
