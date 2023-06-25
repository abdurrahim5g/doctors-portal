import { Link } from "react-router-dom";
import "./Login.css";
import google from "../../assets/images/google.png";

const Login = () => {
  return (
    <div className="Login-page py-16 lg:py-28">
      <div className="login-sign-up-form">
        <div className="max-w-md mx-auto">
          <div className="form-container shadow-lg rounded-xl p-8 border">
            <h2 className="text-center text-2xl font-semibold ">Login</h2>

            <form className="my-10">
              <div className="form-control mb-4">
                <label htmlFor="email" className="font-medium leading-loose">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control mb-4">
                <label htmlFor="password" className="font-medium leading-loose">
                  Password
                </label>
                <input
                  id="password"
                  type="text"
                  className="input input-bordered w-full "
                />
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
              <button>
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
