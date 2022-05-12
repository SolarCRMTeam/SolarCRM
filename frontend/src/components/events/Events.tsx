import { Button, Card, Descriptions, Space } from "antd";
import { useEffect, useState } from "react";
import { ProcessDto } from "../../services/SolarCRM/models";
import { getAPI } from "../../services/SolarCRM/SolarAPI";
import { EventsTable } from "./EventsTable";
import { map } from "../../mappers/ProcessKindMapper";
import { NewEvent } from "./NewEvent";

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
    <>
      <Card
        title={
          <Space direction="horizontal" size="large">
            Obsługa zlecenia
            <NewEvent />
          </Space>
        }
        bordered={false}
        style={{ width: 400, margin: "auto", marginBottom: "15px" }}
      >
        <h3>Zlecenie numer: {process.identifier}</h3>
        {process.kind !== undefined && (
          <p>Rodzaj zlecenia: {map(process.kind)}</p>
        )}
        <p>Nazwa klienta: {process.name}</p>
        <p>Status zlecenia: {process.status}</p>
      </Card>
      <EventsTable processId={props.processId} />
    </>
  ) : (
    <></>
  );
};
