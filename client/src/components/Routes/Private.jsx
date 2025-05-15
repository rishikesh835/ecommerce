import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import Spinner from "../Spinner";
import axios from "axios";
export default function Private({ children }) {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();
  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("/api/v1/auth/user-auth");
      console.log(res + "1");
      if (res.data.ok) {
        setOk(true);
        console.log(res + "2");
      } else {
        setOk(false);
      }
    };
    if (auth?.token) {
      // console.log(auth?.token + "0");
      authCheck();
    }
  }, [auth?.token]);
  console.log(ok + "3");
  return ok ? <Outlet /> : <Spinner />;
}
