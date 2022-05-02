import { Button, Modal } from "antd";
import { Fragment, useEffect, useState } from "react";
import {
  CreateRepresentativeResponse,
  UpdateRepresentativeCommand,
} from "../../services/SolarCRM/models";
import { getAPI } from "../../services/SolarCRM/SolarAPI";
import { tableStore } from "../../stores/TableStore";
import { FormFields } from "./shared/FormFields";
import { EditOutlined } from "@ant-design/icons";
import { notify } from "../../wrappers/Noti";

interface IProps {
  id: string;
}

export const EditRepresentative = (props: IProps) => {
  const [isVisible, setIsVisible] = useState<boolean>();
  const [representative, setRepresentative] =
    useState<UpdateRepresentativeCommand>();
  const [isBusy, setIsBusy] = useState<boolean>();

  const onSubmit = async (): Promise<CreateRepresentativeResponse> => {
    const api = await getAPI();
    const result = await api.updateRepresentative({ body: representative });

    return result;
  };

  const onCancel = (): void => {
    setIsVisible(false);
  };

  useEffect(() => {
    (async () => {
      if (isVisible) {
        const api = await getAPI();
        const result = await api.getRepresentativeById(props.id);

        setRepresentative(result);
      }
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
        visible={isVisible}
        title={representative?.name}
        onOk={() => {
          setIsBusy(true);
          onSubmit()
            .then(() => {
              tableStore.refreshRepresentatives = true;
              setIsVisible(false);
              notify("Poprawnie zaktualizowano przedstawiciela.");
            })
            .finally(() => setIsBusy(false));
        }}
        okButtonProps={{ loading: isBusy }}
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
