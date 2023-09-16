import DataTable from "react-data-table-component";
import "./Users.css";
import axios from "axios";
import { useState } from "react";
import EditUserForm from "./EditUser/EditUser.js";

function Users(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  //open modal
  const openModal = (record) => {
    setIsModalOpen(true);
    setSelectedRecord(record);
  };
  //close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      name: "First name",
      selector: (row) => row.firstName,
      sortable: true,
      growable: true,
    },
    {
      name: "Last name",
      selector: (row) => row.lastName,
      sortable: true,
      growable: true,
    },
    {
      name: "Email address",
      selector: (row) => row.emailAddress,
      sortable: true,
      growable: true,
    },
    {
      name: "Phone number",
      selector: (row) => row.phoneNumber,
      sortable: false,
      growable: true,
    },
    {
      name: "ACTIONS",
      text: "Action",
      sortable: false,
      cell: (record) => {
        const handleEdit = () => {
          openModal(record);
        };

        const handleDelete = async () => {
          try {
            // Send a DELETE request to delete the user by ID
            await axios.delete(`/api/users/${record.id}`);
            // Call the onDeleteUser function to update the state
            props.onDeleteUser(record.id);
          } catch (error) {
            // Handle errors if the DELETE request fails
            console.error(`Error deleting user with ID ${record.id}:`, error);
          }
        };

        return (
          <div>
            <button onClick={handleEdit}>✎</button>
            <button onClick={handleDelete}>✘</button>
          </div>
        );
      },
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: "60px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "50px", // override the cell padding for head cells
        paddingRight: "8px",
        backgroundColor: "rgb(81, 81, 81)",
        color: "white",
      },
    },
    cells: {
      style: {
        paddingLeft: "50px", // override the cell padding for data cells
        paddingRight: "8px",
        backgroundColor: "#282c34",
        color: "white",
      },
    },
    pagination: {
      style: {
        backgroundColor: "rgb(61, 61, 61)",
        color: "white",
        overflow: "hidden",
      },
    },
  };

  return (
    <div className="container">
      <DataTable
        columns={columns}
        data={props.items}
        customStyles={customStyles}
        highlightOnHover
        pagination
      ></DataTable>

      {isModalOpen && (
        <EditUserForm
          onCancel={closeModal}
          editData={selectedRecord}
          onUpdateUser={(editedUserData) => {
            props.onEditUser(editedUserData);
            closeModal();
          }}
        />
      )}
    </div>
  );
}

export default Users;
