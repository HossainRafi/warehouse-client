import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import auth from './../../../Firebase/Firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import { ClipLoader, ScaleLoader } from 'react-spinners';

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    others: "",
  });

  const [showPass, setShowPass] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);

    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };
  const handlePasswordChange = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Invalid Password" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleConfirmPasswordChange = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPass: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Password's don't match" });
      setUserInfo({ ...userInfo, confirmPass: "" });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  useEffect(() => {
    if (hookError) {
      switch (hookError?.code) {
        case "auth/invalid-email":
          toast.error("OOPS..!! Something Went Wrong. Try Again Later");
          break;
        case "auth/invalid-password":
          toast.error("OOPS..!! Something Went Wrong. Try Again Later");
          break;
        default:
          toast.error("OOPS..!! Something Went Wrong. Try Again Later");
      }
    }
  }, [hookError]);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  const handleGoogleLogin = () => {
    signInWithGoogle();
    };

      return (
        <div className="bg-gray-200 py-10">
          <div className="login-container">
            <div className="login-title">Sign Up First</div>
            <form className="login-form" onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Your Email"
                onChange={handleEmailChange}
                required
              />
              {errors?.email && <p className="error-message">{errors.email}</p>}
              <input
                type={showPass ? "text" : "password"}
                placeholder="password"
                onChange={handlePasswordChange}
                required
              />
              {errors?.password && (
                <p className="error-message">{errors.password}</p>
              )}

              <input
                type="password"
                placeholder="confirm password"
                onChange={handleConfirmPasswordChange}
                required
              />
              {(loading || googleLoading) && (
                <p className="flex justify-center">
                  <ScaleLoader color="blue" size={100} />
                </p>
              )}
              <button>Sign Up</button>
            </form>
            <button onClick={handleGoogleLogin}>Sign Up with Google</button>
            <div>
              <p className="font-medium text-lg text-center text-blue-600 mt-4">
                Have an account ?
              </p>
              <p className="font-bold text-xl text-center text-blue-700">
                <Link to="/login">Log In</Link>
              </p>
            </div>

            <Toaster position="top-center" reverseOrder={true} />
          </div>
        </div>
      );
};

export default Signup;