import { Select, Space } from "antd";
import { CreateEventCommand } from "../../../services/SolarCRM/models";
import { Label } from "../../shared/Label";
import { valueMap } from "../../../mappers/EventTypeMapper";

interface IProps {
  event?: CreateEventCommand;
  setEvent: React.Dispatch<
    React.SetStateAction<CreateEventCommand | undefined>
  >;
}

export const FormFields = (props: IProps) => {
  return (
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
  );
};
