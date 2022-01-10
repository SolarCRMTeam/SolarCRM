import { Button, Popconfirm } from "antd";
import { getAPI } from "../../services/SolarCRM/SolarAPI";
import { tableStore } from "../../stores/TableStore";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";

interface IProps {
  id: string;
}

export const DeleteClient = (props: IProps) => {
  const [isBusy, setIsBusy] = useState<boolean>();

  return (
    <Popconfirm
      title="Czy jesteś pewny, że chcesz usunąć tego klienta?"
      onConfirm={() => {
        setIsBusy(true);
        (async () => {
          const api = await getAPI();
          await api
            .deleteMethod(props.id)
            .then(() => (tableStore.refreshClients = true))
            .finally(() => setIsBusy(false));
        })();
      }}
      okButtonProps={{ loading: isBusy }}
      onCancel={() => {}}
      okText="Tak"
      cancelText="Nie"
    >
      <Button
        type="primary"
        shape="circle"
        size="small"
        loading={isBusy}
        icon={<DeleteOutlined />}
        danger
      />
    </Popconfirm>
  );
};
