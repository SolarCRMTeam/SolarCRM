import { Button } from "antd";
import React from "react";
import { ImportOutlined } from "@ant-design/icons";

export const ImportClients = () => {
  return (
    <Button icon={<ImportOutlined />} type="primary">
      Import new clients
    </Button>
  );
};
