import { Table } from "antd";
import { ColumnGroupType, ColumnType } from "antd/lib/table";
import React, { useEffect, useState } from "react";
import {
  APIGetProcessesOptionalParams,
  ProcessDto,
} from "../../services/SolarCRM/models";
import { getAPI } from "../../services/SolarCRM/SolarAPI";
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

  useEffect(() => {
    (async () => {
      const api = await getAPI();

      const params: APIGetProcessesOptionalParams = {
        pageSize: sieve?.pageSize,
        page: sieve?.current,
        filters: sieve.filters,
        sorts: sieve.sorts,
      };

      const data = await api
        .getProcesses(params)
        .finally(() => (tableStore.refreshProcess = false));

      if (data?.results) {
        setData(data.results);
        if (data.rowCount) {
          setSieve({ ...sieve, total: data.rowCount });
        }
      }
    })();
  }, [sieve.current, tableStore.refreshProcess, sieve.pageSize]);

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
