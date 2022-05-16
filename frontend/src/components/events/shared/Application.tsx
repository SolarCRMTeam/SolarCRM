import { DatePicker, Space } from "antd";
import { CreateEventCommand } from "../../../services/SolarCRM/models";
import { Label } from "../../shared/Label";

interface IProps {
  event?: CreateEventCommand;
  setEvent: React.Dispatch<
    React.SetStateAction<CreateEventCommand | undefined>
  >;
}

export const ApplicationFields = (props: IProps) => {
  return (
    <Space direction="vertical">
      <Label>Uzupełnij datę uruchomienia aplikacji</Label>
      <DatePicker
        onChange={(value) => {
          props.setEvent({
            ...props.event,
            application: value?.toDate(),
          });
        }}
      />
    </Space>
  );
};
