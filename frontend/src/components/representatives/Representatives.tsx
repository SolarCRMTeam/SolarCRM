import { Space } from "antd";
import { ImportRepresentatives } from "./ImportRepresentatives";
import { NewRepresentative } from "./NewRepresentative";
import RepresentativesTable from "./RepresentativesTable";

export const Representatives = () => {
  return (
    <Space direction="vertical">
      <Space direction="horizontal">
        <NewRepresentative />
        <ImportRepresentatives />
      </Space>
      <RepresentativesTable />
    </Space>
  );
};
