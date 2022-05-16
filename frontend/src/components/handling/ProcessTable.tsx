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
import { map as operatorRequestMap } from "../../mappers/OperatorRequestMapper";
import { isPositive } from "../../mappers/MeetingMapper";
import { isPositive as isPositiveInstallation } from "../../mappers/InstallationMapper";
import { map as mapAudit } from "../../mappers/AuditMapper";
import { map as mapProjectAccept } from "../../mappers/ProjectAcceptMapper";
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
      },
    },
    {
      title: "Wielkość instalacji Ilość kWp",
      dataIndex: "installationSize",
    },
    {
      title: "Zaliczka",
      dataIndex: "advance",
      render: (item: number, record: ProcessDto) => {
        return `${item ?? 0} (${
          record.offerValue !== undefined
            ? Math.round((100 * item) / record.offerValue)
            : 0
        })%`;
      },
    },
    {
      title: "Audyt",
      dataIndex: "audit",
      render: (item: number) => {
        return mapAudit(item);
      },
    },
    {
      title: "Akceptacja projektu",
      dataIndex: "projectAccepted",
      render: (item: number) => {
        return mapProjectAccept(item);
      },
    },
    {
      title: "Montaż",
      dataIndex: "installation",
      render: (item: number) => {
        return isPositiveInstallation(item);
      },
    },
    {
      title: "Wniosek do operatora",
      dataIndex: "operatorRequest",
      render: (item: number) => {
        return operatorRequestMap(item);
      },
    },
    {
      title: "Faktura końcowa",
      dataIndex: "finalInvoice",
    },
    {
      title: "Rozliczenie końcowe",
      dataIndex: "finalBilling",
      render: (item: Date) => {
        return item?.toDateString();
      },
    },
    {
      title: "Aplikacja",
      dataIndex: "application",
      render: (item: Date) => {
        return item ? "Tak" : "Nie";
      },
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
