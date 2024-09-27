import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { submitForm } from "@/slices";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
function Register() {
  const { toast } = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.auth);

  const [formData, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");
    const resultAction = await dispatch(submitForm(formData));

    if (submitForm.fulfilled.match(resultAction)) {
      // Handle success

      console.log("Form submitted successfully");
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success", // Types: "success", "error", "warning", "info"
        duration: 5000, // Time in milliseconds before auto-close
        isClosable: true, // Whether the toast can be dismissed by the user
        position: "top-right", // Position of the toast
      });
      navigate("/login");
    } else {
      // Handle error
      console.log("Form submission failed");
    }
  };
  const changevalue = (e) => {
    setData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  return (
    <div className=" flex flex-col col-span-2 items-center justify-center h-screen w-screen ">
      <div className="border-2 p-3 w-1/4 text-base font-bold ">
        <p className="text-center text-2xl p-2">Create New Account</p>
        <div className="text-xs text-center p-2">
          Already have an account ?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label htmlFor="">Username</label>
          <input
            onChange={changevalue}
            type="text"
            name="username"
            required
            className="border-2 h-10 font-normal p-3"
          />
          <label htmlFor="">Email</label>
          <input
            onChange={changevalue}
            type="email"
            name="email"
            id=""
            required
            className="border-2 h-10 font-normal p-3"
          />
          <label htmlFor="">Password</label>
          <input
            onChange={changevalue}
            type="password"
            name="password"
            id=""
            required
            className="border-2 h-10 font-normal p-3"
          />
          <button className="h-10 bg-black text-white " type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
