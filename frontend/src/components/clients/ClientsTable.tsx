import { Table } from "antd";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import {
  APIGetClientsOptionalParams,
  ClientDto,
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

const ClientsTable = () => {
  const [sieve, setSieve] = useState<ISieve>({
    current: 1,
    pageSize: 15,
    total: undefined,
  });

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

      const params: APIGetClientsOptionalParams = {
        pageSize: sieve?.pageSize,
        page: sieve?.current,
        filters: sieve.filters,
        sorts: sieve.sorts,
      };

      const data = await api
        .getClients(params)
        .finally(() => (tableStore.refreshClients = false));

      if (data?.results) {
        setData(data.results);
        if (data.rowCount) {
          setSieve({ ...sieve, total: data.rowCount });
        }
      }
    })();
  }, [sieve.current, tableStore.refreshClients]);

  const [data, setData] = useState<ClientDto[]>([]);

  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={tableStore.refreshClients}
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

export default observer(ClientsTable);
