import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import FormContainer from "../components/FormContainer.jsx"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { loginSchema } from "../validations/loginValidation.jsx"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"

const LOGIN_URL = 'https://blogapi-se2j.onrender.com/api/v1/users/login'

const LoginScreen = () => {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: {errors} } = useForm({
      resolver: yupResolver(loginSchema)
    });

    const notify = () => toast('user logged in successfully')

    const onSubmit = async (data) => {
      try{
        const response = await axios.post(LOGIN_URL, data)
        const token = await response.data.token;
        localStorage.setItem('token', token);
        notify();
        navigate('/');
      } catch(err){
        console.log(err)
      }
    }
    
    return (
      <FormContainer>
        <h1 className="text-[24px] font-[600] text-slate-900">Sign In</h1>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <label className="text-slate-900 text-[16px] font-[500]">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              {...register('email')}
              className="bg-transparent border border-[#b0b3b8]
            rounded-[5px] px-2 py-1 outline-none"
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-slate-900 text-[16px] font-[500]">
              Password
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              {...register('password')}
              className="bg-transparent border border-[#b0b3b8]
            rounded-[5px] px-2 py-1 outline-none"
            />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
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