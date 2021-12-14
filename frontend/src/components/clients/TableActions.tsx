import { Button, Popconfirm, Space } from "antd";
import { ColumnGroupType, ColumnType } from "antd/lib/table";
import { ClientDto } from "../../services/SolarCRM/models";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { getAPI } from "../../services/SolarCRM/SolarAPI";
import { tableStore } from "../../stores/TableStore";
import { EditClient } from "./EditClient";

export const TableActions: ColumnGroupType<ClientDto> | ColumnType<ClientDto> =
  {
    title: "Actions",
    dataIndex: "actions",
    width: 80,
    fixed: "right",
    render: (_, item: ClientDto) => {
      return (
        <Space direction="horizontal">
          <EditClient id={item.id!}/>
          <Popconfirm
            title="Are you sure to delete this client?"
            onConfirm={async () => {
              const api = await getAPI();
              await api
                .deleteMethod(item.id!)
                .then(() => (tableStore.refreshClients = true));
            }}
            onCancel={() => {}}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="primary"
              shape="circle"
              size="small"
              icon={<DeleteOutlined />}
              danger
            />
          </Popconfirm>
        </Space>
      );
    },
  };
