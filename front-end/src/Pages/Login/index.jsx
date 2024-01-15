import { useState } from 'react'
import LoginForm from "./login_form";

const LoginPage = () => {

    return (
        <div className="w-full h-screen bg-wine_bg">
            <div className='grid grid-cols-12 grid-rows-6 h-full py-4'>
                <div className='bg-cover bg-center h-full col-start-2
                 col-span-10 row-span-6 py-32 px-44' style={{ backgroundImage: "url('/src/assets/wine_pic_2.jpg')" }}>
                    <div className='px-28 row-start-2 row-span-4 col-start-5 col-span-4 border-2 border-red-300 bg-wine_bg/75 h-80'>
                        <div className='flex flex-col justify-between h-28 p-4'>
                            <h3 className='text-4xl text-center text-white tracking-widest'>Welcome to My Wines</h3>
                            <p className='text-center text-white font-serif'>Let's get you sipping and sharing your favourite wine in no time!</p>
                        </div>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
