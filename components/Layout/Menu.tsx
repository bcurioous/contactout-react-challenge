import React from "react";

type Props = {
  children?: React.ReactElement;
  items: Array<Menu>;
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

const Menus = ({ items, children }: Props) => {
  const [subMenus, setSubMenus] = React.useState<Array<IMenu>>();

  const onMenuClick = React.useCallback((menu: IMenu) => {
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

export default Menus;
