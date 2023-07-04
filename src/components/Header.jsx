import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="bg-slate-900 text-white flex justify-between items-center px-12 py-4">
        <h1 className="font-bold text-[22px]">
          <Link to="/">MERN APP</Link>
        </h1>
        <ul className="flex items-center gap-4">
          <Link to="/login">
            <li>Sign In</li>
          </Link>
          <Link to="/register">
            <li>Sign Up</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header
