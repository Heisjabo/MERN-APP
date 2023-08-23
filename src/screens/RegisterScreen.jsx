import { useState } from "react";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer.jsx";
import { useForm } from "react-hook-form";
import { axiosClient } from "../helpers/client.js";

const RegisterScreen = () => {

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);

    try{
      setLoading(true);
      const response = await axiosClient.post("/api/users/", formData);
      setLoading(false);
      alert("Success! user was created");
    } catch(error){
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <h1 className="text-[24px] font-[600] text-slate-900">Sign Up</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <label className="text-slate-900 text-[16px] font-[500]">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="bg-transparent border border-[#b0b3b8]
            rounded-[5px] px-2 py-1 outline-none"
            {...register("name")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-slate-900 text-[16px] font-[500]">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="bg-transparent border border-[#b0b3b8]
            rounded-[5px] px-2 py-1 outline-none"
            {...register("email")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-slate-900 text-[16px] font-[500]">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="bg-transparent border border-[#b0b3b8]
            rounded-[5px] px-2 py-1 outline-none"
            {...register("password")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-slate-900 text-[16px] font-[500]">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="bg-transparent border border-[#b0b3b8]
            rounded-[5px] px-2 py-1 outline-none"
            {...register("confirmPassword")}
          />
        </div>
        <button className="bg-slate-900 flex-shrink-0 rounded-[8px] text-white p-1 mt-5">
         {loading? "Loading..." : "signup"}
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
