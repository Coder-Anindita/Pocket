import { useState } from "react";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate=useNavigate()
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    
    if (!email || password.length < 8) return;

    try {
      const res = await fetch("https://pocket-vycm.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password
        })
      });
      if(res.ok){
        toast.success("Yay! You are logged in")
        navigate("/dashboard")
      }
      else{
        toast.error("Login failed! Try again")
      }
      
      

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleOnSubmit} noValidate>
        
        <div className=" row mb-4">
            <div className="row  ">
                <h1 className="fs-4">Welcome Back</h1>
                <p style={{fontSize:"13px"}}>Please enter your details to log in</p>
            </div>

            
            <div className="col">
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
        <div className="row mb-4">
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
        <div className="row mt-3">
            <div className="col">
                Don't have an account? <Link to="/signup">SignUp</Link>
            </div>
        </div>
      </form>
    </div>
  );
}
