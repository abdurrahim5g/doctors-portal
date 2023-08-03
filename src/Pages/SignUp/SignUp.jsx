import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SignUp.css";
import google from "../../assets/images/google.png";
import { useForm } from "react-hook-form";
import { useAuthContex } from "../../Contex/AuthProvider";
import { GoogleAuthProvider, updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Use AuthContex
  const { providerLogin, signUp } = useAuthContex();

  // handle Provider login
  const googleProvider = new GoogleAuthProvider();

  const handleProviderLogin = (provider) => {
    providerLogin(provider)
      .then((result) => {
        const user = result.user;
        saveUserInfo(user.displayName, user.email);
      })
      .catch((err) => console.log(err.message));
  };

  /**
   * React hook form steps
   * ^^^^^^^^^^^^^^^^^^^^^
   * 1. Install npm install react-hook-form
   * 2. import useForm() from "react-hook-form"
   * 3. destracture {register, handleSubmit} = useForm()
   * 4. Use register in the form field with {...register("name", {required, max, min, maxLength, minLength, pattern ...etc})}
   * 5. Use handleSubmit inside onSubmit handler and pass a function inside handleSubmit(function) for // getting form data
   * 6. Get form data inside paramitter
   * 7. ____Now you can do anything in this data.
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /**
   * Handle signup
   */
  const handleSignup = (data) => {
    const { name, email, password } = data;

    if (name && email && password) {
      signUp(email, password)
        .then((result) => {
          // console.log(result.user);
          updateProfile(result.user, { displayName: name })
            .then(() => {
              // navigate(from);
              saveUserInfo(name, email);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } else {
      toast.error("Something is wrong. Please try again!");
    }
  };

  /**
   * Send user [name/email] to the database
   */
  const saveUserInfo = (name, email) => {
    const userInfo = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Sign up sucessfully ✅");
          // navigate(from);
          getUserToken(email);
        } else {
          toast.error("Something is wrong! Please try again 🔃");
        }
      });
  };

  /**
   * GET token
   * =============
   */
  const getUserToken = (email) => {
    const url = `http://localhost:5000/jwt?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          navigate(from);
        }
      });
  };

  return (
    <div className="SignUp-page py-16 lg:py-28">
      <div className="login-sign-up-form">
        <div className="max-w-md mx-auto">
          <div className="form-container shadow-lg rounded-xl p-8 border">
            <h2 className="text-center text-2xl font-semibold ">Signup</h2>

            <form className="my-10" onSubmit={handleSubmit(handleSignup)}>
              <div className="form-control mb-4">
                <label htmlFor="name" className="font-medium leading-loose">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: true })}
                  className="input input-bordered w-full "
                />
                {errors.name && (
                  <span className="text-red-500">Name is require</span>
                )}
              </div>
              <div className="form-control mb-4">
                <label htmlFor="email" className="font-medium leading-loose">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: "Email is require" })}
                  className="input input-bordered w-full "
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>
              <div className="form-control mb-4">
                <label htmlFor="password" className="font-medium leading-loose">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                    message: "hello error",
                  })}
                  className="input input-bordered w-full "
                />
                <span className="text-red-500">
                  {errors.password?.type === "required" &&
                    "Password is require"}
                  {errors.password?.type === "minLength" &&
                    "Password at last 6 character"}
                  {errors.password?.type === "maxLength" &&
                    "Password max 12 character long"}
                </span>
              </div>

              <div className="form-control ">
                <input
                  type="submit"
                  className="w-full btn btn-accent"
                  value={"Signup"}
                />
              </div>
            </form>

            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-secondary">
                Please Login
              </Link>
            </p>

            <div className="divider">OR</div>

            <div className="provider-login">
              <button onClick={() => handleProviderLogin(googleProvider)}>
                <img src={google} alt="Google Login button" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
