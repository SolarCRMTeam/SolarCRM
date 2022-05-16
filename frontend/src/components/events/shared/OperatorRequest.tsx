import { Select, Space } from "antd";
import { CreateEventCommand } from "../../../services/SolarCRM/models";
import { Label } from "../../shared/Label";
import { valueMap } from "../../../mappers/OperatorRequestMapper";

interface IProps {
  event?: CreateEventCommand;
  setEvent: React.Dispatch<
    React.SetStateAction<CreateEventCommand | undefined>
  >;
}

export const OperatorRequestFields = (props: IProps) => {
  return (
    <Space direction="vertical">
      <Label>Wniosek do operatora</Label>
      <Select
        defaultValue={props.event?.operatorRequest}
        style={{ width: "350px" }}
        onChange={(value) => {
          props.setEvent({
            ...props.event,
            operatorRequest: value,
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
