import DataTable from 'react-data-table-component';
import "./User.css";

function User (props) {

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
            center: true,
        },
        {
            name: 'First name',
            selector: row => row.firstName,
            sortable: true,
            grow: 2,
        },
        {
            name: 'Last name',
            selector: row => row.lastName,
            sortable: true,
            grow: 3,
        },
        {
            name: 'Email address',
            selector: row => row.emailAddress,
            sortable: true,
            grow: 4,
        },
        {
            name: 'Phone number',
            selector: row => row.phoneNumber,
            sortable: false,
            grow: 2.5,
        },
    ];
    
    const customStyles = {
        rows: {
            style: {
                minHeight: '60px', // override the row height
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
                backgroundColor: 'rgb(81, 81, 81)',
                color: 'white',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
                backgroundColor: '#282c34',
                color: 'white',
            },
        },
        pagination: {
            style: {
                backgroundColor: 'rgb(61, 61, 61)',
                color: 'white',
                overflow: 'hidden',
            }
        }
    };

    return(
        <div className='container'>
            <DataTable 
                columns={columns}
                data={props.items}
                customStyles={customStyles}
                highlightOnHover
                pagination
                >
            </DataTable>
        </div>
    );
}

export default User;