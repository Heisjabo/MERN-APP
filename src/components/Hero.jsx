import { Link } from "react-router-dom"

const Hero = () => {

  return (
    <div className="flex items-center flex-col w-[60%] mx-auto py-8 px-4 gap-4 mt-12 justify-center rounded-[8px] border border-[#9a9a9a] bg-transparent">
      <h1 className="font-bold text-[24px]">MERN Authentication</h1>
      <p className="text-center">
        This is a boilerplate for MERN authentication that stores a JWT in Local storage. it also uses axios and Tailwind css for the
        styles
      </p>
      <div className="flex items-center gap-4">
        <Link to="/login">
          <button className="bg-slate-900 text-white font-bold px-4 py-1 rounded-[8px]">
            Sign In
          </button>
        </Link>
        <Link to="/register">
          <button className="text-slate-900 border border-slate-900 font-bold px-4 py-1 rounded-[8px]">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero
