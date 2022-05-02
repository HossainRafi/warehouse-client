import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import auth from "./../../../Firebase/Firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Login.css";
import { ScaleLoader } from "react-spinners";

const Login = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [errors, setErrors] = useState({ email: "", password: "", others: "" });

  const [signInWithEmail, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

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

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmail(userInfo.email, userInfo.password);
  };
  if (user || googleUser) {
    navigate(from, { replace: true });
  }
  useEffect(() => {
    const error = hookError || googleError;
    if (error) {
      switch (error?.code) {
        case "auth/invalid-email":
          toast("OOPS..!! Something Went Wrong. Try Again Later");
          break;

        case "auth/invalid-password":
          toast("OOPS..!! Something Went Wrong. Try Again Later");
          break;
        default:
          toast.error("OOPS..!! Something Went Wrong. Try Again Later");
      }
    }
  }, [hookError, googleError]);
  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  const handleResetPass = () => {
    sendPasswordResetEmail(userInfo.email);
    toast.success("Mail Send");
  };

  return (
    <div className="bg-gray-200 py-10">
      <div className="login-container">
        <div className="login-title">Log In First</div>
        <form onSubmit={handleLogin} className="login-form">
          <input
            onChange={handleEmailChange}
            type="text"
            placeholder="Enter Your Email"
            required
          />
          {errors?.email && <p className="error-message">{errors.email}</p>}
          <input
            onChange={handlePasswordChange}
            type="password"
            placeholder="Enter Your Password"
            required
          />
          {errors?.password && (
            <p className="error-message">{errors.password}</p>
                  )}
                  
          {(loading || googleLoading || sending) && (
            <p className="flex justify-center">
              <ScaleLoader color="blue" size={100} />
            </p>
          )}

          <button>Log In</button>
        </form>
        <button onClick={handleGoogleLogin}>Log In with Google</button>

        <div>
          <p className="font-medium text-lg text-center text-blue-600 mt-4">
            Forget your password ?
          </p>
          <p className="font-bold text-xl text-center text-blue-700 cursor-pointer">
            <p onClick={handleResetPass}>Reset Password</p>
          </p>
        </div>

        <div>
          <p className="font-medium text-lg text-center text-blue-600 mt-4">
            Don't have an account ?
          </p>
          <p className="font-bold text-xl text-center text-blue-700">
            <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
