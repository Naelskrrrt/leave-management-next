import { Icon } from "@iconify/react";

export const SIDENAV_ITEM = [
  {
    title: "Dashboard",
    path: "/",
    icon: (
      <Icon icon="lucide:table-cells-merge" width={"24px"} height={"24px"} />
    ),
  },
  {
    title: "Listes Des Congés",
    path: "/leave-list",
    icon: <Icon icon="lucide:calendar-days" width="24" height="24" />,
  },
  {
    title: "Listes des Users",
    path: "/user-list",
    icon: <Icon icon="lucide:users" width="24" height="24" />,
  },
  {
    title: "Préférences",
    path: "/settings",
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      {
        title: "Profils",
        path: "/settings/account",
        icon: <Icon icon="lucide:user-cog" width="20" height="20" />,
      },
      {
        title: "Besoin d'aide",
        path: "/settings/help",
        icon: <Icon icon="lucide:help-circle" width="20" height="20" />,
      },
    ],
  },
];
