export interface MenuItem {
  key: string;
  title: string;
  path: string;
}

export const menuItems: MenuItem[] = [
  {
    key: "clients",
    title: "Klienci",
    path: "/clients",
  },
  {
    key: "representatives",
    title: "Przedstawiciele",
    path: "/representatives",
  },
  {
    key: "account",
    title: "Moje konto",
    path: "/account",
  },
  {
    key: "logout",
    title: "Wyloguj",
    path: "/logout",
  },
];
