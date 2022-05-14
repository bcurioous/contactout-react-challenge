import * as React from "react";

import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Home.module.css";
interface ISubMenu {
  type: "submenus";
  menus: Array<Menu>;
}
interface IDialog {
  type: "dialog";
  dialog: string;
}
interface IRedirection {
  type: "redirection";
  redirect: string;
}
interface IFunction {
  type: "function";
  function: string;
}

interface Menu {
  id: string;
  title: string;
  operation: ISubMenu | IDialog | IRedirection | IFunction;
}

const USER_AVATAR_MENUS: Array<Menu> = [
  {
    id: "account-menu",
    title: "Account",
    operation: {
      type: "submenus",
      menus: [
        {
          id: "account-personal-data",
          title: "Personal Data",
          operation: {
            type: "dialog",
            dialog: "ShowPersonalDataDialog",
          },
        },

        {
          id: "account-submenu-2",
          title: "SubMenu Level 2",
          operation: {
            type: "submenus",
            menus: [
              {
                id: "account-submenu-2-link1",
                title: "SubMenu2-Link1",
                operation: {
                  type: "redirection",
                  redirect: "/some/thing1",
                },
              },
              {
                id: "account-submenu-2-link2",
                title: "SubMenu2-Link--2",
                operation: {
                  type: "redirection",
                  redirect: "/some/thing2",
                },
              },
              {
                id: "account-submenu-2-link3",
                title: "SubMenu2-Link--3",
                operation: {
                  type: "redirection",
                  redirect: "/some/thing3",
                },
              },
            ],
          },
        },
        {
          id: "account-change-email",
          title: "Change Email",
          operation: {
            type: "redirection",
            redirect: "/auth/changeEmail",
          },
        },
        {
          id: "account-change-password",
          title: "Change Password",
          operation: {
            type: "redirection",
            redirect: "/auth/changePassword",
          },
        },
      ],
    },
  },
  {
    id: "export-menu",
    title: "Your Exports",
    operation: {
      type: "redirection",
      redirect: "/exports",
    },
  },
  {
    id: "integration-menu",
    title: "Integration",
    operation: {
      type: "redirection",
      redirect: "/integrations",
    },
  },
];

const Menus = ({
  items,
  children,
}: {
  children?: React.ReactElement;
  items: Array<Menu>;
}) => {
  const [subMenus, setSubMenus] = React.useState<Array<Menu>>();

  const onMenuClick = React.useCallback((menu: Menu) => {
    // console.log("onMenuClick :>> ", menu);
    switch (menu.operation.type) {
      case "submenus":
        setSubMenus(menu.operation.menus);
        break;
      case "redirection":
        setSubMenus(undefined);
        break;
      case "dialog":
        setSubMenus(undefined);
        break;

      default:
        break;
    }
  }, []);

  // console.log("submenus :>> ", subMenus);
  return (
    <>
      <ul>
        {items.map((menu) => (
          <li key={menu.id} role="button" onClick={() => onMenuClick(menu)}>
            {menu.title}
          </li>
        ))}
        {children}
      </ul>

      {subMenus && subMenus.length && <Menus items={subMenus} />}
    </>
  );
};

const Home: NextPage = () => {
  const [avatarPopoverVisible, setAvatarPopoverVisible] = React.useState(false);

  const onAvatarPopoverToggle = React.useCallback(() => {
    setAvatarPopoverVisible((avatarPopoverVisible) => !avatarPopoverVisible);
  }, []);

  const onAwayClick = React.useCallback(
    // (e: React.MouseEvent<HTMLElement>) => {
    (e: any) => {
      console.log("e :>> ", e);
      if (
        e?.target?.offsetParent?.id !== "avatar-popover" &&
        e?.target?.id !== "avatar-menu"
      ) {
        setAvatarPopoverVisible(false);
      }
    },
    []
  );

  const SomeLargeContent = Array.from({ length: 100 }, (_, index) => index + 1);

  const userProfile = {
    name: "Steve Wozniak",
    avatar: "/images/Steve_Wozniak.jpeg",
  };

  return (
    <div className={styles.container} onClick={onAwayClick}>
      <Head>
        <title>ContactOut</title>
        <meta
          name="description"
          content="Contactout : World's best contact search engine"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <aside className={styles.sidebar}>
        <div className={styles.sidebarTop}>
          <div>
            <Link href="/">
              <a>
                <Image
                  layout="raw"
                  width={64}
                  height={64}
                  className={styles.nav}
                  alt="Home"
                  src="/images/contactout.webp"
                />
              </a>
            </Link>
          </div>
          <div>
            <Link href="/lists">
              <a>
                <Image
                  layout="raw"
                  width={64}
                  height={64}
                  className={styles.nav}
                  alt="Home"
                  src="/images/designing-layout.svg"
                />
              </a>
            </Link>
          </div>
          <div>
            <Link href="/search">
              <a>
                <Image
                  layout="raw"
                  width={64}
                  height={64}
                  className={styles.nav}
                  alt="Home"
                  src="/images/magnifying-glass.svg"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.sidebarBottom}>
          <div className={styles.avatarWrapper}>
            <div
              className={styles.avatar}
              role="button"
              onClick={onAvatarPopoverToggle}
            >
              <Image
                id="avatar-menu"
                layout="raw"
                width={64}
                height={64}
                className={styles.avatarImage}
                alt={userProfile.name}
                src={userProfile.avatar}
              />
            </div>
            <div
              id="avatar-popover"
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
                    <Menus items={USER_AVATAR_MENUS}>
                      <li>Logout</li>
                    </Menus>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <main className={styles.main}>
        {SomeLargeContent.map((i) => (
          <div key={i}>something</div>
        ))}
      </main>
      {/* <main className={styles.main}>
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
      </main> */}
    </div>
  );
};

export default Home;
