import { notification } from "antd";

export const notify = (description: string) => {
  notification.success({
    message: <b>Sukces</b>,
    description: description,
    placement: "topRight",
  });
};
