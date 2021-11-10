import { Menu } from "antd";
import { useHistory } from "react-router";
import { MenuItem, menuItems } from "./MenuItems";

export const MenuBar = () => {
  const history = useHistory();

  return (
    <Menu theme="dark" mode="horizontal">
      {menuItems.map((item: MenuItem) => {
        return (
          <Menu.Item
            key={item.key}
            onClick={() => {
              history.push(item.path);
            }}
          >
            {item.title}
          </Menu.Item>
        );
      })}
    </Menu>
  );
};
