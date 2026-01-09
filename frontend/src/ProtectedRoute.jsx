import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProtectedRoute({children}){
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const checkAuth=async()=>{
            try{
                const res = await fetch("http://localhost:3000/api/me", {
                    credentials: "include",
                });

                if(res.ok){
                    setIsAuth(true)
                }
                else{
                    setIsAuth(false)
                }

            }
            catch(err){
                setIsAuth(false)

            }
            finally{
                setLoading(false)
            }
        }
        checkAuth();
    },[])
        if (loading) {
            return <p className="text-center mt-5">Checking authentication...</p>;
        }
      if (!isAuth) {
        return <Navigate to="/login" replace />;
    }

    return children

}