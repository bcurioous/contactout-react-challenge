import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const arr = Array.from({ length: 100 }, (_, index) => index + 1);

  return (
    <div className={styles.container}>
      <Head>
        <title>Contactout</title>
        <meta
          name="description"
          content="Contactout : World's best contact search engine"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <aside className={styles.sidebar}>
        <div className={styles.sidebarTop}>
          <div>Logo</div>
          <div>Lists</div>
          <div>Search</div>
        </div>
        <div className={styles.sidebarBottom}>
          <div className={styles.sideBarAvatar}>Avatar</div>
          <div className={styles.sideBarAvatarPopover}>
            <div className={styles.leftBottom}></div>
            <div>Popover Popover Popover Popover</div>
          </div>
        </div>
      </aside>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>

        {arr.map((i) => (
          <div key={i}>something</div>
        ))}
      </main>
    </div>
  );
};

export default Home;
