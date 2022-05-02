import { Descriptions, Space } from "antd";
import { useEffect, useState } from "react";
import { ProcessDto } from "../../services/SolarCRM/models";
import { getAPI } from "../../services/SolarCRM/SolarAPI";
import { EventsTable } from "./EventsTable";

interface IProps {
  processId: string;
}

export const Events = (props: IProps) => {
  const [process, setProcess] = useState<ProcessDto>();

  useEffect(() => {
    (async () => {
      const api = await getAPI();

      const data = await api.getProcessById(props.processId);

      if (data) {
        setProcess(data);
      }
    })();
  }, []);

  return process ? (
    <Space direction="vertical">
      <Descriptions title={`Zlecenie numer: ${process.identifier}`}>
        <Descriptions.Item label="Nazwa">{process.name}</Descriptions.Item>
        <Descriptions.Item label="Status">{process.status}</Descriptions.Item>
      </Descriptions>
      <EventsTable processId={props.processId} />
    </Space>
  ) : (
    <></>
  );
};
