import React from "react";

import Link from "next/link";
import Image from "next/image";

import Menus from "./Menu";

import USER_AVATAR_MENUS from "./userAvatarMenus";

import styles from "./layout.module.css";

type Props = {
  children?: React.ReactElement;
};

function Layout({ children }: Props) {
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

  const userProfile = {
    name: "Steve Wozniak",
    avatar: "/images/Steve_Wozniak.jpeg",
  };
  return (
    <div className={styles.container} onClick={onAwayClick}>
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

      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
