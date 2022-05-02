import { Button, Modal } from "antd";
import React, { Fragment, useState } from "react";
import { AppstoreAddOutlined } from "@ant-design/icons";
import { FormFields } from "./shared/FormFields";
import {
  CreateProcessCommand,
  CreateProcessResponse,
} from "../../services/SolarCRM/models";
import { getAPI } from "../../services/SolarCRM/SolarAPI";
import { tableStore } from "../../stores/TableStore";
import { notify } from "../../wrappers/Noti";

export const NewProcess = () => {
  const [isVisible, setIsVisible] = useState<boolean>();
  const [process, setProcess] = useState<CreateProcessCommand>();
  const [isBusy, setIsBusy] = useState<boolean>();

  const onCancel = (): void => {
    setProcess(undefined);
    setIsVisible(false);
  };

  const onSubmit = async (): Promise<CreateProcessResponse> => {
    const api = await getAPI();
    const result = await api.createProcess({ body: process });

    return result;
  };

  return (
    <Fragment>
      <Button
        icon={<AppstoreAddOutlined />}
        type="primary"
        onClick={() => setIsVisible(true)}
        loading={isBusy}
      >
        Dodaj nowe zlecenie
      </Button>
      <Modal
        destroyOnClose
        visible={isVisible}
        okText="Dodaj"
        cancelText="Anuluj"
        title="Dodaj nowe zlecenie"
        width="28vw"
        okButtonProps={{ loading: isBusy }}
        onOk={() => {
          setIsBusy(true);
          onSubmit()
            .then(() => {
              tableStore.refreshProcess = true;
              setIsVisible(false);
              setProcess(undefined);
              notify("Poprawnie dodano nowe zlecenie.");
            })
            .finally(() => setIsBusy(false));
        }}
        onCancel={() => onCancel()}
      >
        <FormFields process={process} setProcess={setProcess} />
      </Modal>
    </Fragment>
  );
};
