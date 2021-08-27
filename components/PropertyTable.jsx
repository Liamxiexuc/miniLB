import { Table, Tag, Space } from "antd";

export const PropertyTable = ({ properties, setProperties }) => {
  const columns = [
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Purchase Date",
      dataIndex: "purchaseDate",
      key: "purchaseDate",
    },
    {
      title: "Purchase Price",
      dataIndex: "purchasePrice",
      key: "purchasePrice",
    },
    {
      title: "Appraisal Value",
      key: "appraisedValue",
      dataIndex: "appraisedValue",
    },
    {
      title: "Appraisal Rent",
      dataIndex: "appraisedRent",
      key: "appraisedRent",
    },
    {
      title: "Loan (LVR)",
      dataIndex: "loanLVR",
      key: "loanLVR",
    },
    {
      title: "Interest Rate",
      dataIndex: "loanRate",
      key: "loanRate",
    },
    {
      title: "Loan Term",
      dataIndex: "loanTerm",
      key: "loanTerm",
    },
    {
      title: "IO Period",
      dataIndex: "loanIO",
      key: "loanIO",
    },
  ];

  return (
    <div>
      <Table
        pagination={false}
        columns={columns}
        dataSource={properties}
        rowKey="gnafId"
      />
    </div>
  );
};
