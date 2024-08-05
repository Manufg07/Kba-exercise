import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import "../App.css";

const Logout = () => {
    const navigate = useNavigate()
    const logout = async () =>
        {
            try{
                const res = await fetch('api/logout')
                if(res.ok){
                    toast.success('Logout')
                        navigate('/')
                }
            }catch(error){
                toast.error('something went wrong')
            }
        }
  return (
    <>
    <button onClick={logout} >Logout</button>
    </>
  )
}

export default Logout