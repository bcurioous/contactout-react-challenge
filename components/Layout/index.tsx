import React from "react";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import Menus from "./Menu";

import USER_AVATAR_MENUS from "./userAvatarMenus";

import styles from "./layout.module.css";

type Props = {
  children?: React.ReactElement;
};

function Layout({ children }: Props) {
  const router = useRouter();

  console.log("router :>> ", router);

  const popOverMenuContainerRef = React.useRef<HTMLDivElement>(null);

  const [avatarPopoverVisible, setAvatarPopoverVisible] = React.useState(true);

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

  const onMenuAdded = () => {
    const popOverContainerDOM = popOverMenuContainerRef.current;
    if (popOverContainerDOM) {
      //   const oldLeft = getComputedStyle(popOverContainerDOM).left;
      //   const oldWidth = getComputedStyle(popOverContainerDOM).width;

      //   console.log("oldLeft :>> ", oldLeft);
      //   console.log("oldWidth :>> ", oldWidth);

      //   popOverContainerDOM.style.left = `${
      //     parseInt(oldLeft) - parseInt(oldWidth) / 2 + 163
      //   }px`;
      popOverContainerDOM.style.left = "290px";
    }
    console.log('onMenuAdded :>> ', );
  };

  const onMenuRemoved = () => {
      console.log('onMenuRemoved :>> ', );
    const popOverContainerDOM = popOverMenuContainerRef.current;
    if (popOverContainerDOM) {
      popOverContainerDOM.style.left = "218px";
    }
  };

  // top px
  // -50 px

  //   left px

  // 218 px
  // 255 px
  // 338 px

  //   const onMenuResize = React.useCallback(() => {
  //     const popOverMenuDOM = popOverMenuRef.current;
  //     const popOverContainerDOM = popOverContainerRef.current;

  //     const neededHeight = popOverMenuDOM?.offsetHeight;
  //     const neededWidth = popOverMenuDOM?.offsetWidth;

  //     console.log(
  //       "popOverMenuDOM  :>> ",
  //       neededHeight,
  //       neededWidth,
  //       popOverMenuDOM
  //     );
  //     console.log("popOverContainerDOM  :>> ", popOverContainerDOM);

  //     if (popOverContainerDOM) {
  //       popOverContainerDOM.style.height = String(neededHeight) + "px";
  //       popOverContainerDOM.style.width = String(neededWidth) + "px";
  //     }
  //   }, []);

  const userProfile = {
    name: "Steve Wozniak",
    avatar: "/images/Steve_Wozniak.jpeg",
  };
  return (
    <div className={styles.container} onClick={onAwayClick}>
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
          <div className={styles.avatarWrapper}>
            <div className={styles.avatar} onClick={onAvatarPopoverToggle}>
              <button type="button">
                <Image
                  id="avatar-menu"
                  layout="raw"
                  width={64}
                  height={64}
                  className={styles.avatarImage}
                  alt={userProfile.name}
                  src={userProfile.avatar}
                />
              </button>
            </div>
            <div
              id="avatar-popover"
              ref={popOverMenuContainerRef}
              className={`${
                avatarPopoverVisible ? styles.avatarPopoverShow + " " : ""
              }${styles.avatarPopover}`}
            >
              <div className={styles.leftBottom} />
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardUserInfo}>
                    <Image
                      layout="raw"
                      width={36}
                      height={36}
                      className={styles.avatarImage}
                      alt={userProfile.name}
                      src={userProfile.avatar}
                    />
                    <strong className={styles.cardUserName}>
                      {userProfile.name}
                    </strong>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <div style={{ display: "flex" }}>
                    <Menus
                      items={USER_AVATAR_MENUS}
                      visible={avatarPopoverVisible}
                      onMenuAdded={onMenuAdded}
                      onMenuRemoved={onMenuRemoved}
                    >
                      <li>
                        <button
                          className={styles.logout}
                          type="button"
                          onClick={() => alert("logout clicked")}
                        >
                          Log out
                        </button>
                      </li>
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
