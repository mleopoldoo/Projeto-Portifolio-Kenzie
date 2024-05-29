import { Header } from "../../components/header/index.jsx";
import { Banner } from "../../components//banner/index.jsx";
import { Sobre } from "../../components/sobre/index.jsx";
// import { Tecnologias } from "../../components/tecnologiasSection/index.jsx";
import { Tecnologias } from "../../components/tecnologiasSection/index.jsx";
import { Projetos } from "../../components/projetos/index.jsx";
import { Contatos } from "../../components/contatos/index.jsx";
import "../../styles/index.css";

export const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Sobre />
      <Tecnologias />
      <Projetos />
      <Contatos />
    </>
  );
};
