import Nav from './Nav'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function Login(){
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[emailValid,setEmailValid]=useState(true);
    const[data,setData]=useState([]);
    const[passwordValid,setPasswordValid]=useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('http://localhost:3000/login')
            .then(response=>response.json())
            .then(data=>setData(data))
            .catch(err=>{console.log("Error Occered in fetching data: "+err)})
    },[])

    //regex for validation

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^\d{6}$/;

    function validation(){
        if(emailRegex.test(email)){
            setEmailValid(true);
        }else{
            setEmailValid(false);
        }
        if(passwordRegex.test(password)){
            setPasswordValid(true);
        }else{
            setPasswordValid(false);
        }
    }

    function handelSubmit(){
        validation();
        let userExist = verify();
        if(userExist){
            navigate('/dashboard',{state:{email:email}});
        }else{
            alert("Invalid Cridentials!! Please try agian..");
        }
    }

    function verify(){
        let user = data.find(user=>user.email===email&&Number(user.password)===Number(password));
        if(user != undefined){
             alert(`Wellcome! ${user.name}`);
             return true;
        }else{return false;}
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
                        <input type="email" required onChange={(e)=>(setEmail(e.target.value))} placeholder='example@gmail.com' name='email' className={emailValid?`border p-0.5 pl-1 rounded-lg ml-2 sm:w-auto w-4/6`:`border p-0.5 pl-1 rounded-lg ml-2 sm:w-auto w-4/6 border-red-500 bg-red-300`}/>
                        </div>
                        <div className='mb-4 flex justify-center'>
                        <label htmlFor="password" className='mr-4'>Password:</label>
                        <input type="password" required onChange={(e)=>(setPassword(e.target.value))} placeholder=' XXXX' name='password' className={passwordValid?`border p-0.5 pl-1 rounded-lg ml-2 sm:w-auto w-4/6`:`border p-0.5 pl-1 rounded-lg ml-2 sm:w-auto w-4/6 border-red-500 bg-red-300`} />
                        </div>
                    </form>
                        <div className="mb-4 flex justify-center"> 
                            <button className='bg-green-500 p-1.5 rounded-lg hover:bg-green-600 w-1/2 mt-5' onClick={handelSubmit}>Login</button>
                        </div>
                        <div className='mt-4 font-extralight text-sm'><a href="/signup">Account not exist?<span className='text-blue-700 hover:text-blue-800 hover:font-bold'>SignIn</span></a></div>
                </div>
            </div>
        </main>
        </>
    )
}

export default Login