import { Button, Modal } from "antd";
import { Fragment, useState } from "react";
import { AppstoreAddOutlined } from "@ant-design/icons";
import {
  CreateRepresentativeCommand,
  CreateRepresentativeResponse,
} from "../../services/SolarCRM/models";
import { getAPI } from "../../services/SolarCRM/SolarAPI";
import { tableStore } from "../../stores/TableStore";
import { FormFields } from "./shared/FormFields";
import { notify } from "../../wrappers/Noti";

interface IProps {}

export const NewRepresentative = (props: IProps) => {
  const [isVisible, setIsVisible] = useState<boolean>();
  const [representative, setRepresentative] =
    useState<CreateRepresentativeCommand>();
  const [isBusy, setIsBusy] = useState<boolean>();

  const onSubmit = async (): Promise<CreateRepresentativeResponse> => {
    const api = await getAPI();
    const result = await api.createRepresentative({ body: representative });

    return result;
  };

  const onCancel = (): void => {
    setRepresentative(undefined);
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
        Dodaj nowego przedstawiciela
      </Button>
      <Modal
        visible={isVisible}
        title="Dodaj nowego przedstawiciela"
        okButtonProps={{ loading: isBusy }}
        onOk={() => {
          setIsBusy(true);
          onSubmit()
            .then(() => {
              tableStore.refreshRepresentatives = true;
              setIsVisible(false);
              setRepresentative(undefined);
              notify("Poprawnie dodano nowego przedstawiciela.");
            })
            .finally(() => setIsBusy(false));
        }}
        onCancel={() => onCancel()}
      >
        <FormFields
          representative={representative}
          setRepresentative={setRepresentative}
        />
      </Modal>
    </Fragment>
  );
};
