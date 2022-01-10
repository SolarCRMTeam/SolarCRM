import { Button, Modal } from "antd";
import { Fragment, useEffect, useState } from "react";
import {
  CreateResponse,
  UpdateClientCommand,
} from "../../services/SolarCRM/models";
import { getAPI } from "../../services/SolarCRM/SolarAPI";
import { tableStore } from "../../stores/TableStore";
import { FormFields } from "./shared/FormFields";
import { EditOutlined } from "@ant-design/icons";

interface IProps {
  id: string;
}

export const EditClient = (props: IProps) => {
  const [isVisible, setIsVisible] = useState<boolean>();
  const [client, setClient] = useState<UpdateClientCommand>();
  const [isBusy, setIsBusy] = useState<boolean>();

  const onSubmit = async (): Promise<CreateResponse> => {
    const api = await getAPI();
    const result = await api.update({ body: client });

    return result;
  };

  const onCancel = (): void => {
    setIsVisible(false);
  };

  useEffect(() => {
    (async () => {
      const api = await getAPI();
      const result = await api.getById(props.id);

      setClient(result);
    })();
  }, [props.id]);

  return (
    <Fragment>
      <Button
        type="primary"
        shape="circle"
        size="small"
        icon={<EditOutlined />}
        onClick={() => setIsVisible(true)}
        loading={isBusy}
      />
      <Modal
        destroyOnClose
        visible={isVisible}
        title={client?.name}
        onOk={() => {
          setIsBusy(true);
          onSubmit()
            .then(() => {
              tableStore.refreshClients = true;
              setIsVisible(false);
            })
            .finally(() => setIsBusy(false));
        }}
        okButtonProps={{ loading: isBusy }}
        onCancel={() => onCancel()}
      >
        <FormFields client={client} setClient={setClient} />
      </Modal>
    </Fragment>
  );
};
