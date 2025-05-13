import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const { signInWithGoogle, signInWithGitHub, setUser } =
    useContext(AuthContext);

  const handleGoogleLogin = async () => {
    try {
      const userCredential = await signInWithGoogle();
      setUser(userCredential.user); // Update the user state with the logged-in user
      toast.success("Signed in with Google!");
    } catch (error) {
      toast.error("Google sign-in failed.");
    }
  };

  const handleGitHubLogin = async () => {
    try {
      const userCredential = await signInWithGitHub();
      console.log(userCredential.user);
      setUser(userCredential.user); // Update the user state with the logged-in user
      toast.success("Signed in with GitHub!");
    } catch (error) {
      toast.error("GitHub sign-in failed.");
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-700 mb-5">Login with</h2>
      <div className="space-y-3">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-secondary w-full flex items-center justify-center gap-2"
        >
          <FcGoogle size={24} /> Login with Google
        </button>
        <button
          onClick={handleGitHubLogin}
          className="btn btn-outline btn-primary w-full flex items-center justify-center gap-2"
        >
          <FaGithub size={24} /> Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
