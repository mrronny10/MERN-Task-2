import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthContext";
import login from "../../assets/login.svg";

const Login = () => {
  // useTitle("Login");
  const [show, setShow] = useState(false);
  const { logInUserWithEmailPassword, signInWithGoogle, forgetPassword } =
    useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSignIn = ({ email, password }) => {
    logInUserWithEmailPassword(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Congratulations!🎊",
          text: "You login successfull!",
          confirmButtonText: "Awesome!",
          confirmButtonColor: "#0A69DC",
          iconColor: "text-green-500",
          customClass: {
            title: "text-green-500 text-3xl",
            text: "text-slate-500",
          },
        });
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Your Password is wrong!",
            confirmButtonText: "ok!",
            confirmButtonColor: "#49BBBD",
          });
        } else {
          console.log(errorMessage);
        }
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Congratulations!🎊",
          text: "SignIn successfull!",
          confirmButtonText: "Awesome!",
          confirmButtonColor: "#0A69DC",
          iconColor: "text-green-500",
          customClass: {
            title: "text-green-500 text-3xl",
            text: "text-slate-500",
          },
        });
        navigate(from, { replace: true });
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='flex  max-w-7xl mx-auto justify-center py-14 items-center'>
      <div>
        <img className='max-w-xl md:block hidden' src={login} alt='person' />
      </div>
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className='bg-white p-20 px-28 '
      >
        <h2 className='text-3xl text-center  font-semibold text-gray-800 mb-10'>
          Login
        </h2>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className={`w-80 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#0A69DC] focus:border-transparent focus:shadow-lg focus:transform focus:transition focus:duration-500 focus:scale-105 ${
              errors.email ? "border-red-500" : ""
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
          <br />
          {errors.email && (
            <span className='text-red-500'>{errors.email.message}</span>
          )}
        </div>
        <div className='mb-2'>
          <label
            htmlFor='password'
            className='block text-gray-700 font-bold mb-2'
          >
            Password
          </label>
          <input
            type={`${show === true ? "text" : "password"}`}
            name='password'
            id='password'
            className={`relative w-80 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#0A69DC] focus:border-transparent focus:shadow-lg focus:transform focus:transition focus:duration-500 focus:scale-105 ${
              errors.password ? "border-red-500" : ""
            }`}
            {...register("password", {
              required: "Password Field is required",
            })}
          />
          <span
            onClick={() => setShow(!show)}
            className='absolute mt-3 mx-3 cursor-pointer text-[#0A69DC]'
          >
            <FaEye size={18}></FaEye>
          </span>
          <br />
          {errors.password && (
            <span className='text-red-500'>{errors.password.message}</span>
          )}
        </div>
        <span className='text-sm font-medium mb-4 mt-2'>
          Forget password?{" "}
          <span className='text-blue-500 cursor-pointer'>reset</span>
        </span>
        <br />
        <button
          type='submit'
          className='bg-[#0A69DC] text-white w-full font-bold py-2 mt-4 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Login
        </button>
        <div className='text-center mt-4 space-x-4 text-[#0A69DC]'>
          <button type='button' className='p-3 rounded bg-slate-100'>
            <FaFacebook />
          </button>
          <button
            onClick={handleGoogleSignIn}
            type='button'
            className='p-3 rounded bg-slate-100'
          >
            <FaGoogle />
          </button>
          <button type='button' className='p-3 rounded bg-slate-100'>
            <FaLinkedin />
          </button>
        </div>
        <div className='text-center text-md mt-3 text-sm text-slate-600'>
          New here?{" "}
          <Link to='/signup'>
            <span className='text-[#0A69DC] font-medium'>Sign up</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
