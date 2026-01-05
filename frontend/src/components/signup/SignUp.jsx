import { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    
    if (!username || !email || password.length < 8) return;

    try {
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          email,
          password
        })
      });

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleOnSubmit} noValidate>
        <div className="row ">
            <div className="mb-4 col text-center">
                <div className="">
                    <img src="https://res.cloudinary.com/duqw6udje/image/upload/v1767543185/Pocket_Dev/nlpftpkamkedl5qhyagt.jpg" className="rounded-3 object-fit-contain" style={{width:"100px", height:"100px"}}></img>
                </div>
                <label className="form-label">Profile Picture</label>
                <input
                    type="file"
                    className="form-control"
                    name="profileImage"
                />
            </div>
        </div>
        <div className=" row mb-4">
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
                <div class="valid-feedback">
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
                <div class="valid-feedback">
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
      </form>
    </div>
  );
}
