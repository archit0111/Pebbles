import Nav from './Nav'
import { useState } from 'react';

function Login(){

    function handelSubmit(e){
        
    }

    function handelChange(){
        if(e.target.name="name"){}
    }

    return(
        <>
        <Nav/>
        <main className='h-screen mt-50 p-4'>
            <div className="bg-yellow-200 md:w-[70%] md:justify-self-center p-4 rounded-lg w-8.5/10 h-3/5 place-content-center ">
                <div className='mt-10 bg-amber-50 h-3/4 mb-10 text-center place-content-center'>
                    <form action="/" className='w-[70%] justify-self-center rounded-lg p-4'>
                        <div className='mb-4 flex justify-center'>
                        <label htmlFor="email" className='mr-4'>Email:</label>
                        <input type="email" required onChange={(e)=>(handelChange(e))} placeholder='example@gmail.com' name='email' className='border p-0.5 pl-1 rounded-lg ml-2'/>
                        </div>
                        <div className='mb-4 flex justify-center'>
                        <label htmlFor="password" className='mr-4'>Password:</label>
                        <input type="password" required placeholder=' XXXX' name='password' className='border p-0.5 pl-1 rounded-lg ml-2' />
                        </div>
                        <div className="mb-4 flex justify-center"> 
                            <button className='bg-green-500 p-1.5 rounded-lg hover:bg-green-600 w-1/2 mt-5'>Submit</button>
                        </div>
                        <div className='mt-4 font-extralight text-sm'><a href="/signup">Account not exist?<span className='text-blue-700 hover:text-blue-800 hover:font-bold'>SignIn</span></a></div>
                    </form>
                </div>
            </div>
        </main>
        </>
    )
}

export default Login