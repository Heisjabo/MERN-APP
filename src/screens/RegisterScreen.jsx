import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer.jsx";
import { userSchema } from "../validations/userValidation.jsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { toast } from "react-toastify";

const REGISTER_URL = "https://blogapi-se2j.onrender.com/api/v1/users"

const RegisterScreen = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(userSchema)
  });

  const notify = () => toast('user was registered successfully')

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(REGISTER_URL, data);
      setLoading(false);
      notify();
      navigate('/');
    } catch(err){
      setLoading(false)
      console.log(err);
    }
  }

  return (
    <FormContainer>
      <h1 className="text-[24px] font-[600] text-slate-900">Sign Up</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <label className="text-slate-900 text-[16px] font-[500]">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            {...register('username')}
            className={`bg-transparent rounded-[5px] px-2 py-1 outline-none ${ errors.username ? 'border border-red-500' : 'border border-[#b0b3b8]' }`}
          />
          {errors.username && <span className="text-red-500">{errors.username.message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-slate-900 text-[16px] font-[500]">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            {...register('email')}
            className={`bg-transparent rounded-[5px] px-2 py-1 outline-none ${ errors.email ? 'border border-red-500' : 'border border-[#b0b3b8]' }`}
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-slate-900 text-[16px] font-[500]">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            {...register('password')}
            className={`bg-transparent rounded-[5px] px-2 py-1 outline-none ${ errors.password ? 'border border-red-500' : 'border border-[#b0b3b8]' }`}
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-slate-900 text-[16px] font-[500]">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            {...register('confirmPassword')}
            className={`bg-transparent rounded-[5px] px-2 py-1 outline-none ${ errors.confirmPassword ? 'border border-red-500' : 'border border-[#b0b3b8]' }`}
          />
          {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
        </div>
        <button className="bg-slate-900 flex-shrink-0 rounded-[8px] text-white p-1 mt-5">
         {loading ? 'loading...' : 'Sign Up'}
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
