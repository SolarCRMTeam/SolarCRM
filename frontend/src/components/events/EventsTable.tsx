import { Table } from "antd";
import { useEffect, useState } from "react";
import {
  APIGetEventsOptionalParams,
  EventDto,
} from "../../services/SolarCRM/models";
import { getAPI } from "../../services/SolarCRM/SolarAPI";
import { tableStore } from "../../stores/TableStore";

interface IProps {
  processId: string;
}

export const EventsTable = (props: IProps) => {
  const [events, setEvents] = useState<EventDto[]>([]);

  const columns: any = [];

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
  }, [props.processId]);

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
