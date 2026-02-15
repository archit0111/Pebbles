import Nav from './Nav'

function Landing() {

  return (
    <>
    <Nav/>
    <main className='p-5'>
      <p className='text-5xl font-extralight mt-10 lg:text-9xl'>Hello Dear,</p>
    <section className='place-items-center'>
      <div className='bg-yellow-50 h-60 w-80 lg:h-130 lg:w-150 flex items-center justify-center text-center border border-yellow-950 rounded-sm mt-20'>
        <p className='font-bold text-4xl lg:text-6xl'>"A weightless way to manage your heavy lifting."</p>
        </div>
      <div className='bg-yellow-50 h-60 w-80 lg:h-130 lg:w-150 flex items-center justify-center text-center border border-yellow-950 rounded-lg mt-20'>
        <p className='font-bold text-4xl'>"Small Steps, big impact"</p>
        </div>
    </section>
    <section className='my-15 text-center'>
      <button className='font-extrabold text-2xl bg-green-500 text-white p-1 w-40 text-center cursor-pointer'>Let's go!</button>
    </section>
    </main>
    <footer className='bg-yellow-200 mt-10 mb-0 h-full p-4 place-items-center'>
    <form action="post" className='mt-5'> 
      <label htmlFor="name" className='font-extralight'>Name:</label>
      <input type ="text" name='name' placeholder='Enter Your name...' className='p-1 rounded-lg mb-2 border bg-white block ' />
      <label htmlFor="email" className='font-extralight place-self-start'>Email:</label>
      <input type ="email" name='email' placeholder='Enter Your email...' className='p-1 border rounded-lg mb-4 bg-white block' />
      <button className='w-35 p-4 mt-8 h-5 flex justify-center place-self-center items-center bg-amber-100  hover:bg-yellow-500 rounded-lg'>Submit</button>
    </form>
    <div className='mt-10'>
      <p>All Rights Reserved &copy; Pebbles</p>
    </div>
    </footer>
    </>
  )
}

export default Landing