import { IMenu } from "./Menu";

const USER_AVATAR_MENUS: Array<IMenu> = [
  {
    id: "account-menu",
    title: "Account",
    operation: {
      type: "submenus",
      menus: [
        {
          id: "account-personal-data",
          title: "Personal Data",
          operation: { type: "dialog", dialog: "ShowPersonalDataDialog" },
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
    operation: { type: "redirection", redirect: "/exports" },
  },
  {
    id: "integration-menu",
    title: "Integration",
    operation: { type: "redirection", redirect: "/integrations" },
  },
];

export default USER_AVATAR_MENUS;
