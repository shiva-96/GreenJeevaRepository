import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import { Link } from 'react-router-dom'
import TextField from "@mui/material/TextField";

import customHook from './customHook';



export default function header(props) {

  const [modal, setModal] = React.useState(false);
  const { users, addUser } = customHook();

 
  const addNewUserModal = () => {
    // setModal(!modal);
    props.enableModal(true)
  }

  // const [newUser, setNewUser] = React.useState({
  //   id: 0,
  //   firstname: "",
  //   lastname: "",
  //   phone: "",
  //   email: "",
  //   birthDate: "",
  //   address: "",
  //   website: ""
  // });

  // const handleInputChange = (e) => {
  //   setNewUser({
  //     ...newUser,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const addNewUser = () => {
  //   const newUserId = users.length + 1;
  //   const newUserWithId = {
  //     ...newUser,
  //     id: newUserId,
  //   };
  //   setModal(!modal);

  //   console.log("New user data :-->", newUserWithId);
  //   addUser(newUserWithId);
  //   console.log("custom headder",users);
  
  //   setNewUser({
  //     id: 0,
  //     firstname: "",
  //     lastname: "",
  //     phone: "",
  //     email: "",
  //     birthDate: "",
  //     address: "",
  //     website: "",
  //   });
  

  //   console.log("Allusers with new user added:-- ", users, newUserWithId);
  // };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link className="nav-link active" to="/">Home</Link>
            </Typography>
            <GroupAddRoundedIcon onClick={addNewUserModal} stylnewUsere={{ cursor: "pointer" }} />
          </Toolbar>
        </AppBar>
      </Box>

      {/* {modal && (
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
            <button className='add-new-user-btn-close' onClick={addNewUserModal}>Cancel</button>
            <button className='add-new-user-btn-add' onClick={addNewUser}>Add User</button>
          </div>

        </div>
      )} */}
    </>
  );
}
