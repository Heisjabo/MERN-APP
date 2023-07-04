import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import FormContainer from "../components/FormContainer.jsx"
import { useDispatch, useSelector } from "react-redux"
import { useLoginMutation } from "../slices/usersApiSlice.js"
import { setCredentials } from "../slices/authSlice.js"
import { toast } from "react-toastify"

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ login, { isLoading }] = useLoginMutation();

    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
      if(userInfo){
        navigate("/");
      }
    }, [navigate, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        try{
          const res = await login({email, password}).unwrap();
          dispatch(setCredentials({...res}));
          navigate("/");
        } catch(err){
          toast.error("Failed to login");
        }
    }

    return (
      <FormContainer>
        <h1 className="text-[24px] font-[600] text-slate-900">Sign In</h1>
        <form onSubmit={submitHandler} className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label className="text-slate-900 text-[16px] font-[500]">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange = {(e) => setEmail(e.target.value)}
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
              onChange = {(e) => setPassword(e.target.value)}
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