import React from 'react';
import Header from './component/header';
import AllUsers from './component/allUsers';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import UserDetils from './component/userDetils';

export default function App() {

  const [detail, setDetails] = React.useState({})
  function showUserDetails(details) {
    setDetails(details)
  }

  const [modalAccess , setModalAccess] = React.useState(false)
  function accessModal(e) {
    setModalAccess(e)
  }

  function disabelModalAccess(e) {
    setModalAccess(e)
  }

  return (
    <Router>
      <Header enableModal={accessModal} />
      <Routes>
        <Route exact path="/" element={<AllUsers modal={modalAccess} closeModal={disabelModalAccess} userDetail={showUserDetails} />} />
        <Route exact path={`/user-details:${detail.id}`} element={<UserDetils {...detail} />} />
      </Routes>
    </Router>
  )
}
