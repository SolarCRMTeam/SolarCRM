import { Button, Modal, Progress } from "antd";
import { ImportOutlined } from "@ant-design/icons";
import { Fragment, useState } from "react";
import Dragger from "antd/lib/upload/Dragger";
import { InboxOutlined } from "@ant-design/icons";
import { getAPI } from "../../services/SolarCRM/SolarAPI";
import { tableStore } from "../../stores/TableStore";

export const ImportClients = () => {
  const [isVisible, setIsVisible] = useState<boolean>();
  // const [file, setFile] = useState<File | undefined>();

  const props = {
    name: "file",
    multiple: true,
    onChange(change: any) {
      console.log(change);
    },
    customRequest: async (options: any) => {
      const api = await getAPI();
      await api.importMethod({ file: options.file }).then(
        () => {
          tableStore.refreshClients = true;
          options.onSuccess();
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
        Import new clients
      </Button>
      <Modal
        visible={isVisible}
        title="Import new clients"
        onCancel={() => onCancel()}
        okButtonProps={{ hidden: true }}
        cancelText="Close"
      >
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </Dragger>
      </Modal>
    </Fragment>
  );
};
