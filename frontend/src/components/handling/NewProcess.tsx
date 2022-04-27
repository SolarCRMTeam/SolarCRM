import { Button, Modal } from "antd";
import React, { Fragment, useState } from "react";
import { AppstoreAddOutlined } from "@ant-design/icons";

export const NewProcess = () => {
  const [isVisible, setIsVisible] = useState<boolean>();

  const [isBusy, setIsBusy] = useState<boolean>();

  const onCancel = (): void => {
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
        }}
        onCancel={() => onCancel()}
      ></Modal>
    </Fragment>
  );
};
