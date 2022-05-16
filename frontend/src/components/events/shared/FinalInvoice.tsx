import { Input, Space } from "antd";
import { CreateEventCommand } from "../../../services/SolarCRM/models";
import { Label } from "../../shared/Label";

interface IProps {
  event?: CreateEventCommand;
  setEvent: React.Dispatch<
    React.SetStateAction<CreateEventCommand | undefined>
  >;
}

export const FinalInvoiceFields = (props: IProps) => {
  return (
    <Space direction="vertical">
      <Label>Uzupełnij numer fakury końcowej</Label>
      <Input
        placeholder="Numer faktury końcowej"
        value={props.event?.finalInvoice}
        onChange={(value) => {
          props.setEvent({ ...props.event, finalInvoice: value.target.value });
        }}
      />
    </Space>
  );
};
