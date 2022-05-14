import { DatePicker, Radio, Select, Space } from "antd";
import React, { useState } from "react";
import { Label } from "../../shared/Label";
import { positiveMap, negativeMap } from "../../../mappers/MeetingMapper";
import { CreateEventCommand } from "../../../services/SolarCRM/models";

interface IProps {
  event?: CreateEventCommand;
  setEvent: React.Dispatch<
    React.SetStateAction<CreateEventCommand | undefined>
  >;
}

export const MeetingFields = (props: IProps) => {
  const [meeting, setMeeting] = useState<boolean>();

  return (
    <Space direction="vertical">
      <Label>Czy spotkanie się odbyło</Label>
      <Radio.Group
        onChange={(value) => {
          setMeeting(value.target.value);
        }}
        value={meeting}
      >
        <Radio value={0}>Nie</Radio>
        <Radio value={1}>Tak</Radio>
      </Radio.Group>
      <Label>Status spotkania</Label>
      <Select
        defaultValue={props.event?.meeting}
        style={{ width: "350px" }}
        onChange={(value) => {
          props.setEvent({
            ...props.event,
            meeting: value,
          });
        }}
      >
        {Array.from(meeting ? positiveMap : negativeMap)?.map((item) => (
          <Select.Option key={item[0]} value={item[0]}>
            {item[1]}
          </Select.Option>
        ))}
      </Select>
      {(props.event?.meeting === 5 || props.event?.meeting === 6) && (
        <Space direction="vertical">
          <Label>Data</Label>
          <DatePicker
            onChange={(value) => {
              props.setEvent({
                ...props.event,
                meetingDate: value?.toDate(),
              });
            }}
          />
        </Space>
      )}
    </Space>
  );
};
