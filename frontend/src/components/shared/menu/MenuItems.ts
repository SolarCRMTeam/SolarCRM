export interface MenuItem {
  key: string;
  title: string;
  path: string;
}

export const menuItems: MenuItem[] = [
  {
    key: "clients",
    title: "Clients",
    path: "/clients",
  },
  {
    key: "representatives",
    title: "Representatives",
    path: "/representatives",
  },
  {
    key: "account",
    title: "My Account",
    path: "/account",
  },
];
