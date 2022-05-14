import { DatePicker, InputNumber, Space } from "antd";
import { CreateEventCommand } from "../../../services/SolarCRM/models";
import { Label } from "../../shared/Label";

interface IProps {
  event?: CreateEventCommand;
  setEvent: React.Dispatch<
    React.SetStateAction<CreateEventCommand | undefined>
  >;
}

export const AdvanceFields = (props: IProps) => {
  return (
    <Space direction="vertical">
      <Label>Data wpływu</Label>
      <DatePicker
        onChange={(value) => {
          props.setEvent({
            ...props.event,
            advanceDate: value?.toDate(),
          });
        }}
      />
      <Label>Wartość zaliczki</Label>
      <InputNumber
        min={1}
        step="0.01"
        style={{width: '150px'}}
        placeholder="Wartość zaliczki"
        value={props.event?.advance}
        onChange={(value) => {
          props.setEvent({ ...props.event, advance: value });
        }}
      />
    </Space>
  );
};
