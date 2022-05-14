import { Select, Space } from "antd";
import { CreateEventCommand } from "../../../services/SolarCRM/models";
import { Label } from "../../shared/Label";
import { valueMap } from "../../../mappers/EventTypeMapper";
import { ProcessKindFields } from "./ProcessKindFields";
import { MeetingFields } from "./MeetingFields";

interface IProps {
  event?: CreateEventCommand;
  setEvent: React.Dispatch<
    React.SetStateAction<CreateEventCommand | undefined>
  >;
}

const GetFieldsByType = (props: IProps) => {
  switch (props.event?.eventType) {
    case 0:
      return (
        <ProcessKindFields setEvent={props.setEvent} event={props.event} />
      );
    case 1:
      return <MeetingFields setEvent={props.setEvent} event={props.event} />;
  }
};

export const FormFields = (props: IProps) => {
  return (
    <Space direction="vertical">
      <Space direction="vertical">
        <Label>Typ zdarzenia</Label>
        <Select
          defaultValue={props.event?.eventType}
          style={{ width: "350px" }}
          onChange={(value) => {
            props.setEvent({
              ...props.event,
              eventType: value,
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
      {GetFieldsByType(props)}
    </Space>
  );
};
