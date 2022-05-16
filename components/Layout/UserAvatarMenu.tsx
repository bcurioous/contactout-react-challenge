import React from "react";
import Image from "next/image";

import Menus from "./Menu";

import styles from "./layout.module.css";
import USER_AVATAR_MENUS from "./userAvatarMenus";

type Props = {
  visible: boolean;
  onAvatarPopoverToggle: React.MouseEventHandler<HTMLDivElement>;
};

const userProfile = {
  name: "Steve Wozniak",
  avatar: "/images/Steve_Wozniak.jpeg",
};

const UserAvatarMenu = ({ visible, onAvatarPopoverToggle }: Props) => {
  const popOverMenuContainerRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <div className={styles.avatarWrapper}>
        <div
          className={styles.avatar}
          role="button"
          onClick={onAvatarPopoverToggle}
        >
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
      </div>
      <div
        id="avatar-popover"
        ref={popOverMenuContainerRef}
        className={`${visible ? styles.avatarPopoverShow + " " : ""}${
          styles.avatarPopover
        }`}
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
              <Menus items={USER_AVATAR_MENUS} visible={visible}>
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
    </>
  );
};

export default UserAvatarMenu;
