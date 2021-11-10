import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import { MenuBar } from "./menu/MenuBar";

interface IProps {
  children: React.ReactNode;
}

export const PrimaryView = (props: IProps) => {
  return (
    <Layout>
      <Header className="fixedHeader">
        <MenuBar />
      </Header>
      <Content className="content">{props.children}</Content>
      <Footer className="footer">Solar CRM</Footer>
    </Layout>
  );
};
