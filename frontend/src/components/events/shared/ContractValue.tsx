import { Space } from "antd";
import { CreateEventCommand } from "../../../services/SolarCRM/models";

interface IProps {
    event?: CreateEventCommand;
    setEvent: React.Dispatch<
      React.SetStateAction<CreateEventCommand | undefined>
    >;
  }
  
  export const ContractValueFields = (props: IProps) => {
    return (
      <Space direction="vertical">
        {/* <Label>Rodzaj zlecenia</Label>
        <Select
          defaultValue={props.event?.processKind}
          style={{ width: "350px" }}
          onChange={(value) => {
            props.setEvent({
              ...props.event,
              processKind: value,
            });
          }}
        >
          {Array.from(valueMap)?.map((item) => (
            <Select.Option key={item[0]} value={item[0]}>
              {item[1]}
            </Select.Option>
          ))}
        </Select> */}
      </Space>
    );
  };
  