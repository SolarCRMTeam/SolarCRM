import { InputNumber, Select, Space } from "antd";
import { CreateEventCommand } from "../../../services/SolarCRM/models";
import { Label } from "../../shared/Label";
import { valueMap } from "../../../mappers/AuditMapper";
import { valueMap as auditPlace } from "../../../mappers/AuditPlaceMapper";
import { valueMap as auditShading } from "../../../mappers/AuditShadingMapper";
import { valueMap as auditWorkScope } from "../../../mappers/AuditWorkScopeMapper";
import TextArea from "rc-textarea";

interface IProps {
  event?: CreateEventCommand;
  setEvent: React.Dispatch<
    React.SetStateAction<CreateEventCommand | undefined>
  >;
}

export const AuditFields = (props: IProps) => {
  return (
    <Space direction="vertical">
      <Label>Audyt</Label>
      <Select
        defaultValue={props.event?.audit}
        style={{ width: "350px" }}
        onChange={(value) => {
          props.setEvent({
            ...props.event,
            audit: value,
          });
        }}
      >
        {Array.from(valueMap)?.map((item) => (
          <Select.Option key={item[0]} value={item[0]}>
            {item[1]}
          </Select.Option>
        ))}
      </Select>
      <Label>Miejsce</Label>
      <Select
        defaultValue={props.event?.auditPlace}
        style={{ width: "350px" }}
        onChange={(value) => {
          props.setEvent({
            ...props.event,
            auditPlace: value,
          });
        }}
      >
        {Array.from(auditPlace)?.map((item) => (
          <Select.Option key={item[0]} value={item[0]}>
            {item[1]}
          </Select.Option>
        ))}
      </Select>
      <Label>Zacienienie</Label>
      <Select
        defaultValue={props.event?.auditShading}
        style={{ width: "350px" }}
        onChange={(value) => {
          props.setEvent({
            ...props.event,
            auditShading: value,
          });
        }}
      >
        {Array.from(auditShading)?.map((item) => (
          <Select.Option key={item[0]} value={item[0]}>
            {item[1]}
          </Select.Option>
        ))}
      </Select>
      <Label>Zakres prac</Label>
      <Select
        defaultValue={props.event?.auditWorkScope}
        style={{ width: "350px" }}
        onChange={(value) => {
          props.setEvent({
            ...props.event,
            auditWorkScope: value,
          });
        }}
      >
        {Array.from(auditWorkScope)?.map((item) => (
          <Select.Option key={item[0]} value={item[0]}>
            {item[1]}
          </Select.Option>
        ))}
      </Select>
      <Space direction="vertical">
        <Label>Powierzchnia (m2)</Label>
        <InputNumber
          min={1}
          style={{width: 200}}
          placeholder="Powierzchnia (m2)"
          value={props.event?.auditSurface}
          onChange={(value) => {
            props.setEvent({ ...props.event, auditSurface: value });
          }}
        />
      </Space>
      <Space direction="vertical">
        <Label>Rachunek za prąd (m-c)</Label>
        <InputNumber
          min={1}
          style={{width: 200}}
          step="0.01"
          placeholder="Rachunek za prąd (m-c)"
          value={props.event?.auditElectricBill}
          onChange={(value) => {
            props.setEvent({ ...props.event, auditElectricBill: value });
          }}
        />
      </Space>
      <Label>Uwagi</Label>
      <TextArea
        placeholder="Uwagi"
        rows={4}
        cols={66}
        value={props.event?.warnings}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          props.setEvent({
            ...props.event,
            warnings: event.target.value,
          });
        }}
      />
    </Space>
  );
};
