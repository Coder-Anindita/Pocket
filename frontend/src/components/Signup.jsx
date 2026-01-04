import { useState,useEffect } from "react"

export default function Signup(){
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleOnSubmit=async(e)=>{
        e.preventDefault()

        await fetch("http://localhost:3000/api/auth/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email:email,username:username,password:password})
        })
        .then(res=>res.json())
        .catch(err=>{console.error(err)})
    }
    return(
        <div className="container">
            <form onSubmit={handleOnSubmit} encType="multipart/form-data">
                <input type="text" required placeholder="name" name="username" value={username}   onChange={(e)=>setUsername(e.target.value)}></input>
                <input type="text" required placeholder="email" name="email" value={email}  onChange={(e)=>setEmail(e.target.value)} ></input>
                <input type="password" required placeholder="password" name="password" value={password}   onChange={(e)=>setPassword(e.target.value)} ></input>
                <input type="file"  placeholder="Upload Profile Picture" name="profileImage"></input>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>

    )
}