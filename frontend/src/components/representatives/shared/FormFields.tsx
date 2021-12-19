import { Input, Space } from "antd";
import React from "react";
import { CreateRepresentativeCommand } from "../../../services/SolarCRM/models";

interface IProps {
  representative?: CreateRepresentativeCommand;
  setRepresentative: React.Dispatch<
    React.SetStateAction<CreateRepresentativeCommand | undefined>
  >;
}

export const FormFields = (props: IProps) => {
  return (
    <Space direction="vertical">
      <Space direction="horizontal">
        Representative name:
        <Input
          placeholder="Name"
          value={props.representative?.name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            props.setRepresentative({
              ...props.representative,
              name: event.target.value,
            });
          }}
        />
      </Space>
    </Space>
  );
};
