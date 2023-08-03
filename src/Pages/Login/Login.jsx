import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import google from "../../assets/images/google.png";
import { useForm } from "react-hook-form";
import { useAuthContex } from "../../Contex/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(from);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Use AuthContex
  const { providerLogin, login } = useAuthContex();

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
   *
   * Login handler
   */
  const handleLogin = (data) => {
    const { email, password } = data;
    if (email && password) {
      login(email, password)
        .then(() => {
          toast.success("Login successful ✅🚀");
          getUserToken(email);
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.message);
        });
    } else {
      toast.error("Please provide valid ✔ information");
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
    <div className="Login-page py-16 lg:py-28">
      <div className="login-sign-up-form">
        <div className="max-w-md mx-auto">
          <div className="form-container shadow-lg rounded-xl p-8 border">
            <h2 className="text-center text-2xl font-semibold ">Login</h2>

            <form className="my-10" onSubmit={handleSubmit(handleLogin)}>
              <div className="form-control mb-4">
                <label htmlFor="email" className="font-medium leading-loose">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: true,
                  })}
                  id="email"
                  type="text"
                  className="input input-bordered w-full "
                />
                <span className="text-red-500">
                  {errors.email?.type === "required" && "Email is require"}
                  {errors.email?.type === "pattern" &&
                    "Please input your valide email address!"}
                </span>
              </div>
              <div className="form-control mb-4">
                <label htmlFor="password" className="font-medium leading-loose">
                  Password
                </label>
                <input
                  {...register("password", { required: true, minLength: 6 })}
                  id="password"
                  type="password"
                  className="input input-bordered w-full "
                />
                <span className="text-red-500">
                  {errors.password?.type === "required" &&
                    "Password is require"}
                  {errors.password?.type === "minLength" &&
                    "Password at last 6 character"}
                </span>

                <Link className="forget-pass" to={"/reset-password"}>
                  Forget Password
                </Link>
              </div>

              <div className="form-control ">
                <input
                  type="submit"
                  className="w-full btn btn-accent"
                  value={"Login"}
                />
              </div>
            </form>

            <p className="text-center">
              Do not have account?{" "}
              <Link to="/signup" className="text-secondary">
                Create an account
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

export default Login;
