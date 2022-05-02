import { Input, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import {
  ClientDto,
  CreateProcessCommand,
} from "../../../services/SolarCRM/models";
import { getAPI } from "../../../services/SolarCRM/SolarAPI";
import { Label } from "../../shared/Label";
import { valueMap } from "../../../mappers/ProcessKindMapper";
interface IProps {
  process?: CreateProcessCommand;
  setProcess: React.Dispatch<
    React.SetStateAction<CreateProcessCommand | undefined>
  >;
}

const { TextArea } = Input;

export const FormFields = (props: IProps) => {
  const [clients, setClients] = useState<ClientDto[]>([]);

  useEffect(() => {
    (async () => {
      const api = await getAPI();

      const data = await api.getAllClients();

      if (data) {
        setClients(data);
      }
    })();
  }, []);

  return (
    <Space direction="vertical">
      <Space direction="vertical">
        <Label>Klient</Label>
        <Select
          defaultValue={props.process?.clientId}
          style={{ width: '350px' }}
          onChange={(value) => {
            props.setProcess({
              ...props.process,
              clientId: value,
            });
          }}
        >
          {clients?.map((client) => (
            <Select.Option key={client.id} value={client.id!}>
              {client.name}
            </Select.Option>
          ))}
        </Select>
      </Space>
      <Space direction="vertical">
        <Label>Rodzaj zlecenia</Label>
        <Select
          defaultValue={props.process?.kind}
          style={{ width: '350px' }}
          onChange={(value) => {
            props.setProcess({
              ...props.process,
              kind: value,
            });
          }}
        >
          {Array.from(valueMap)?.map((item) => (
            <Select.Option key={item[0]} value={item[0]}>
              {item[1]}
            </Select.Option>
          ))}
        </Select>
      </Space>
      <Space direction="vertical">
        <Label>Uwagi</Label>
        <TextArea
          placeholder="Uwagi"
          rows={4}
          cols={66}
          value={props.process?.comments}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            props.setProcess({
              ...props.process,
              comments: event.target.value,
            });
          }}
        />
      </Space>
    </Space>
  );
};
