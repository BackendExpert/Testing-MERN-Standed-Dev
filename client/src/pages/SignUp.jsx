import React, { useState } from 'react'

const SignUp = () => {
    const [SignUpData, SetSignUpData] = useState({
        username: '',
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        SetSignUpData({ ...SignUpData, [e.target.name]: e.target.value });
    };


    const headleSignUp = (e) => {
        e.preventDefault()

        console.log(SignUpData)


    }
  return (
    <div>
        <div className="md:grid grid-cols-3 gap-4">
            <div className=""></div>
            <div className="md:mx-0 mx-4 py-12 rounded-xl px-8 my-[30%] bg-gray-200">
                <h1 className="text-center uppercase font-bold text-gray-500 text-xl">SignUp Here</h1>

                <div className="my-4">
                    <form method="post" onSubmit={headleSignUp} className='pb-4'>
                        <div className="py-4">
                            <input type="text" value={SignUpData.username} name="username" className="h-12 w-full rounded pl-2" onChange={handleChange} placeholder='Email Address'/>
                        </div>
                        <div className="py-4">
                            <input type="email" value={SignUpData.email} name="email" className="h-12 w-full rounded pl-2" onChange={handleChange} placeholder='Email Address'/>
                        </div>
                        <div className="py-4">
                            <input type="password" value={SignUpData.password} name="password" className="h-12 w-full rounded pl-2" onChange={handleChange} placeholder='Password'/>
                        </div>

                        <button type="submit" className='bg-blue-500 text-white py-2 px-4 rounded duration-500 hover:bg-blue-500'>SignUp Here</button>
                    </form>

                    <a href="/" className='text-blue-500 font-semibold'>SignIn</a>
                </div>
            </div>
            <div className=""></div>
        </div>
    </div>
  )
}

export default SignUp