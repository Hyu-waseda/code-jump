import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

interface Bicycle {
  title: string;
  description: string;
  img_path: string;
}

const Home = () => {
  const bicycles: Bicycle[] = [
    {
      title: "タイトルテキスト",
      description: "テキストテキストテキスト",
      img_path: "/img/bicycle1.jpg",
    },
    {
      title: "タイトルテキスト",
      description: "テキストテキストテキスト",
      img_path: "/img/bicycle2.jpg",
    },
    {
      title: "タイトルテキスト",
      description: "テキストテキストテキスト",
      img_path: "/img/bicycle3.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/">
          <img
            className={styles.header_logo}
            src="/img/logo.svg"
            alt="page logo"
          />
        </Link>
        <nav className={styles.header_nav}>
          <a href="#about">About</a>
          <a href="#bicycle">Bicycle</a>
        </nav>
      </header>

      <img
        className={styles.mainvisual}
        src="/img/mainvisual.jpg"
        alt="main visual"
      />

      <section className={styles.about}>
        <h2 id="about">About</h2>
        <figure className={styles.profile}>
          <img src="/img/about.jpg" alt="kakeru miyauchi's photo" />
          <figcaption className={styles.profile_caption}>
            <p className={styles.profile_caption_title}>KAKERU MIYAUCHI</p>
            <p className={styles.profile_caption_description}>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </figcaption>
        </figure>
      </section>

      <section className={styles.bicycle}>
        <h2 className={styles.bicycle} id="bicycle">
          Bicycle
        </h2>
        <div className={styles.bicycle_list}>
          {bicycles.length > 0 ? (
            bicycles.map((bicycle, index) => (
              <figure
                className={styles.bicycle_list_item}
                key={`${bicycle.title}-${index}`}
              >
                <img src={bicycle.img_path} alt={`photo of ${bicycle.title}`} />
                <figcaption>
                  <p className={styles.bicycle_list_item_title}>
                    {bicycle.title}
                  </p>
                  <p className={styles.bicycle_list_item_description}>
                    {bicycle.description}
                  </p>
                </figcaption>
              </figure>
            ))
          ) : (
            <p>No bicycle item</p>
          )}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2020 Profile</p>
      </footer>
    </div>
  );
};

export default Home;
