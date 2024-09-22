import { Link } from "react-router-dom";

interface Bicycle {
  title: string;
  description: string;
  img_path: string;
}

const Home = () => {
  const bicycles: Bicycle[] = [
    {
      title: "タイトルテキスト",
      description: "テキストテキスト",
      img_path: "/img/bicycle1.jpg",
    },
    {
      title: "タイトルテキスト",
      description: "テキストテキスト",
      img_path: "/img/bicycle1.jpg",
    },
    {
      title: "タイトルテキスト",
      description: "テキストテキスト",
      img_path: "/img/bicycle1.jpg",
    },
  ];

  return (
    <div>
      <header>
        <Link to="/">
          <img src="/img/logo.svg" alt="page logo" />
        </Link>

        <a href="#about">About</a>
        <a href="#bicycle">Bicycle</a>
      </header>
      <img src="/img/mainvisual.jpg" alt="main visual" />
      <section>
        <h2 id="about">About</h2>
        <figure>
          <img src="/img/about.jpg" alt="kakeru miyauchi's photo" />
          <figcaption>
            <p>KAKERU MIYAUCHI</p>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </figcaption>
        </figure>
      </section>
      <section>
        <h2 id="bicycle">Bicycle</h2>
        {bicycles.map((bicycle, index) => (
          <figure key={`${bicycle.title}-${index}`}>
            <img src={bicycle.img_path} alt={`photo of ${bicycle.title}`} />
            <figcaption>
              <p>{bicycle.title}</p>
              <p>{bicycle.description}</p>
            </figcaption>
          </figure>
        ))}
      </section>
      <footer>
        <p>© 2020 Profile</p>
      </footer>
    </div>
  );
};

export default Home;
