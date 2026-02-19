import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";
import Nav from "./Nav";

//         UNDER PROCESS

function Dasboard(){
    const [user,setUser] = useState([]);
    const [data,setData]=useState([]);
    const location = useLocation();
    const [name,setName]=useState("");


    const {email} = location.state;

    useEffect(()=>{
        fetch('http://localhost:3000/dashboard')
            .then(response=>response.json())
            .then(data=>setData(data))
            .catch(err=>{console.log("Error Occered in fetching data: "+err)})
            initiate();
    },[])

    function initiate(){
        let user = data.find(user=>user.email === email);
        if(user){
            Object.entries(user).forEach(item=>{
                setName(item.name);
            })
        }
    }

    return(
        <>
        <Nav/>
        <main className="mt-5 place-items-center">
            <div className="bg-yellow-100 w-2/4 h-screen p-2">
            <p> Welcome! {name}</p>    
            <div>{email}</div>
            </div>
        </main>
        </>
    )
}

export default Dasboard