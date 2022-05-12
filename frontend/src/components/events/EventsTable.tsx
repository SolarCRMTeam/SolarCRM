import { Table } from "antd";
import { ColumnGroupType, ColumnType } from "rc-table/lib/interface";
import { useEffect, useState } from "react";
import {
  APIGetEventsOptionalParams,
  EventDto,
} from "../../services/SolarCRM/models";
import { getAPI } from "../../services/SolarCRM/SolarAPI";
import { tableStore } from "../../stores/TableStore";
import { map } from "../../mappers/EventTypeMapper";
import { observer } from "mobx-react-lite";

interface IProps {
  processId: string;
}

const EventsTable = (props: IProps) => {
  const [events, setEvents] = useState<EventDto[]>([]);

  const columns: (ColumnGroupType<EventDto> | ColumnType<EventDto>)[] = [
    {
      title: "Rodzaj zdarzenia",
      dataIndex: "eventType",
      render: (item: number) => {
        return map(item);
      },
    },
    {
      title: "Data zdarzenia",
      dataIndex: "created",
      render: (item: Date) => {
        return <p>{item.toLocaleDateString()} {item.toLocaleTimeString()}</p>
      }
    },
  ];

  useEffect(() => {
    (async () => {
      const api = await getAPI();

      const params: APIGetEventsOptionalParams = {
        processId: props.processId,
      };

      const data = await api
        .getEvents(params)
        .finally(() => (tableStore.refreshEvents = false));

      if (data) {
        setEvents(data);
      }
    })();
  }, [props.processId, tableStore.refreshEvents]);

  return (
    <Table
      columns={columns}
      dataSource={events}
      loading={tableStore.refreshEvents}
      style={{ width: "99vw" }}
      pagination={false}
      scroll={{ y: "70vh" }}
    />
  );
};

export default observer(EventsTable);