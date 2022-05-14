import { InputNumber, Space } from "antd";
import { CreateEventCommand } from "../../../services/SolarCRM/models";
import { Label } from "../../shared/Label";

interface IProps {
  event?: CreateEventCommand;
  setEvent: React.Dispatch<
    React.SetStateAction<CreateEventCommand | undefined>
  >;
}

export const InstallationSizeFields = (props: IProps) => {
  return (
    <Space direction="vertical">
      <Label>Ilość kWp</Label>
      <InputNumber
        min={1}
        step="0.01"
        placeholder="Ilość kWp"
        value={props.event?.installationSize}
        onChange={(value) => {
          props.setEvent({ ...props.event, installationSize: value });
        }}
      />
    </Space>
  );
};
