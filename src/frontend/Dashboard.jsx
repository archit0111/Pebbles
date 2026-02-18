import { useState } from "react"
import Nav from "./Nav";


function Dasboard(){
    const [user,setUser] = useState([]);

    return(
        <>
        <Nav/>
        <main className="mt-5">
            <div>
                this is dashboard!!
            </div>
        </main>
        </>
    )
}

export default Dasboard