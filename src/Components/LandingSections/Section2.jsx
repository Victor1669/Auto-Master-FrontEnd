import styles from "./Section2.module.css";

import StarRating from "../StarRating";

export default function Section2() {
  return (
    <div className={styles.section2}>
      <Services />
      <About />
    </div>
  );
}
function Services() {
  return (
    <section className={styles.Services}>
      <ServicesHeader />
      <Cards />
    </section>
  );
}
function ServicesHeader() {
  return (
    <header>
      <span>
        <h3>Serviços</h3>
        <p>Conheça alguns dos nossos serviços:</p>
      </span>
      <img src="/src/assets/oleo.jpg" alt="" />
    </header>
  );
}
function Cards() {
  const cardsArray = [
    {
      img: "/src/assets/roda.png",
      texto: "Alinhamento de roda alinha seu carro",
    },
    { img: "/src/assets/carroPreto.png", texto: "Revisão do veiculo" },
    { img: "/src/assets/freio.png", texto: "Troca dos freios" },
    {
      img: "/src/assets/tab-agendar.png",
      texto: "Manutenções preventivas e corretivas",
    },
  ];
  return (
    <ul className={styles.CardContainer}>
      {cardsArray.map((card, i) => (
        <li className={styles.Card} key={i}>
          <img
            src={card.img}
            alt={card.texto}
            style={{ filter: `invert(${i == 3 ? 1 : 0})` }}
          />
          <p>{card.texto}</p>
          <button>Saiba mais</button>
        </li>
      ))}
    </ul>
  );
}

function About() {
  return (
    <section className={styles.About}>
      <span className={styles.AboutText}>
        <h3>Sobre nós</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quisquam
          voluptatibus molestiae pariatur, a excepturi similique rem totam. Modi
          commodi voluptatibus omnis suscipit voluptas dicta? Itaque dignissimos
          tempore nemo officia?
        </p>
        <StarRating />
      </span>
      <img src="/src/assets/section2-image.jpg" alt="" />
    </section>
  );
}
