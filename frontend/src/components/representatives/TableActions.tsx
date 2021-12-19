import { Space } from "antd";
import { ColumnGroupType, ColumnType } from "antd/lib/table";
import { RepresentativeDto } from "../../services/SolarCRM/models";
import { DeleteRepresentative } from "./DeleteRepresentative";
import { EditRepresentative } from "./EditRepresentative";

export const GetTableActions = ():
  | ColumnGroupType<RepresentativeDto>
  | ColumnType<RepresentativeDto> => {
  return {
    title: "Actions",
    dataIndex: "actions",
    width: 80,
    fixed: "right",
    render: (_, item: RepresentativeDto) => {
      return (
        <Space direction="horizontal">
          <EditRepresentative id={item.id!} />
          <DeleteRepresentative id={item.id!} />
        </Space>
      );
    },
  };
};
