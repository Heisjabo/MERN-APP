import { useState } from "react";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer.jsx";

const RegisterScreen = () => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <FormContainer>
      <h1 className="text-[24px] font-[600] text-slate-900">Sign Up</h1>
      <form onSubmit={submitHandler} className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label className="text-slate-900 text-[16px] font-[500]">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-transparent border border-[#b0b3b8]
            rounded-[5px] px-2 py-1 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-slate-900 text-[16px] font-[500]">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border border-[#b0b3b8]
            rounded-[5px] px-2 py-1 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-slate-900 text-[16px] font-[500]">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent border border-[#b0b3b8]
            rounded-[5px] px-2 py-1 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-slate-900 text-[16px] font-[500]">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-transparent border border-[#b0b3b8]
            rounded-[5px] px-2 py-1 outline-none"
          />
        </div>
        <button className="bg-slate-900 flex-shrink-0 rounded-[8px] text-white p-1 mt-5">
          Sign Up
        </button>
        <p className="text-slate-900 font-[400]">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-800 underline">
            Login
          </Link>
        </p>
      </form>
    </FormContainer>
  );
};

export default RegisterScreen;
