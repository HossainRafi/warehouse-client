import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "./../../Firebase/Firebase.init";
import logo from "../../Utilities/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  return (
    <div className="shadow-md w-full sticky top-0 left-0 z-50">
      <div className="h-16 md:flex items-center justify-between bg-gray-300 py-4 md:px-10 px-7">
        <div>
          <img
            src={logo}
            alt=""
            className="h-[140px] w-[150px] hidden md:block"
          />
          <p className="md:hidden font-bold font-serif mt-1">
            CELLPHONE WAREHOUSE
          </p>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
        >
          <GiHamburgerMenu color="white" name={open ? "close" : "menu"} />
        </div>
        <div
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-300 left-0 w-full  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          <div className="md:ml-4 text-lg md:my-0 my-7 font-serif font-bold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }
            >
              Home
            </NavLink>
          </div>

          {user?.uid && (
            <>
              <div className="md:ml-4 text-lg md:my-0 my-7 font-serif font-bold">
                <NavLink
                  to="/additem"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                  }
                >
                  Add Item
                </NavLink>
              </div>
              <div className="md:ml-4 text-lg md:my-0 my-7 font-serif font-bold">
                <NavLink
                  to="/manageitem"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                  }
                >
                  Manage Item
                </NavLink>
              </div>
              <div className="md:ml-4 text-lg md:my-0 my-7 font-serif font-bold">
                <NavLink
                  to="/myitem"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                  }
                >
                  My Item
                </NavLink>
              </div>
            </>
          )}
          <div className="md:ml-4 text-lg md:my-0 my-7 font-serif font-bold">
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }
            >
              Blogs
            </NavLink>
          </div>
          <div className="md:ml-4 text-lg md:my-0 my-7 font-serif font-bold">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }
            >
              About
            </NavLink>
          </div>

          <div className="md:ml-4 text-lg md:my-0 my-7 font-serif font-bold">
            {user?.uid ? (
              <button
                className="text-slate-600 hover:text-blue-600 text-lg font-bold"
                onClick={() => signOut(auth)}
              >
                LogOut
              </button>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-600"
                }
              >
                LogIn
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
