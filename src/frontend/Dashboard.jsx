import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";
import Nav from "./Nav";


function Dasboard(){
    const [user,setUser] = useState([]);
    const [data,setData]=useState([]);
    const location = useLocation();
    const [name,setName]=useState("");
    const [pebbels, setPebels]=useState(["this is a pebbels!"]);


    const {email} = location.state;

    useEffect(()=>{
        fetch('http://localhost:3000/dashboard')
            .then(response=>response.json())
            .then(data=>{
                setData(data);
                initiateUser(data);
            })
            .catch(err=>{console.log("Error Occered in fetching data: "+err)})
    },[])

    function initiateUser(data){
        let user = data.find(user=>user.email === email);
        alert(user);
        if(user){
            setName(user.name);
        }
    }

    return(
        <>
        <Nav/>
        <main className="mt-10 place-items-center">
            <div className="w-9/10 py-10"><p className="font-extrabold text-3xl md:text-6xl"> <span className="text-yellow-900">Welcome!</span> <span className="text-yellow-600">{name}</span></p></div> 

            <div className="w-3/4 mt-10 pb-8 rounded-4xl shadow-2xl">
            <div className="h-14 text-center bg-yellow-200 place-content-center rounded-t-3xl mb-10"><p className="text-3xl text-yellow-600 font-extrabold">Your Pebbels</p></div>
            {pebbels.length === 0?<div className="text-center font-medium pb-10"> Nothing to show!</div>:<div className="h-fit flex rounded-xl justify-between bg-yellow-100 p-1 px-2 hover:shadow-xl">
                <div className="flex">
                    <div className="pr-2">png</div>
                    <div>{email}</div>
                </div>
                <div className="flex"><input type="checkbox" value="" /></div>
            </div>}
            </div>
            <div className="mt-20">
                <button className="bg-green-400 hover:bg-green-500 hover:shadow-xl text-white p-4 rounded-2xl">Add New Pebbel</button>
            </div>
        </main>
        </>
    )
}

export default Dasboard