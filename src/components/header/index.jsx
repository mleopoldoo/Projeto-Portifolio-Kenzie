import ImgPortfolio from "../../assets/portfolio.png";
import styles from "./style.module.css";

export const Header = () => {
  return (
    <header>
      <section className={styles.headerBox}>
        <div>
          <img src={ImgPortfolio} alt="Logo" />
        </div>
        <div className={styles.divBox}>
          <a className="label">Sobre</a>
          <a className="label">Stack</a>
          <a className="label">Projetos</a>
        </div>
        <div>
          <a className="link">Contato</a>
        </div>
      </section>
    </header>
  );
};
