import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useSelector, useDispatch } from "react-redux";
function Login() {
  const { toast } = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.form);

  const [loginData, setLogin] = useState({
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
  return (
    <div className=" flex flex-col col-span-2 items-center justify-center h-screen w-screen ">
      <div className="border-2 p-3 w-1/4 text-base font-bold ">
        <p className="text-center text-2xl p-2">Login </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="username"
            required
            className="border-2 h-10 font-normal p-2"
          />

          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            id=""
            required
            className="border-2 h-10 font-normal p-2"
          />
          <button
            className="h-10 bg-black text-white hover:border border-white"
            type="submit"
          >
            LogIn
          </button>
          <p className="text-center">
            New User?{" "}
            <Link to="/register" className="text-blue-500 underline ">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
