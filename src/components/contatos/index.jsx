import logoWhats from "../../assets/whatsapp-icon.png";
import logoLinke from "../../assets/linkedin-icon.png";
import logoGit from "../../assets/github-icon.png";
import style from "../../components/contatos/style.module.css";
export const Contatos = () => {
  return (
    <footer>
      <section className={style.sectionContato}>
        <div>
          <h2 className="tittle md">Contato</h2>
          <span className={style.spanContato}>
            <img className="label" src={logoWhats} alt="icone whatsapp" />
            <img className="label" src={logoLinke} alt="icone linkedin" />
            <img className="label" src={logoGit} alt="icone github" />
          </span>
        </div>
        <p className="paragraph">Todos os direito reservados - José da Silva</p>
      </section>
    </footer>
  );
};
