import { username, user } from "../../data/user";
import style from "./style.module.css";
import bannerImg from "../../assets/banner-img.png";
export const Banner = () => {
  return (
    <section className={style.sectionBanner}>
      <div>
        <p className={`${style.colorUserName} label`}>{username}</p>
        <h1 className="tittle lg">Bem vindo ao meu portfólio</h1>
        <p className={`${style.pBanner} paragraph`}>
          Uma frase interessante sobre mim
        </p>
        <a className="link">Saiba mais</a>
      </div>
      <img className={style.imgBanner} src={bannerImg} alt="banner" />
    </section>
  );
};
