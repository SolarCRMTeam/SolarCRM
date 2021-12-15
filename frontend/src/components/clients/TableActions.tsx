import { Space } from "antd";
import { ColumnGroupType, ColumnType } from "antd/lib/table";
import { ClientDto } from "../../services/SolarCRM/models";
import { EditClient } from "./EditClient";
import { DeleteClient } from "./DeleteClient";

export const GetTableActions = ():
  | ColumnGroupType<ClientDto>
  | ColumnType<ClientDto> => {
  return {
    title: "Actions",
    dataIndex: "actions",
    width: 80,
    fixed: "right",
    render: (_, item: ClientDto) => {
      return (
        <Space direction="horizontal">
          <EditClient id={item.id!} />
          <DeleteClient id={item.id!} />
        </Space>
      );
    },
  };
};
