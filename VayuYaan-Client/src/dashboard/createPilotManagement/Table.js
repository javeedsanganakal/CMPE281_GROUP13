import React from "react";
import { Space, Table, Tag } from "antd";
import EditIcon from "../../Assets/edit.svg";
import DeleteIcon from "../../Assets/delete.svg";
import EyeIcon from "../../Assets/eye.svg";
const { Column } = Table;

const PilotTable = ({
  data,
  setId,
  setIsVisibleView,
  setIsVisible,
  editFarm,
  deleteFarm,
}) => (
  <Table dataSource={data} style={{ width: "70vw" }}>
    <Column title="Pilot ID" dataIndex="pilotId" key="pilotId" />
    <Column title="Full Name" dataIndex="fullName" key="fullName" />
    <Column title="Email" dataIndex="email" key="email" />
    <Column title="Gender" dataIndex="gender" key="gender" />
    <Column title="Mobile" dataIndex="phoneNumber" key="phoneNumber" />
    <Column title="DOB" dataIndex="dob" key="dob" />
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <img
            src={EyeIcon}
            alt="View"
            onClick={() => {
              setId(record._id);
              setIsVisibleView(true);
            }}
            style={{ cursor: "pointer" }}
          />
          <img
            src={DeleteIcon}
            alt="delete"
            onClick={() => {
              deleteFarm(record._id);
            }}
            style={{ cursor: "pointer" }}
          />
          <img
            src={EditIcon}
            alt="edit"
            onClick={() => {
              editFarm(record._id);
              setIsVisible(true);
            }}
            style={{ cursor: "pointer" }}
          />
        </Space>
      )}
    />
  </Table>
);
export default PilotTable;
