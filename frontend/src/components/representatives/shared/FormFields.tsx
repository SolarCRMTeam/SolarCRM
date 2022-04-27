import { Input, Space } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { CreateRepresentativeCommand } from "../../../services/SolarCRM/models";
import { Label } from "../../shared/Label";

interface IProps {
  representative?: CreateRepresentativeCommand;
  setRepresentative: React.Dispatch<
    React.SetStateAction<CreateRepresentativeCommand | undefined>
  >;
}

export const FormFields = (props: IProps) => {
  return (
    <Space direction="vertical">
      <Space direction="horizontal" size="large">
        <Space direction="vertical">
          <Space direction="vertical">
            <Label>Imię</Label>
            <Input
              placeholder="Imię"
              value={props.representative?.name}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.setRepresentative({
                  ...props.representative,
                  name: event.target.value,
                });
              }}
            />
          </Space>

          <Space direction="vertical">
            <Label>Nazwisko</Label>
            <Input
              placeholder="Nazwisko"
              value={props.representative?.surname}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.setRepresentative({
                  ...props.representative,
                  surname: event.target.value,
                });
              }}
            />
          </Space>
          <Space direction="vertical">
            <Label>Ulica</Label>
            <Input
              placeholder="Ulica"
              value={props.representative?.street}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.setRepresentative({
                  ...props.representative,
                  street: event.target.value,
                });
              }}
            />
          </Space>
          <Space direction="vertical">
            <Label>Adres</Label>
            <Input
              placeholder="Adres"
              value={props.representative?.address}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.setRepresentative({
                  ...props.representative,
                  address: event.target.value,
                });
              }}
            />
          </Space>
          <Space direction="vertical">
            <Label>Miejscowość</Label>

            <Input
              placeholder="Miejscowość"
              value={props.representative?.place}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.setRepresentative({
                  ...props.representative,
                  place: event.target.value,
                });
              }}
            />
          </Space>
        </Space>
        <Space direction="vertical">
          <Space direction="vertical">
            <Label>Kod pocztowy</Label>
            <Input
              placeholder="Kod pocztowy"
              value={props.representative?.postalCode}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.setRepresentative({
                  ...props.representative,
                  postalCode: event.target.value,
                });
              }}
            />
          </Space>
          <Space direction="vertical">
            <Label>Województwo</Label>
            <Input
              placeholder="Województwo"
              value={props.representative?.voivodeship}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.setRepresentative({
                  ...props.representative,
                  voivodeship: event.target.value,
                });
              }}
            />
          </Space>
          <Space direction="vertical">
            <Label>Powiat</Label>
            <Input
              placeholder="Powiat"
              value={props.representative?.district}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.setRepresentative({
                  ...props.representative,
                  district: event.target.value,
                });
              }}
            />
          </Space>
          <Space direction="vertical">
            <Label>Adres e-mail</Label>
            <Input
              placeholder="Adres e-mail"
              value={props.representative?.mail}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.setRepresentative({
                  ...props.representative,
                  mail: event.target.value,
                });
              }}
            />
          </Space>
          <Space direction="vertical">
            <Label>Numer telefonu</Label>
            <Input
              placeholder="Numer telefonu"
              value={props.representative?.phoneNumber}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.setRepresentative({
                  ...props.representative,
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
          value={props.representative?.comments}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            props.setRepresentative({
              ...props.representative,
              comments: event.target.value,
            });
          }}
        />
      </Space>
    </Space>
  );
};
