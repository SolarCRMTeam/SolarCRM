// import React from 'react'

import { Fragment, useEffect, useState } from "react";
import { AppstoreAddOutlined } from "@ant-design/icons";
import { getAPI } from "../../services/SolarCRM/SolarAPI";
import { Button, Modal } from "antd";
import { tableStore } from "../../stores/TableStore";
import { notify } from "../../wrappers/Noti";
import {
  CreateEventCommand,
  CreateEventResponse,
} from "../../services/SolarCRM/models";
import { FormFields } from "./shared/FormFields";

interface IProps {
  processId: string;
}

export const NewEvent = (props: IProps) => {
  const [isVisible, setIsVisible] = useState<boolean>();
  const [event, setEvent] = useState<CreateEventCommand>();
  const [isBusy, setIsBusy] = useState<boolean>();

  useEffect(() => {
    setEvent({ ...event, processId: props.processId });
  }, [props.processId]);

  const onSubmit = async (): Promise<CreateEventResponse> => {
    const api = await getAPI();
    const result = await api.createEvent({ body: event });

    return result;
  };

  const onCancel = (): void => {
    setEvent(undefined);
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
        Dodaj nowe zdarzenie
      </Button>
      <Modal
        destroyOnClose
        visible={isVisible}
        okText="Dodaj"
        cancelText="Anuluj"
        title="Dodaj nowe zdarzenie"
        width="28vw"
        okButtonProps={{ loading: isBusy }}
        onOk={() => {
          setIsBusy(true);
          onSubmit()
            .then(() => {
              tableStore.refreshEvents = true;
              tableStore.refreshSingleProcess = true;
              setIsVisible(false);
              setEvent(undefined);
              notify("Poprawnie dodano nowe zdarzenie.");
            })
            .finally(() => setIsBusy(false));
        }}
        onCancel={() => onCancel()}
      >
        <FormFields event={event} setEvent={setEvent} />
      </Modal>
    </Fragment>
  );
};
