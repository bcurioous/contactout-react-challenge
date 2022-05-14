import * as React from "react";

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [avatarPopoverVisible, setAvatarPopoverVisible] = React.useState(false);

  const onAvatarPopoverToggle = React.useCallback(() => {
    console.log("clicked :>> ");
    setAvatarPopoverVisible((avatarPopoverVisible) => !avatarPopoverVisible);
  }, []);

  const arr = Array.from({ length: 100 }, (_, index) => index + 1);

  const userProfile = {
    name: "Steve Wozniak",
    avatar: "/images/Steve_Wozniak.jpeg",
  };

  console.log("avatarPopoverVisible :>> ", avatarPopoverVisible);

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
          <div className={styles.avatarWrapper}>
            <div
              className={styles.avatar}
              role="button"
              onClick={onAvatarPopoverToggle}
            >
              <Image
                layout="raw"
                width={64}
                height={64}
                className={styles.avatarImage}
                alt={userProfile.name}
                src={userProfile.avatar}
              />
            </div>
            <div
              className={`${
                avatarPopoverVisible ? styles.avatarPopoverShow + " " : ""
              }${styles.avatarPopover}`}
            >
              <div className={styles.leftBottom}></div>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.avatar}>
                    <Image
                      layout="raw"
                      width={64}
                      height={64}
                      className={styles.avatarImage}
                      alt={userProfile.name}
                      src={userProfile.avatar}
                    />
                  </div>
                  <strong>{userProfile.name}</strong>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.avatarPopoverMenus}>
                    <ul>
                      <li>Account</li>
                      <li>Your Exports</li>
                      <li>Integrations</li>
                      <li>Logout</li>
                    </ul>
                    <ul>
                      <li>L2 : l2.1</li>
                      <li>L2 : l2.2</li>
                      <li>L2 : l2.3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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
