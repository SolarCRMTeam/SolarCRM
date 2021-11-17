import { Button } from "antd";
import React from "react";
import { AppstoreAddOutlined } from "@ant-design/icons";

export const NewClient = () => {
  return (
    <Button icon={<AppstoreAddOutlined />} type="primary">
      Add new client
    </Button>
  );
};
