import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem("UserData"))
    console.log(user);
    const LogoutHandler = ()=>{
        localStorage.removeItem("UserData")
        navigate("/")
    }
    const navigate = useNavigate()
  return (
    <>
    <h1>{user?.name}</h1>
    {/* <h1>{user?.token}</h1> */}
    <button onClick={LogoutHandler} className='rounded hover:bg-yellow-300 bg-cus-btn px-3 py-1 mt-3 text-gray-700'>Log Out</button>
    </>
  )
}

export default Dashboard