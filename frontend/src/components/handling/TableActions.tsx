import { Space } from "antd";
import { ColumnGroupType, ColumnType } from "antd/lib/table";
import { RepresentativeDto } from "../../services/SolarCRM/models";
import { DeleteProcess } from "./DeleteProcess";

export const GetTableActions = ():
  | ColumnGroupType<RepresentativeDto>
  | ColumnType<RepresentativeDto> => {
  return {
    title: "Akcję",
    dataIndex: "actions",
    width: 80,
    fixed: "right",
    render: (_, item: RepresentativeDto) => {
      return (
        <Space direction="horizontal">
          <DeleteProcess id={item.id!} />
        </Space>
      );
    },
  };
};
