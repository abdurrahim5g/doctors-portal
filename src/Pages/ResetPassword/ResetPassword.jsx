import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuthContex } from "../../Contex/AuthProvider";
import { toast } from "react-hot-toast";

const ResetPassword = () => {
  /**Use AuthContex_________ */
  const { resetPassword } = useAuthContex();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /**Handle reset pass */
  const handleResetPassword = (data) => {
    const { email } = data;
    if (email) {
      resetPassword(email)
        .then(() =>
          toast.success(
            `Reset email was send. Please check your mail: ${email}`
          )
        )
        .catch((err) => toast.err(err.message));
    } else {
      toast.error("Please try again!");
    }
  };

  return (
    <div className="reset-page py-16 lg:py-28">
      <div className="login-sign-up-form">
        <div className="max-w-md mx-auto">
          <div className="form-container shadow-lg rounded-xl p-8 border">
            <h2 className="text-center text-2xl font-semibold ">Login</h2>

            <form
              className="my-10"
              onSubmit={handleSubmit(handleResetPassword)}
            >
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
                </span>
              </div>

              <div className="form-control ">
                <input
                  type="submit"
                  className="w-full btn btn-accent"
                  value={"Reset Password"}
                />
              </div>
            </form>

            <div className="divider">OR</div>

            <div className="login text-center">
              <Link to="/login" className="btn btn-secondary">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
