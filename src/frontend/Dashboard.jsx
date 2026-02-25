import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";
import Modal from './Modal';
import Nav from "./Nav";
import {Trash2} from 'lucide-react'


function Dasboard(){
    const [user,setUser] = useState([]);
    const [data,setData]=useState([]);
    const location = useLocation();
    const [name,setName]=useState("");
    const [pebbels, setPebbels]=useState([]);
    const [showModal,setShowModal]=useState(false);
    const [newPebbel,setNewPebbel]=useState([]);


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
        if(user){
            setName(user.name);
        }
    }

    function handelClose(){
        setShowModal(prev=>!prev);
        alert(showModal + pebbels);
    }

    function handelAddPebbel(){
            setUser(prev=>{
                let existingPebbels = Array.isArray(prev.pebbels)?prev.pebbels:[];
                setPebbels([...existingPebbels,newPebbel]);
                return{
                    ...prev,pebbels:[...existingPebbels,newPebbel]
                }
            });
            handelClose();
            setPebbels(user.pebbels);
    }

    function handelDelete(i){
        let updatedPebbels=pebbels.filter((_,index)=>(i !=index));
        setPebbels(updatedPebbels);
    }

    useEffect(()=>{
        fetch('http://localhost:3000/dashboard',{
            method : 'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({email:email,pebbels:pebbels})
        })
        .then(response=>response.json())
        .then(data=>console.log("Data: "+data))
        .catch(err=>console.log("Error occered in updating Pebbels: "+err))
    },[pebbels]);

    
    return(
        <>
        <Nav/>
        {showModal?<Modal handelClose={handelClose}>
            <div className="bg-yellow-50 p-5 border-2 border-yellow-200 rounded-2xl shadow-2xl text-center">
                <div className="h-15 place-content-center place-self-center font-extrabold text-yellow-900 md:text-3xl text-2xl">Add new pebbel</div>
                <div className="mt-4">
                    <textarea name="newPebbel" className="border rounded-sm border-yellow-700 bg-white my-4" rows={2} cols={40} placeholder=" Enter Your New Pebbels..." onChange={(e)=>setNewPebbel(e.target.value)}></textarea>
                </div>
                    <button className=" p-2 bg-green-400 hover:bg-green-500 hover:shadow-lg px-15 rounded-4xl m-2 mb-5" onClick={handelAddPebbel}>ADD</button>
            </div>
        </Modal>:null}
        <main className="mt-10 place-items-center">
            <div className="w-9/10 py-10"><p className="font-extrabold text-3xl md:text-6xl"> <span className="text-yellow-900">Welcome!</span> <span className="text-yellow-600 transition transform hover:transla-y-4">{name}</span></p></div> 

            <div className="w-3/4 mt-10 pb-8 rounded-4xl shadow-2xl">
            <div className="h-14 text-center bg-yellow-200 place-content-center rounded-t-3xl mb-10"><p className="text-3xl text-yellow-600 font-extrabold">Your Pebbels</p></div>
            {pebbels.length === 0?<div className="text-center font-medium pb-10"> Nothing to show!</div>:
                pebbels.map((item,index)=>(
                    <div key={index} className="h-fit rounded-xl justify-between bg-yellow-100 p-1 px-2 hover:shadow-xl mb-4">
                    <div className="flex justify-between">
                    <div className="flex">
                        <div className="pr-2">{index+1}.</div>
                        <div>{item}</div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex"><input type="checkbox"/></div>
                        <Trash2 className="hover:text-red-600 pr-1" onClick={()=>(handelDelete(index))} size={20}></Trash2>
                    </div>
                    </div>
                    </div>
                ))}
            </div>
            <div className="mt-20">
                <button className="bg-green-400 cursor-pointer hover:bg-green-500 hover:shadow-xl text-white p-4 rounded-2xl" onClick={handelClose}>Add New Pebbel</button>
            </div>
        </main>
        </>
    )
}

export default Dasboard