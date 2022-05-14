import { Table } from "antd";
import { ColumnGroupType, ColumnType } from "antd/lib/table";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import {
  APIGetProcessesOptionalParams,
  ProcessDto,
} from "../../services/SolarCRM/models";
import { getAPI } from "../../services/SolarCRM/SolarAPI";
import { tableStore } from "../../stores/TableStore";
import { map } from "../../mappers/ProcessKindMapper";
import { isPositive } from "../../mappers/MeetingMapper";
import { GetTableActions } from "./TableActions";
import { useHistory } from "react-router";

interface ISieve {
  pageSize: number;
  current: number;
  total?: number;
  filters?: string;
  sorts?: string;
}

const ProcessTable = () => {
  const history = useHistory();

  const [sieve, setSieve] = useState<ISieve>({
    current: 1,
    pageSize: 15,
    total: undefined,
  });

  const columns: (ColumnGroupType<ProcessDto> | ColumnType<ProcessDto>)[] = [
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Ostatnia zmiana",
      dataIndex: "updated",
    },
    {
      title: "Id zlecenia",
      dataIndex: "identifier",
    },
    {
      title: "Id klienta",
      dataIndex: "clientNumber",
    },
    {
      title: "Nazwa",
      dataIndex: "name",
    },
    {
      title: "Rodzaj zlecenia",
      dataIndex: "kind",
      render: (item: number) => {
        return map(item);
      },
    },
    {
      title: "Spotkanie",
      dataIndex: "meeting",
      render: (item: number) => {
        return isPositive(item);
      },
    },
    {
      title: "Wartość umowy",
      dataIndex: "offerValue",
      render: (item: number) => {
        return item?.toFixed(2);
      }
    },
    {
      title: "Wielkość instalacji Ilość kWp",
      dataIndex: "installationSize",
    },
    {
      title: "Zaliczka",
      dataIndex: "advance",
    },
    {
      title: "Audyt",
      dataIndex: "audit",
    },
    {
      title: "Akceptacja projektu",
      dataIndex: "projectAccepted",
    },
    {
      title: "Montaż",
      dataIndex: "assembly",
    },
    {
      title: "Wniosek do operatora",
      dataIndex: "operatorRequest",
    },
    {
      title: "Faktura końcowa",
      dataIndex: "finalInvoice",
    },
    {
      title: "Rozliczenie końcowe",
      dataIndex: "finalBilling",
    },
    {
      title: "Aplikacja",
      dataIndex: "application",
    },
    GetTableActions(),
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
      onRow={(record, rowIndex) => {
        return {
          onDoubleClick: (event) => {
            history.push(`/events/${record.id}`);
          },
        };
      }}
    />
  );
};

export default observer(ProcessTable);
