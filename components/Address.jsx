import { useState } from "react";
import { Modal, Button, Form, Input, Table } from "antd";
import styles from './Address.module.css'

export const Address = ({ visible, setVisible }) => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const tailLayout = {
    wrapperCol: { offset: 6, span: 14 },
  };

  const columns = [
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => <Button>Select</Button>,
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      address: "New York No. 1 Lake Park",
    },
  ];

  return (
    <>
      <Modal
        title="Search Property"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={650}
        footer={null}
      >
        <Form
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
					size={componentSize}
					className={styles.form}
        >
          <Form.Item label="Street Number">
            <Input />
          </Form.Item>
          <Form.Item label="Street Name">
            <Input />
          </Form.Item>
          <Form.Item label="Street Type">
            <Input />
          </Form.Item>
          <Form.Item label="Suburb">
            <Input />
          </Form.Item>
          <Form.Item label="Postcode">
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button>Search</Button>
          </Form.Item>
        </Form>
        <div>
          <Table pagination={false} columns={columns} dataSource={data} />
        </div>
      </Modal>
    </>
  );
};
