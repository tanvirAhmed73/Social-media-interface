import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { loginSchema, type LoginFormData } from "../../schemas/auth.schema";

const Login = () => {
  const navigate = useNavigate();
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const authContext = useContext(AuthContext);
  if (!authContext)
    throw new Error("AuthContext must be used within AuthProvider");
  const { signIn, signInWithGoogle } = authContext;

  const onSubmit = async (data: LoginFormData) => {
    try {
      await signIn(data.email, data.password);
      navigate("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError("root", {
          type: "manual",
          message: "Invalid email or password",
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

  const handleForgotPassword = async (email: string) => {
    try {
      // Implement password reset logic here
      setResetEmailSent(true);
    } catch (error) {
      console.error("Password reset failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-[#F5F5F5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Welcome back
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Sign in to your account
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-md rounded-[10px] sm:px-10">
          {!isResettingPassword ? (
            <>
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      {...register("rememberMe")}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-[#98C6B7] focus:ring-[#98C6B7]"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsResettingPassword(true)}
                    className="text-sm font-medium text-[#98C6B7] hover:text-[#7ab3a8]"
                  >
                    Forgot your password?
                  </button>
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
                  {isSubmitting ? "Signing in..." : "Sign in"}
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
                    Sign in with Google
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Reset your password
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Enter your email address and we'll send you a link to reset
                  your password.
                </p>
              </div>

              {resetEmailSent ? (
                <div className="rounded-md bg-green-50 p-4">
                  <p className="text-sm font-medium text-green-800">
                    Check your email for password reset instructions.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const email = (e.target as HTMLFormElement).email.value;
                    handleForgotPassword(email);
                  }}
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="reset-email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="reset-email"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#98C6B7] focus:outline-none focus:ring-1 focus:ring-[#98C6B7]"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setIsResettingPassword(false)}
                      className="text-sm font-medium text-gray-600 hover:text-gray-500"
                    >
                      Back to sign in
                    </button>
                    <button
                      type="submit"
                      className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#98C6B7] hover:bg-[#7ab3a8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#98C6B7]"
                    >
                      Reset password
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-[#98C6B7] hover:text-[#7ab3a8]"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
