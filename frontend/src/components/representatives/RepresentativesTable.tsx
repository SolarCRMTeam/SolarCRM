import { Table } from "antd";
import { ColumnGroupType } from "antd/lib/table";
import { observer } from "mobx-react-lite";
import { ColumnType } from "rc-table/lib/interface";
import { useEffect, useState } from "react";
import {
  APIGetRepresentativesOptionalParams,
  RepresentativeDto,
} from "../../services/SolarCRM/models";
import { getAPI } from "../../services/SolarCRM/SolarAPI";
import { tableStore } from "../../stores/TableStore";
import { GetTableActions } from "./TableActions";

interface ISieve {
  pageSize: number;
  current: number;
  total?: number;
  filters?: string;
  sorts?: string;
}

const RepresentativesTable = () => {
  const [sieve, setSieve] = useState<ISieve>({
    current: 1,
    pageSize: 15,
    total: undefined,
  });

  const columns: (ColumnGroupType<RepresentativeDto> | ColumnType<RepresentativeDto>)[] = [
    {
      title: "Imię",
      dataIndex: "name",
    },
    {
      title: "Nazwisko",
      dataIndex: "surname",
    },
    {
      title: "Ulica",
      dataIndex: "street",
    },
    {
      title: "Kod pocztowy",
      dataIndex: "postalCode",
    },
    {
      title: "Miejscowość",
      dataIndex: "place",
    },
    {
      title: "Województwo",
      dataIndex: "voivodeship",
    },
    {
      title: "Powiat",
      dataIndex: "district",
    },
    {
      title: "Adres e-mail",
      dataIndex: "mail",
    },
    {
      title: "Numer telefonu",
      dataIndex: "phoneNumber",
    },
    {
      title: "Uwagi",
      dataIndex: "comments",
    },
    GetTableActions(),
  ];

  useEffect(() => {
    (async () => {
      const api = await getAPI();

      const params: APIGetRepresentativesOptionalParams = {
        pageSize: sieve?.pageSize,
        page: sieve?.current,
        filters: sieve.filters,
        sorts: sieve.sorts,
      };

      const data = await api
        .getRepresentatives(params)
        .finally(() => (tableStore.refreshRepresentatives = false));

      if (data?.results) {
        setData(data.results);
        if (data.rowCount) {
          setSieve({ ...sieve, total: data.rowCount });
        }
      }
    })();
  }, [sieve.current, tableStore.refreshRepresentatives]);

  const [data, setData] = useState<RepresentativeDto[]>([]);

  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={tableStore.refreshRepresentatives}
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

export default observer(RepresentativesTable);
