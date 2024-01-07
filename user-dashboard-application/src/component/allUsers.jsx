import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ReadMoreRoundedIcon from '@mui/icons-material/ReadMoreRounded';
import { Link } from 'react-router-dom'
import TextField from "@mui/material/TextField";
import './header.css'

import customHook from './customHook';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function allUsers(props) {
  const { users, addUser } = customHook();

  function handleUserDetails(user) {
    props.userDetail(user)
  }

  // Add New User :---------------------------------------------------------------------

  const [newUser, setNewUser] = React.useState({
    id: 0,
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    birthDate: "",
    address: "",
    website: ""
  });

  const closeNewUserModal = () => {
    props.closeModal(false);
  }

  const handleInputChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const addNewUser = () => {
    const newUserId = users.length + 1;
    const newUserWithId = {
      ...newUser,
      id: newUserId,
    };  
    props.closeModal(false);
    addUser(newUserWithId);
    setNewUser({
      id: 0,
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      birthDate: "",
      address: "",
      website: "",
    });  
  };
  

  return (
    <>
      <TableContainer component={Paper} style={{ padding: "20px", maxHeight: "500px", paddingTop: "0px" }}>
        <Table stickyHeader sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead >
            <TableRow>
              <StyledTableCell align="center">Firsr Name</StyledTableCell>
              <StyledTableCell align="center">Last Name</StyledTableCell>
              <StyledTableCell align="center">Phone No.</StyledTableCell>
              <StyledTableCell align="center">Email id</StyledTableCell>
              <StyledTableCell align="center">Birth Date</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">More Details</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {users.map((row, i, arr) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align="center" component="th" scope="row">{row.firstname}</StyledTableCell>
                <StyledTableCell align="center">{row.lastname}</StyledTableCell>
                <StyledTableCell align="center">{row.phone}</StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.birthDate}</StyledTableCell>
                <StyledTableCell align="center">{row.address.street},{row.address.suite},{row.address.city}</StyledTableCell>
                <StyledTableCell align="center" onClick={() => handleUserDetails(row)}>
                  <Link className="nav-link" to={`/user-details:${row.id}`}><ReadMoreRoundedIcon /></Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {props.modal && (
        <div className='new-user-modal'>
          <h3 className='add-new-user-header'>Add New User</h3>
          <div className='add-new-user-body'>
            <TextField className='add-new-user-input-field' label="First name" name="firstname" onChange={handleInputChange} />
            <TextField className='add-new-user-input-field' label="Last name" name="lastname" onChange={handleInputChange} />
            <TextField className='add-new-user-input-field' label="Phone no" name="phone" onChange={handleInputChange} />
            <TextField className='add-new-user-input-field' label="Email" name="email" onChange={handleInputChange} />
            <TextField className='add-new-user-input-field' type='date' name="birthDate" onChange={handleInputChange} />
            <TextField className='add-new-user-input-field' label="Address" name="address" onChange={handleInputChange} />
            <TextField className='add-new-user-input-field' label="Website" name="website" onChange={handleInputChange} />
          </div>
          <div className='add-new-user-footer'>
            <button className='add-new-user-btn-close' onClick={closeNewUserModal}>Cancel</button>
            <button className='add-new-user-btn-add' onClick={addNewUser}>Add User</button>
          </div>

        </div>
      )}
      
    </>
  );

}
