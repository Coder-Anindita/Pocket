import { useState } from "react";
import {Link} from "react-router-dom"
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    
    if (!username || !email || password.length < 8) return;

    try {
      const formData=new FormData()
      formData.append("username",username)
      formData.append("email",email)
      formData.append("password",password)
      
      if(profileImage){
        formData.append("profileImage",profileImage)
      }
      
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        
        credentials: "include",
        body: formData
      });
      if(res.ok){
        toast.success("User Created!")
        toast.info("Now login to get started")
        Navigate("/login")
        
      }
      else{
        toast.error("User already exists")
      }

      const data = await res.json();
      
    } catch (err) {
      toast.error("OOPS! Try again :)")
      console.error(err);
    }
  };

  return (
    <div className="container  px-3 " >
      <form onSubmit={handleOnSubmit} noValidate className="mt-5 mx-5 ">
        <div className="row  ">
          <h1 className="fs-4">Create an Account</h1>
          <p style={{fontSize:"13px"}}>Join us today by entering your details below.</p>
        </div>
        <div className="row ">
            <div className="mb-3 col text-center">
                <div className="">
                    <img src="https://res.cloudinary.com/duqw6udje/image/upload/v1767543185/Pocket_Dev/nlpftpkamkedl5qhyagt.jpg" className="rounded-3 object-fit-contain" style={{width:"100px", height:"100px"}}></img>
                </div>
                <label className="form-label">Profile Picture</label>
                <input
                    type="file"
                    className="form-control"
                    name="profileImage"
                    accept="image/*"
                    onChange={(e) => setProfileImage(e.target.files[0])}
                />
            </div>
        </div>
        <div className=" row mb-3">
            <div className="col-lg-6">
                <label className="form-label">Username</label>
                <input
                type="text"
                className={`form-control ${
              submitted && !username ? "is-invalid" : ""
                }`}
                placeholder="John"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <div className="invalid-feedback">
                    Username is required
                </div>
                <div className="valid-feedback">
                    Username looks good!
                </div>

            </div>
            <div className="col-lg-6">
                <label className="form-label">Email Address</label>
                <input
                    type="email"
                    className={`form-control ${
                    submitted && !email ? "is-invalid" : ""
                    }`}
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="invalid-feedback">
                    Valid email is required
                </div>
                <div className="valid-feedback">
                    Email looks good!
                </div>


            </div>
          
            
        
          
        </div>

        {/* Password */}
        <div className="row mb-3">
          <div className="col">
            <label className="form-label">Password</label>
            <input
            type="password"
            className={`form-control ${
              submitted && password.length < 8 ? "is-invalid" : ""
            }`}
            placeholder="Min 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <div className="invalid-feedback">
                Password must be at least 8 characters
            </div>
            <div className="valid-feedback">
                Password looks good
            </div>
          </div>
        </div>

        
        

        <div className="row mx-1">
            <button className="btn btn-primary text-center" type="submit" >
                
                    Submit
                
            </button>
        </div>
        <div className="row mt-3 ">
            <div className="col ">
                Already have an account? <Link to="/login">Login</Link>
            </div>
        </div>
      </form>
    </div>
  );
}
