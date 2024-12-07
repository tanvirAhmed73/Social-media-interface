import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { signUpSchema, type SignUpFormData } from "../../schemas/auth.schema";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const authContext = useContext(AuthContext);
  if (!authContext)
    throw new Error("AuthContext must be used within AuthProvider");
  const { signUp, signInWithGoogle } = authContext;

  const onSubmit = async (data: SignUpFormData) => {
    try {
      await signUp(data.email, data.password);
      navigate("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError("root", {
          type: "manual",
          message: "Failed to create account",
        });
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      console.error("Google sign in failed:", error);
      setError("root", {
        type: "manual",
        message: "Google sign in failed. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-[#F5F5F5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Join our creative community
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-md rounded-[10px] sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Name Fields */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  {...register("firstName")}
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#98C6B7] focus:outline-none focus:ring-1 focus:ring-[#98C6B7]"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className="flex-1">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  {...register("lastName")}
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#98C6B7] focus:outline-none focus:ring-1 focus:ring-[#98C6B7]"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                {...register("username")}
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#98C6B7] focus:outline-none focus:ring-1 focus:ring-[#98C6B7]"
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                {...register("email")}
                type="email"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#98C6B7] focus:outline-none focus:ring-1 focus:ring-[#98C6B7]"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#98C6B7] focus:outline-none focus:ring-1 focus:ring-[#98C6B7]"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                {...register("confirmPassword")}
                type="password"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#98C6B7] focus:outline-none focus:ring-1 focus:ring-[#98C6B7]"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Terms */}
            <div className="flex items-center">
              <input
                {...register("terms")}
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-[#98C6B7] focus:ring-[#98C6B7]"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-900"
              >
                I agree to the{" "}
                <a href="#" className="text-[#98C6B7] hover:text-[#7ab3a8]">
                  Terms and Conditions
                </a>
              </label>
              {errors.terms && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.terms.message}
                </p>
              )}
            </div>

            {errors.root && (
              <p className="text-sm text-red-600 text-center">
                {errors.root.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#98C6B7] hover:bg-[#7ab3a8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#98C6B7] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Creating account..." : "Sign up"}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleGoogleSignIn}
                type="button"
                className="w-full flex justify-center items-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#98C6B7]"
              >
                <img
                  className="h-5 w-5"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google logo"
                />
                Sign up with Google
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-[#98C6B7] hover:text-[#7ab3a8]"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
