import { Select, Space } from "antd";
import React from "react";
import { Label } from "../../shared/Label";
import { valueMap } from "../../../mappers/ProjectAcceptMapper";
import { CreateEventCommand } from "../../../services/SolarCRM/models";

interface IProps {
  event?: CreateEventCommand;
  setEvent: React.Dispatch<
    React.SetStateAction<CreateEventCommand | undefined>
  >;
}

export const ProjectAcceptFields = (props: IProps) => {
  return (
    <Space direction="vertical">
      <Label>Akceptacja projektu</Label>
      <Select
        defaultValue={props.event?.projectAccept}
        style={{ width: "350px" }}
        onChange={(value) => {
          props.setEvent({
            ...props.event,
            projectAccept: value,
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
  );
};
