import { Table } from "antd";
import React from "react";

export const ClientsTable = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: 150,
    },
    {
      title: "Age",
      dataIndex: "age",
      width: 150,
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }

  return (
    <Table
      columns={columns}
      dataSource={data}
      style={{width: '99vw'}}
       pagination={{ pageSize: 50 }}
       scroll={{ y: '70vh' }}
    />
  );
};