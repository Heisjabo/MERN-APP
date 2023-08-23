import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import FormContainer from "../components/FormContainer.jsx"
import { toast } from "react-toastify"

const LoginScreen = () => {

    const navigate = useNavigate();

    return (
      <FormContainer>
        <h1 className="text-[24px] font-[600] text-slate-900">Sign In</h1>
        <form className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label className="text-slate-900 text-[16px] font-[500]">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              className="bg-transparent border border-[#b0b3b8]
            rounded-[5px] px-2 py-1 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-slate-900 text-[16px] font-[500]">
              Password
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              value={password}
              className="bg-transparent border border-[#b0b3b8]
            rounded-[5px] px-2 py-1 outline-none"
            />
          </div>
          <button className="bg-slate-900 flex-shrink-0 rounded-[8px] text-white p-1 mt-5">
            Sign In
          </button>
          <p className="text-slate-900 font-[400]">
            New customer?{" "}
            <Link to="/register" className="text-blue-800 underline">
              Register
            </Link>
          </p>
        </form>
      </FormContainer>
    );
}

export default LoginScreen