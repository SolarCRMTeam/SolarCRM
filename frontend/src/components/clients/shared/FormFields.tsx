import { Input, Radio, RadioChangeEvent, Space } from "antd";
import React from "react";
import { CreateClientCommand } from "../../../services/SolarCRM/models";
import { Label } from "../../shared/Label";

interface IProps {
  client?: CreateClientCommand;
  setClient: React.Dispatch<
    React.SetStateAction<CreateClientCommand | undefined>
  >;
}

const { TextArea } = Input;

export const FormFields = (props: IProps) => {
  return (
    <Space direction="vertical">
      <Space direction="horizontal" size="large">
        <Space direction="vertical">
          <Space direction="vertical">
            <Label>Typ klienta</Label>
            <Radio.Group
              onChange={(event: RadioChangeEvent) => {
                props.setClient({
                  ...props.client,
                  clientType: event.target.value,
                });
              }}
              value={props.client?.clientType}
            >
              <Radio value={0}>Firma</Radio>
              <Radio value={1}>Prosument</Radio>
              <Radio value={2}>Rolnik</Radio>
            </Radio.Group>
          </Space>

          <Space direction="vertical">
            <Label>Nazwa</Label>
            <Input
              placeholder="Nazwa"
              value={props.client?.companyName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.setClient({
                  ...props.client,
                  companyName: event.target.value,
                });
              }}
            />
          </Space>

          <Space direction="vertical">
            <Label>Imię</Label>
            <Input
              placeholder="Imię"
              value={props.client?.name}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.setClient({ ...props.client, name: event.target.value });
              }}
            />
          </Space>

          <Space direction="vertical">
            <Label>Nazwisko</Label>
            <Input
              placeholder="Nazwisko"
              value={props.client?.surname}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.setClient({
                  ...props.client,
                  surname: event.target.value,
                });
              }}
            />
          </Space>
          <Space direction="vertical">
            <Label>Ulica</Label>
            <Input
              placeholder="Ulica"
              value={props.client?.street}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.setClient({
                  ...props.client,
                  street: event.target.value,
                });
              }}
            />
          </Space>
          <Space direction="vertical">
            <Label>Kod pocztowy</Label>
            <Input
              placeholder="Kod pocztowy"
              value={props.client?.postalCode}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.setClient({
                  ...props.client,
                  postalCode: event.target.value,
                });
              }}
            />
          </Space>
        </Space>
        <Space direction="vertical">
          <Space direction="vertical">
            <Label>Miejscowość</Label>

            <Input
              placeholder="Miejscowość"
              value={props.client?.place}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.setClient({ ...props.client, place: event.target.value });
              }}
            />
          </Space>
          <Space direction="vertical">
            <Label>Województwo</Label>
            <Input
              placeholder="Województwo"
              value={props.client?.voivodeship}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.setClient({
                  ...props.client,
                  voivodeship: event.target.value,
                });
              }}
            />
          </Space>
          <Space direction="vertical">
            <Label>Powiat</Label>
            <Input
              placeholder="Powiat"
              value={props.client?.district}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.setClient({
                  ...props.client,
                  district: event.target.value,
                });
              }}
            />
          </Space>
          <Space direction="vertical">
            <Label>Adres e-mail</Label>
            <Input
              placeholder="Adres e-mail"
              value={props.client?.mail}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.setClient({ ...props.client, mail: event.target.value });
              }}
            />
          </Space>
          <Space direction="vertical">
            <Label>Numer telefonu</Label>
            <Input
              placeholder="Numer telefonu"
              value={props.client?.phoneNumber}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.setClient({
                  ...props.client,
                  phoneNumber: event.target.value,
                });
              }}
            />
          </Space>
        </Space>
      </Space>
      <Space direction="vertical">
        <Label>Uwagi</Label>
        <TextArea
          placeholder="Uwagi"
          rows={4}
          cols={66}
          value={props.client?.comments}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            props.setClient({
              ...props.client,
              comments: event.target.value,
            });
          }}
        />
      </Space>
    </Space>
  );
};
