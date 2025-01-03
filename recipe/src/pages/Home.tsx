import type React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.mainvisual}
        src="img/mainvisual.jpg"
        alt="mainvisual"
      />
      <h1 className={styles.title}>Recipe Diary</h1>
      <p className={styles.description}>
        日々の料理レシピをまとめています。
        <br />
        和食や洋食、中華、お菓子までいろいろな料理レシピをアップしていますので、
        <br />
        みなさんの献立にお役立てくださいね！
      </p>
      <div className={styles.recipes}>
        <img src="img/recipe1.jpg" alt="recipe1" />
        <img src="img/recipe2.jpg" alt="recipe2" />
        <img src="img/recipe3.jpg" alt="recipe3" />
      </div>
      <Link className={styles.recipe_list_button} to="/">
        レシピ一覧を見る
      </Link>

      <footer className={styles.footer}>
        <nav>
          <Link className={styles.footer_link} to="https://www.instagram.com/">
            Instagram
          </Link>
          <Link className={styles.footer_link} to="https://twitter.com/">
            Twitter
          </Link>
          <Link className={styles.footer_link} to="https://www.facebook.com/">
            Facebook
          </Link>
        </nav>
        <p className={styles.copyright}>© 2021 Recipe Diary</p>
      </footer>
    </div>
  );
};

export default Home;
