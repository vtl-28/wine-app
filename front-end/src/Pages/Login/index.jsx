import { useState } from 'react'
import LoginForm from "./login_form";

const LoginPage = () => {

    return (
        <div className="w-full h-screen">
            <div className='grid grid-cols-12 grid-rows-6 h-full'>
                <div className='row-start-2 row-span-4 col-start-5 col-span-4 border-2 border-red-300'>
                    <div className='flex flex-col justify-between h-36 border-2 border-yellow-300 p-4'>
                        <h3 className='text-4xl text-center'>Welcome to My Wines</h3>
                        <p className='text-center'>Let's get you sipping and sharing your favourite wine in no time!</p>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </div>
      )
}

export default LoginPage