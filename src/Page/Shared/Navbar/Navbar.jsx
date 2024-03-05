import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/lgo.png";
import useAuth from "../../../hooks/useAuth";
const Navbar = () => {
 const {user, logOut} = useAuth();

 const handleLogOut = () => {
  logOut()
  .then()
  .catch()
 }
  const links = (
    <>
      <li className="text-slate-900 text-lg font-bold">
        <NavLink
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "white" : "",
              color: isActive ? "#c84fcb" : "",
            };
          }}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="text-slate-900 text-lg font-bold">
        <NavLink
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "white" : "",
              color: isActive ? "#c84fcb" : "",
            };
          }}
          to="/addJobs"
        >
          Add Job
        </NavLink>
      </li>
      <li className="text-slate-900 text-lg font-bold">
        <NavLink
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "white" : "",
              color: isActive ? "#c84fcb" : "",
            };
          }}
          to="/myPosted"
        >
          My Posted Jobs
        </NavLink>
      </li>
 
      <li className="text-slate-900 text-lg font-bold">
        <NavLink
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "white" : "",
              color: isActive ? "#c84fcb" : "",
            };
          }}
          to="/myBids"
        >
          My Bids
        </NavLink>
      </li>
      <li className="text-slate-900 text-lg font-bold">
        <NavLink
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "white" : "",
              color: isActive ? "#c84fcb" : "",
            };
          }}
          to="/bidRequests"
        >
          Bid Requests
        </NavLink>
      </li>
      <li className="text-slate-900 text-lg font-bold">
        <NavLink
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "white" : "",
              color: isActive ? "#c84fcb" : "",
            };
          }}
          to="/helpCenter"
        >
         Help Center
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <div className="flex items-center gap-3 mr-3 lg:hidden">
                <img
                  className="w-12 h-12 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
                <div>
                  <h1 className="">{user?.displayName}</h1>
                </div>
              </div>
              {links}
            </ul>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <img className="w-24 " src={logo} alt="" />
            <h4 className="font-bold">Luxe Market Pro</h4>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className=" items-center gap-3 mr-3 hidden lg:flex">
              <img
                className="w-12 h-12 rounded-full"
                src={user?.photoURL}
                alt=""
              />
              <div>
                <h1 className="">{user?.displayName}</h1>
              </div>
            </div>
          ) : (
            <img
              className="w-12 rounded-full mr-3 border-2 border-pink-400"
              src="https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
              alt=""
            />
          )}
          {user ? (
            <button onClick={handleLogOut} className="btn px-5 mr-3 py-2  rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-purple-400">
              Log Out
            </button>
          ) : (
            <>
              <Link to="/login" className="btn px-5 mr-3 py-2  rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-purple-400">
                Login
              </Link>
           
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
