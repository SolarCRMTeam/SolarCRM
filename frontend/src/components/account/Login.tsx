import { Button, Col, Form, Input } from "antd";
import { getAPI } from "../../services/SolarCRM/SolarAPI";
import { userStore } from "../../stores/UserStore";

const onFinish = async (values: any) => {
  const api = await getAPI();

  const body = {
    login: values.username,
    password: values.password,
  };

  try {
    const result = await api.authenticate({ body: body });
    userStore.login = values.username;
    userStore.password = values.password;
    userStore.representative = result._response.parsedBody;
  } catch (ex) {
    console.log(ex);
  }
};

const onFinishFailed = () => {};

export const Login = () => {
  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 5 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ marginTop: "40vh" }}
      >
        <Col span={12} offset={8}>
          <h2>Witaj w Solar CRM</h2>
        </Col>

        <Form.Item
          label="Login"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Hasło"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
