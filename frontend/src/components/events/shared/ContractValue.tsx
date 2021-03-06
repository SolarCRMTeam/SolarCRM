import { InputNumber, Space } from "antd";
import { CreateEventCommand } from "../../../services/SolarCRM/models";
import { Label } from "../../shared/Label";

interface IProps {
  event?: CreateEventCommand;
  setEvent: React.Dispatch<
    React.SetStateAction<CreateEventCommand | undefined>
  >;
}

export const ContractValueFields = (props: IProps) => {
  return (
    <Space direction="vertical">
      <Label>Wartość netto kWp</Label>
      <InputNumber
        min={1}
        step="0.01"
        placeholder="Wartość netto kWp"
        value={props.event?.contractValue}
        onChange={(value) => {
          props.setEvent({ ...props.event, contractValue: value });
        }}
      />
    </Space>
  );
};
