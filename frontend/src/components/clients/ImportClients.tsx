import { Button, Modal } from "antd";
import { ImportOutlined } from "@ant-design/icons";
import { Fragment, useState } from "react";
import Dragger from "antd/lib/upload/Dragger";
import { InboxOutlined } from "@ant-design/icons";
import { getAPI } from "../../services/SolarCRM/SolarAPI";
import { tableStore } from "../../stores/TableStore";
import { notify } from "../../wrappers/Noti";

export const ImportClients = () => {
  const [isVisible, setIsVisible] = useState<boolean>();

  const props = {
    name: "file",
    multiple: true,
    showUploadList: false,
    onChange(change: any) {
      console.log(change);
    },
    customRequest: async (options: any) => {
      const api = await getAPI();
      await api.importMethod({ file: options.file }).then(
        () => {
          tableStore.refreshClients = true;
          options.onSuccess();
          notify("Import został zakończony");
        },
        () => {
          options.onError();
        }
      );
    },
  };

  const onCancel = (): void => {
    setIsVisible(false);
  };

  return (
    <Fragment>
      <Button
        icon={<ImportOutlined />}
        type="primary"
        onClick={() => {
          setIsVisible(true);
        }}
      >
        Zaimportuj nowych klientów
      </Button>
      <Modal
        destroyOnClose
        visible={isVisible}
        title="Zaimportuj nowych klientów"
        onCancel={() => onCancel()}
        okButtonProps={{ hidden: true }}
        cancelText="Zamknij"
      >
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Kliknij lub przeciągnij plik tutaj aby zaimportować
          </p>
        </Dragger>
      </Modal>
    </Fragment>
  );
};
