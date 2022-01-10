import { Input, Radio, RadioChangeEvent, Space } from "antd";
import React from "react";
import { CreateClientCommand } from "../../../services/SolarCRM/models";

interface IProps {
  client?: CreateClientCommand;
  setClient: React.Dispatch<
    React.SetStateAction<CreateClientCommand | undefined>
  >;
}

export const FormFields = (props: IProps) => {
  return (
    <Space direction="vertical">
      <Space direction="horizontal">
        Typ klienta:
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
          <Radio value={1}>Rolnik</Radio>
          <Radio value={2}>Prosument</Radio>
        </Radio.Group>
      </Space>

      <Space direction="horizontal">
        Nazwa:
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

      <Space direction="horizontal">
        Imię:
        <Input
          placeholder="Imię"
          value={props.client?.name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            props.setClient({ ...props.client, name: event.target.value });
          }}
        />
      </Space>

      <Space direction="horizontal">
        Nazwisko:
        <Input
          placeholder="Nazwisko"
          value={props.client?.surname}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            props.setClient({ ...props.client, surname: event.target.value });
          }}
        />
      </Space>
      <Space direction="horizontal">
        Ulica:
        <Input
          placeholder="Ulica"
          value={props.client?.street}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            props.setClient({ ...props.client, street: event.target.value });
          }}
        />
      </Space>
      <Space direction="horizontal">
        Kod pocztowy:
        <Input
          placeholder="Kod pocztowy"
          value={props.client?.postalCode}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            props.setClient({ ...props.client, postalCode: event.target.value });
          }}
        />
      </Space>
      <Space direction="horizontal">
        Miejscowość:
        <Input
          placeholder="Miejscowość"
          value={props.client?.place}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            props.setClient({ ...props.client, place: event.target.value });
          }}
        />
      </Space>
      <Space direction="horizontal">
        Województwo:
        <Input
          placeholder="Województwo"
          value={props.client?.voivodeship}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            props.setClient({ ...props.client, voivodeship: event.target.value });
          }}
        />
      </Space>
      <Space direction="horizontal">
        Powiat:
        <Input
          placeholder="Powiat"
          value={props.client?.district}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            props.setClient({ ...props.client, district: event.target.value });
          }}
        />
      </Space>
      <Space direction="horizontal">
        Adres e-mail:
        <Input
          placeholder="Adres e-mail"
          value={props.client?.mail}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            props.setClient({ ...props.client, mail: event.target.value });
          }}
        />
      </Space>
      <Space direction="horizontal">
        Numer telefonu:
        <Input
          placeholder="Numer telefonu"
          value={props.client?.phoneNumber}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            props.setClient({ ...props.client, phoneNumber: event.target.value });
          }}
        />
      </Space>
      <Space direction="horizontal">
        Uwagi:
        <Input
          placeholder="Uwagi"
          value={props.client?.comments}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            props.setClient({ ...props.client, comments: event.target.value });
          }}
        />
      </Space>
    </Space>
  );
};
