import { Input, Space } from "antd";
import React from "react";
import {
  CreateClientCommand,
} from "../../../services/SolarCRM/models";

interface IProps {
  client?: CreateClientCommand;
  setClient: React.Dispatch<
    React.SetStateAction<CreateClientCommand | undefined>
  >;
}

export const FormFields = (props: IProps) => {
  return (
    <Space direction="vertical">
      <Space direction="horizontal">
        Client name:
        <Input
          placeholder="Name"
          value={props.client?.name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            props.setClient({ ...props.client, name: event.target.value });
          }}
        />
      </Space>
    </Space>
  );
};
