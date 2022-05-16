import { DatePicker, Space } from "antd";
import { CreateEventCommand } from "../../../services/SolarCRM/models";
import { Label } from "../../shared/Label";

interface IProps {
  event?: CreateEventCommand;
  setEvent: React.Dispatch<
    React.SetStateAction<CreateEventCommand | undefined>
  >;
}

export const FinalBillingFields = (props: IProps) => {
  return (
    <Space direction="vertical">
      <Label>Uzupełnij datę wpływu</Label>
      <DatePicker
        onChange={(value) => {
          props.setEvent({
            ...props.event,
            finalBilling: value?.toDate(),
          });
        }}
      />
    </Space>
  );
};
