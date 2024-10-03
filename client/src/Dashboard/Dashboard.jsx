import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage";
import Nav from './Nav';

const Dashboard = () => {
    const navigate = useNavigate()
    const RoleUser = secureLocalStorage.getItem('Login1')
    const EmailUser = secureLocalStorage.getItem('Login2')
  return (
    <div>
        <Nav />

        Dashboard
    </div>
  )
}

export default Dashboard