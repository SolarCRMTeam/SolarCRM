import { Space } from "antd";
import React from "react";
import { NewProcess } from "./NewProcess";
import ProcessTable from "./ProcessTable";

export const Process = () => {
  return (
    <Space direction="vertical">
      <Space direction="horizontal">
        <NewProcess />
      </Space>
      <ProcessTable />
    </Space>
  );
};
