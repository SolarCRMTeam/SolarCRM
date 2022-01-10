import { notification } from "antd";

export const notify = (description: string) => {
  notification.success({
    message: <b>Success</b>,
    description: description,
    placement: "topRight",
  });
};
