import { Button, Input, Modal, Space } from "antd";
import React, { Fragment, useState } from "react";
import { AppstoreAddOutlined } from "@ant-design/icons";
import {
  CreateClientCommand,
  CreateResponse,
} from "../../services/SolarCRM/models";
import { getAPI } from "../../services/SolarCRM/SolarAPI";
import { tableStore } from "../../stores/TableStore";
import { FormFields } from "./shared/FormFields";

interface IProps {}

export const NewClient = (props: IProps) => {
  const [isVisible, setIsVisible] = useState<boolean>();
  const [client, setClient] = useState<CreateClientCommand>();

  const onSubmit = async (): Promise<CreateResponse> => {
    const api = await getAPI();
    const result = await api.create({ body: client });

    return result;
  };

  const onCancel = (): void => {
    setClient(undefined);
    setIsVisible(false);
  };

  return (
    <Fragment>
      <Button
        icon={<AppstoreAddOutlined />}
        type="primary"
        onClick={() => setIsVisible(true)}
      >
        Add new client
      </Button>
      <Modal
        visible={isVisible}
        title="Create new client"
        onOk={() =>
          onSubmit().then(() => {
            tableStore.refreshClients = true;
            setIsVisible(false);
            setClient(undefined);
          })
        }
        onCancel={() => onCancel()}
      >
        <FormFields client={client} setClient={setClient}/>
      </Modal>
    </Fragment>
  );
};
