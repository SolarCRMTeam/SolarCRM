import { Space } from "antd";
import { ImportClients } from "./ImportClients";
import { NewClient } from "./NewClient";

export const Clients = () => {
  return (
    <Space direction="vertical">
      <Space direction="horizontal">
        <NewClient />
        <ImportClients />
      </Space>
    </Space>
  );
};
