import { useState } from "react";
import { Modal, Button, Form, Input, Table } from "antd";
import { nanoid } from "nanoid";
import { requestAddress } from "../service/address";
import { requestProperty } from "../service/property";
import styles from "./Address.module.css";

export const Address = ({ visible, setVisible, properties, setProperties }) => {
  const [componentSize, setComponentSize] = useState("default");
  const [data, setData] = useState(null);

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const addProperty = async (gnafId, address) => {
    const property = await requestProperty(gnafId);
    setProperties(() => [...properties, { ...property, address, gnafId }]);
    setVisible(false);
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
      dataIndex: "gnafId",
      key: "gnafId",
      render: (gnafId, { address }) => {
        return (
          <Button onClick={() => addProperty(gnafId, address)} type="primary">
            Select
          </Button>
        );
      },
    },
  ];

  // const data = [
  //   {
  //     key: "1",
  //     name: "John Brown",
  //     address: "New York No. 1 Lake Park",
  //   },
  // ];

  const onFinish = async (values) => {
    console.log(values);
    const addresses = await requestAddress(values);
    console.log(addresses);
    const data = addresses.map((i, index) => {
      const { streetName, streetNumber, streetType, suburb, postcode, gnafId } =
        i;
      const address = `${streetNumber} ${streetName} ${streetType}, ${suburb} ${postcode}`;
      return {
        address,
        gnafId,
        key: nanoid(),
      };
    });
    setData(data);
  };

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
          onFinish={onFinish}
        >
          <Form.Item name="streetNumber" label="Street Number">
            <Input />
          </Form.Item>
          <Form.Item name="streetName" label="Street Name">
            <Input />
          </Form.Item>
          <Form.Item name="streetType" label="Street Type">
            <Input />
          </Form.Item>
          <Form.Item name="suburb" label="Suburb">
            <Input />
          </Form.Item>
          <Form.Item name="postcode" label="Postcode">
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button htmlType="submit">Search</Button>
          </Form.Item>
        </Form>
        <div>{data && <Table columns={columns} dataSource={data} />}</div>
      </Modal>
    </>
  );
};
