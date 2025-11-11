import styles from "./Section3.module.css";

export default function Section3() {
  const contactsArray = [
    {
      nome: "Vinicius Xavier",
      funcao: "Banco de Dados",
      link: "https://www.linkedin.com/in/vinicius-xavier-965318254/",
    },
    {
      nome: "Victor Pereira",
      funcao: "Front-End",
      link: "https://www.linkedin.com/in/victor-pereira-2947a1254/",
    },
    {
      nome: "Ryan Sérgio",
      funcao: "Documentação / Back-End",
      link: "https://www.linkedin.com/in/ryan-s%C3%A9rgio-453a80386/",
    },
    {
      nome: "Pietro Santos Miranda",
      funcao: "Back-End",
      link: "https://www.linkedin.com/in/pietro-miranda-09472b341/",
    },
    {
      nome: "Victor Fernandes Baltazar",
      funcao: "Front-End",
      link: "https://www.linkedin.com/in/victorfernandes1669/",
    },
  ];
  return (
    <section className={styles.section3}>
      <h3>Contatos:</h3>
      <ul className={styles.ContactList}>
        {contactsArray.map((cont, i) => (
          <a className={styles.ContactItem} href={cont.link} key={i}>
            <h4>{cont.nome}</h4>
            <p>{cont.funcao}</p>
          </a>
        ))}
      </ul>
    </section>
  );
}
