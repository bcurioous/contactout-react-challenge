import React from "react";
import styles from "./layout.module.css";

type Props = {
  children?: React.ReactElement;
  items: Array<IMenu>;
  visible?: boolean;
};

interface ISubMenu {
  type: "submenus";
  menus: Array<IMenu>;
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

export interface IMenu {
  id: string;
  title: string;
  operation: ISubMenu | IDialog | IRedirection | IFunction;
}

const Menus = ({ items, children, visible }: Props) => {
  const [subMenus, setSubMenus] = React.useState<{
    menus: Array<IMenu>;
    selected: string;
  }>();

  React.useEffect(() => {
    if (!visible) {
      setSubMenus(undefined);
    }
  }, [visible]);

  const onMenuClick = React.useCallback((menu: IMenu) => {
    console.log("onMenuClick :>> ", menu);
    switch (menu.operation.type) {
      case "submenus":
        setSubMenus({ menus: menu.operation.menus, selected: menu.id });
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
      <div className={styles.avatarMenuWrapper}>
        <ul className={styles.avatarMenu}>
          {items.map((menu) => (
            <li
              key={menu.id}
              className={`${styles.avatarMenuItem} ${
                subMenus?.selected === menu.id
                  ? styles.avatarMenuItemSelected
                  : ""
              }`}
              onClick={() => onMenuClick(menu)}
            >
              <button type="button">{menu.title}</button>
              {menu.operation.type === "submenus" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className={styles.avatarMenuItemSubMenuArrow}
                >
                  <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                </svg>
              )}
            </li>
          ))}
          {children}
        </ul>
      </div>
      {subMenus?.menus && subMenus?.menus.length && (
        <Menus items={subMenus.menus} />
      )}
    </>
  );
};

export default React.memo(Menus);
