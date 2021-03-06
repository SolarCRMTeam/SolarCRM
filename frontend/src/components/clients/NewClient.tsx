import { Button, Modal } from "antd";
import { Fragment, useState } from "react";
import { AppstoreAddOutlined } from "@ant-design/icons";
import {
  CreateClientCommand,
  CreateClientResponse,
} from "../../services/SolarCRM/models";
import { getAPI } from "../../services/SolarCRM/SolarAPI";
import { tableStore } from "../../stores/TableStore";
import { FormFields } from "./shared/FormFields";
import { notify } from "../../wrappers/Noti";

interface IProps {}

export const NewClient = (props: IProps) => {
  const [isVisible, setIsVisible] = useState<boolean>();
  const [client, setClient] = useState<CreateClientCommand>();
  const [isBusy, setIsBusy] = useState<boolean>();

  const onSubmit = async (): Promise<CreateClientResponse> => {
    const api = await getAPI();
    const result = await api.createClient({ body: client });

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
        loading={isBusy}
      >
        Dodaj nowego klienta
      </Button>
      <Modal
        destroyOnClose
        visible={isVisible}
        okText="Dodaj"
        cancelText="Anuluj"
        title="Dodaj nowego klienta"
        width="28vw"
        okButtonProps={{ loading: isBusy }}
        onOk={() => {
          setIsBusy(true);
          onSubmit()
            .then(() => {
              tableStore.refreshClients = true;
              setIsVisible(false);
              setClient(undefined);
              notify("Poprawnie dodano nowego klienta.");
            })
            .finally(() => setIsBusy(false));
        }}
        onCancel={() => onCancel()}
      >
        <FormFields client={client} setClient={setClient} />
      </Modal>
    </Fragment>
  );
};
