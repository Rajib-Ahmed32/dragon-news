import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile, sendEmailVerification } from "firebase/auth";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const { email, password, photo, name } = form;

    createUser(email.value, password.value)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name.value,
          photoURL: photo.value,
        })
          .then(() => {
            sendEmailVerification(user)
              .then(() => {
                toast.success(
                  `Registration successful! Please verify your email. Welcome, ${name.value}`
                );
                form.reset();
              })
              .catch((emailError) => {
                toast.error("Failed to send verification email.");
              });
          })
          .catch((profileError) => {
            toast.error(
              "Registration succeeded, but failed to update profile."
            );
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(`Registration failed: ${errorMessage}`);
      });
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-4 py-4 mx-auto min-h-screen">
        <div className="w-full bg-white rounded-md shadow-md dark:border sm:max-w-sm p-4 dark:bg-gray-800 dark:border-gray-700">
          <div className="space-y-4">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
              Create Account
            </h1>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="photo"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  id="photo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="https://example.com/photo.jpg"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn my-3 w-full btn-primary px-4 py-2 sm:px-8 text-sm sm:text-base"
              >
                Register
              </button>

              <p className="text-xs font-light text-gray-500 dark:text-gray-400 text-center">
                Already have an account?{" "}
                <Link
                  to="/auth/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
