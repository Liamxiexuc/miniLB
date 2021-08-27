import { Table, Tag, Space } from 'antd';

export const PropertyTable = () => {

	const columns = [
    {
      title: "Address",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Purchase Date",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Purchase",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Appraisal",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
    {
      title: "Rent(Weekly)",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Loan (LVR)",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Interest Rate",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Loan Term",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "IO Period",
      dataIndex: "address",
      key: "address",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
	];
	

	return (
    <div>
      <Table pagination={false} columns={columns} dataSource={data} />
    </div>
  );
}
