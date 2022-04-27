import { Table } from "antd";
import { ColumnGroupType, ColumnType } from "antd/lib/table";
import React, { useState } from "react";
import { ProcessDto } from "../../services/SolarCRM/models";
import { tableStore } from "../../stores/TableStore";

interface ISieve {
  pageSize: number;
  current: number;
  total?: number;
  filters?: string;
  sorts?: string;
}

export const ProcessTable = () => {
  const [sieve, setSieve] = useState<ISieve>({
    current: 1,
    pageSize: 15,
    total: undefined,
  });

  const columns: (ColumnGroupType<ProcessDto> | ColumnType<ProcessDto>)[] = [
    {
      title: "Id",
      dataIndex: "id",
    },
  ];

  const [data, setData] = useState<ProcessDto[]>([]);

  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={tableStore.refreshProcess}
      style={{ width: "99vw" }}
      pagination={sieve}
      onChange={(pagination, filters, sorting) => {
        setSieve({
          pageSize: pagination.pageSize!,
          current: pagination.current!,
        });
      }}
      scroll={{ y: "70vh" }}
    />
  );
};
