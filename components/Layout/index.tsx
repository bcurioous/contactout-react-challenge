import React from "react";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./layout.module.css";
import UserAvatarMenu from "./UserAvatarMenu";

type Props = {
  children?: React.ReactElement;
};

function Layout({ children }: Props) {
  const router = useRouter();

  const popOverMenuContainerRef = React.useRef<HTMLDivElement>(null);

  const [avatarPopoverVisible, setAvatarPopoverVisible] = React.useState(false);

  const onAvatarPopoverToggle = React.useCallback(() => {
    setAvatarPopoverVisible((avatarPopoverVisible) => !avatarPopoverVisible);
  }, []);

  const onAwayClick = React.useCallback((e: any) => {
    if (
      e?.target?.offsetParent?.id !== "avatar-popover" &&
      e?.target?.id !== "avatar-menu"
    ) {
      setAvatarPopoverVisible(false);
    }
  }, []);

  return (
    <div className={styles.container} onClick={onAwayClick}>
      <nav className={styles.topNavSmallScreen}>
        <div>
          <Link href="/">
            <a>
              <Image
                layout="raw"
                width={48}
                height={48}
                className={styles.nav}
                alt="Home"
                src="/images/contactout.webp"
              />
            </a>
          </Link>
        </div>
        <div className={styles.topNavLeft}>
          <UserAvatarMenu
            visible={avatarPopoverVisible}
            onAvatarPopoverToggle={onAvatarPopoverToggle}
          />
          <div>
            <Image
              layout="raw"
              width={30}
              height={30}
              className={styles.nav}
              alt="Home"
              src="/images/bar.svg"
            />
          </div>
        </div>
      </nav>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarTop}>
          <ul className={styles.sidebarNav}>
            <li
              className={`${
                router.route === "/" ? styles.sidebarNavSelected : ""
              }`}
            >
              <Link href="/">
                <a>
                  <Image
                    layout="raw"
                    width={48}
                    height={48}
                    className={styles.nav}
                    alt="Home"
                    src="/images/contactout.webp"
                  />
                </a>
              </Link>
            </li>
            <li
              className={`${
                router.route === "/lists" ? styles.sidebarNavSelected : ""
              }`}
            >
              <Link href="/lists">
                <a>
                  <Image
                    layout="raw"
                    width={24}
                    height={24}
                    className={styles.nav}
                    alt="Home"
                    src="/images/designing-layout.svg"
                  />
                  <p>Lists</p>
                </a>
              </Link>
            </li>
            <li
              className={`${
                router.route === "/search" ? styles.sidebarNavSelected : ""
              }`}
            >
              <Link href="/search">
                <a>
                  <Image
                    layout="raw"
                    width={24}
                    height={24}
                    className={styles.nav}
                    alt="Home"
                    src="/images/magnifying-glass.svg"
                  />
                  <p>Search</p>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.sidebarBottom}>
          <UserAvatarMenu
            visible={avatarPopoverVisible}
            onAvatarPopoverToggle={onAvatarPopoverToggle}
          />
        </div>
      </aside>

      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
