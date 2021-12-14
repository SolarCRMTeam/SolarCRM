import { Menu } from "antd";
import { useHistory } from "react-router";
import { MenuItem, menuItems } from "./MenuItems";

export const MenuBar = () => {
  const history = useHistory();

  const getSelectedKey = (): string[] => {
    console.log(history.location);

    return [history.location.pathname.replaceAll("/", "")];
  };

  return (
    <Menu theme="dark" mode="horizontal" selectedKeys={getSelectedKey()}>
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
