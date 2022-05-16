import { DatePicker, Radio, Select, Space } from "antd";
import React, { useState } from "react";
import { Label } from "../../shared/Label";
import { positiveMap, negativeMap } from "../../../mappers/InstallationMapper";
import { CreateEventCommand } from "../../../services/SolarCRM/models";

interface IProps {
  event?: CreateEventCommand;
  setEvent: React.Dispatch<
    React.SetStateAction<CreateEventCommand | undefined>
  >;
}

export const InstallationFields = (props: IProps) => {
  const [installation, setInstallation] = useState<boolean>();

  return (
    <Space direction="vertical">
      <Label>Montaż</Label>
      <Radio.Group
        onChange={(value) => {
          setInstallation(value.target.value);
        }}
        value={installation}
      >
        <Radio value={0}>Nie</Radio>
        <Radio value={1}>Tak</Radio>
      </Radio.Group>
      {installation !== undefined && (
        <Space direction="vertical">
          <Label>Status instalacji</Label>
          <Select
            defaultValue={props.event?.installation}
            style={{ width: "350px" }}
            onChange={(value) => {
              props.setEvent({
                ...props.event,
                installation: value,
              });
            }}
          >
            {Array.from(installation ? positiveMap : negativeMap)?.map(
              (item) => (
                <Select.Option key={item[0]} value={item[0]}>
                  {item[1]}
                </Select.Option>
              )
            )}
          </Select>
        </Space>
      )}
    </Space>
  );
};
