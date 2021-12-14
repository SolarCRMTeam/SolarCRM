import { Button, Modal } from "antd";
import { Fragment, useEffect, useState } from "react";
import {
  CreateClientCommand,
  CreateResponse,
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

  useEffect(() => {
    (async () => {
      const api = await getAPI();
      const result = await api.getById(props.id);

      setClient({ name: result.name });
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
      />
      <Modal
        visible={isVisible}
        title={client?.name}
        onOk={() =>
          onSubmit().then(() => {
            tableStore.refreshClients = true;
            setIsVisible(false);
            setClient(undefined);
          })
        }
        onCancel={() => onCancel()}
      >
        <FormFields client={client} setClient={setClient} />
      </Modal>
    </Fragment>
  );
};
