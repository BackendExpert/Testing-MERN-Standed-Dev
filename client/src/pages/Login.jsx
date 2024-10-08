import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage";

const Login = () => {
    const navigate = useNavigate()
    const [LoginData, SetLoginData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        SetLoginData({ ...LoginData, [e.target.name]: e.target.value });
    };

    const HeadleLogin = async (e) => {
        e.preventDefault()

        try{
            const res = await axios.post(import.meta.env.VITE_APP_API + `/auth/Login/`, LoginData)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Login Success");
                    localStorage.setItem('token', res.data.token); 
                    secureLocalStorage.setItem('Login1', res.data.user.email);      
                    secureLocalStorage.setItem('Login2', res.data.user.role);
                    navigate('/Dashboard');
                }
                else{
                    alert(res.data.Error)
                }
            })
        }
        catch(err){
            console.log(err)
        }

    }
  return (
    <div>
        <div className="md:grid grid-cols-3 gap-4">
            <div className=""></div>
            <div className="md:mx-0 mx-4 py-12 rounded-xl px-8 my-[30%] bg-gray-200">
                <h1 className="text-center uppercase font-bold text-gray-500 text-xl">Login Here</h1>

                <div className="my-4">
                    <form method="post" onSubmit={HeadleLogin} className='pb-4'>
                        <div className="py-4">
                            <input type="email" value={LoginData.email} name="email" className="h-12 w-full rounded pl-2" onChange={handleChange} placeholder='Email Address'/>
                        </div>
                        <div className="py-4">
                            <input type="password" value={LoginData.password} name="password" className="h-12 w-full rounded pl-2" onChange={handleChange} placeholder='Password'/>
                        </div>

                        <button type="submit" className='bg-blue-500 text-white py-2 px-4 rounded duration-500 hover:bg-blue-500'>Login Here</button>
                    </form>
                    <a href="/SignUp" className='text-blue-500 font-semibold'>SignUp</a>
                </div>
            </div>
            <div className=""></div>
        </div>
    </div>
  )
}

export default Login