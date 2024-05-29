import style from "../sobre/style.module.css";
export const Sobre = () => {
  return (
    <section>
      <div className={style.divSobre}>
        <h2 className="tittle md">Sobre mim</h2>
        <p className={`${style.pSobre} paragraph`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex
          magna, imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam
          a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis pharetra,
          vehicula enim in, suscipit nisi. Mauris eget sapien a velit facilisis
          ullamcorper feugiat nec orci. Duis ac iaculis turpis, at feugiat orci.
        </p>
      </div>
    </section>
  );
};
