import { Button, Modal } from "antd";
import { ImportOutlined } from "@ant-design/icons";
import { Fragment, useState } from "react";
import Dragger from "antd/lib/upload/Dragger";
import { InboxOutlined } from "@ant-design/icons";
import { getAPI } from "../../services/SolarCRM/SolarAPI";
import { tableStore } from "../../stores/TableStore";
import { notify } from "../../wrappers/Noti";

export const ImportRepresentatives = () => {
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
      await api.import1({ file: options.file }).then(
        () => {
          tableStore.refreshRepresentatives = true;
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
        Zaimportuj nowych przedstawicieli
      </Button>
      <Modal
        visible={isVisible}
        title="Zaimportuj nowych przedstawicieli"
        onCancel={() => onCancel()}
        okButtonProps={{ hidden: true }}
        cancelText="Close"
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
