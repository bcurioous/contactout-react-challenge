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
          title: "Personal data",
          operation: { type: "dialog", dialog: "ShowPersonalDataDialog" },
        },
        // {
        //   id: "account-submenu-2",
        //   title: "ML 2",
        //   operation: {
        //     type: "submenus",
        //     menus: [
        //       {
        //         id: "account-submenu-2-link1",
        //         title: "Link-1",
        //         operation: {
        //           type: "redirection",
        //           redirect: "/some/thing1",
        //         },
        //       },
        //       {
        //         id: "account-submenu-2-link2",
        //         title: "Link-2",
        //         operation: {
        //           type: "redirection",
        //           redirect: "/some/thing2",
        //         },
        //       },
        //       {
        //         id: "account-submenu-2-link3",
        //         title: "Link-3",
        //         operation: {
        //           type: "redirection",
        //           redirect: "/some/thing3",
        //         },
        //       },
        //     ],
        //   },
        // },
        {
          id: "account-change-email",
          title: "Change email",
          operation: {
            type: "redirection",
            redirect: "/auth/changeEmail",
          },
        },
        {
          id: "account-change-password",
          title: "Change password",
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
