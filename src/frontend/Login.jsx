import Nav from './Nav'

function Login(){

    function handelSubmit(){
        console.log("jai ho")
    }

    return(
        <>
        <Nav/>
        <main className='flex justify-center mt-20 h-screen items-center'>
            <div className='p-5 pt-10 md:w-[90%] w-[60%] rounded-lg place-items-center bg-yellow-100'>
            <from className='p-20'>
                {/* <label htmlFor="name" className=' flex text-xl md:ml-[30%]'>Name:</label>
                <input type="text" name='name' placeholder='Enter your name' required className='rounded border p-0.5 ml-5 mb-6 block justify-self-center' /> */}
                <label htmlFor="email" className='sm:ml-5 flex md:ml-[30%] text-xl '>Email:</label>
                <input type="email" name='email' placeholder='example@gmil.com' required className='rounded border p-0.5 ml-5 mb-6 justify-self-center block' />
                <label htmlFor="password" className='sm:ml-5 flex text-xl md:ml-[30%]'>Password:</label>
                <input type="password" name="password" placeholder='Enter your password' required className='justify-self-center rounded border p-0.5 ml-5 mb-10 block' />
                <button className='justify-self-center flex bg-green-600 hover:bg-green-500 p-1 px-2 rounded-lg mt-20 text-white' onClick={handelSubmit}>Login</button>
            </from>
            <div><a href='/' className='font-extralight'>Account not exist? <span className='text-blue-800 hover:font-bold'>Create one</span></a>
            </div>
            </div>
        </main>
        </>
    )
}

export default Login