import Nav from './Nav'
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup(){

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [emailValid,setEmailValid]=useState(true);
    const [nameValid,setNameValid]=useState(true);
    const [passwordValid,setPasswordValid]=useState(true);
    const [data, setdata] =useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('http://localhost:3000/signup',{method : "GET"})
        .then(response=>console.log("Data fetched!!" + response))
        .then(data=>setdata(data))
        .catch(err=>(console.log("Error occered in fectching data"+err)));
    },[])

    // regex using or validation

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z\s]+$/;
    const passwordRegex = /^\d{6}$/;

    // handeling Submit req

    function handelSubmit(){
        let valid=validation();
        if(valid){
            fetch('http://localhost:3000/signup',{
                method : "POST",
                headers:{'Content-type':'application/json'},
                body : JSON.stringify({name:name, email:email, password:password})
            })
            .then(responce=>responce.json())
            .then(data=>console.log("Data Added Successfully: "+data))
            .catch(err=>console.log("Error occered in sending data: "+err));
            alert("You registered! Please login...");
            navigate('/login');
        }else{alert("Something went wrong!");}
    }

    function validation(){
        if(nameRegex.test(name)){
            setNameValid(true);
        }else{
            setNameValid(false);
        }
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
        if(nameRegex.test(name)&&emailRegex.test(email)&&passwordRegex.test(password)){
            return true;
        }else{
            return false;
        }
    }

    return(
        <>
        <Nav/>
        <main className='h-screen mt-50 p-4'>
            <div className="bg-yellow-200 md:w-[70%] md:justify-self-center p-4 rounded-lg w-8.5/10 h-3/5 place-content-center ">
                <div className='mt-10 bg-amber-50 h-3/4 mb-10 text-center place-content-center'>
                    <form action="/" className='w-[70%] justify-self-center rounded-lg p-4'>
                        <div className='mb-4 flex justify-center'>
                        <label className='mr-4'>Name:</label>
                        <input type="text" onChange={(e)=>{setName(e.target.value)}} required placeholder='Enter your name' name='name' className={nameValid?`border p-0.5 pl-1 rounded-lg ml-2 sm:w-auto w-4/6`:`border p-0.5 pl-1 rounded-lg ml-2 sm:w-auto w-4/6 border-red-500 bg-red-300`}/>
                        </div>
                        <div className='mb-4 flex justify-center'>
                        <label className='mr-4'>Email:</label>
                        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} required placeholder='example@gmail.com' name='email' className={emailValid?`border p-0.5 pl-1 rounded-lg ml-2 sm:w-auto w-4/6`:`border p-0.5 pl-1 rounded-lg ml-2 sm:w-auto w-4/6 border-red-500 bg-red-300`}/>
                        </div>
                        <div className='mb-4 flex justify-center'>
                        <label className='mr-4'>Password:</label>
                        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} required placeholder='Enter six digit password' name='password' className={passwordValid?`border p-0.5 pl-1 rounded-lg ml-2 sm:w-auto w-4/6`:`border p-0.5 pl-1 rounded-lg ml-2 sm:w-auto w-4/6 border-red-500 bg-red-300`} />
                        </div>
                    </form>
                        <div className="mb-4 flex justify-center"> 
                            <button className='bg-green-500 p-1.5 rounded-lg hover:bg-green-600 w-1/2 mt-5' onClick={handelSubmit}>Submit</button>
                        </div>
                        <div className='mt-4 font-extralight text-sm'><a href="/login">Already have account? <span className='text-blue-700 hover:text-blue-800 hover:font-bold'>SignIn</span></a></div>
                </div>
            </div>
        </main>
        </>
    )
}

export default Signup