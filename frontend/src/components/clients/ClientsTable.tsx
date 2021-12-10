import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { ClientDto } from "../../services/SolarCRM/models";
import { getAPI } from "../../services/SolarCRM/SolarAPI";

export const ClientsTable = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: 150,
    },
  ];

  useEffect(() => {
    (async () => {
      const api = await getAPI();
      const data = await api.getClients();

      if (data?.results) {
        setData(data.results);
      }
    })();
  }, []);

  const [data, setData] = useState<ClientDto[]>([]);

  return (
    <Table
      columns={columns}
      dataSource={data}
      style={{ width: "99vw" }}
      pagination={{ pageSize: 50 }}
      scroll={{ y: "70vh" }}
    />
  );
};
