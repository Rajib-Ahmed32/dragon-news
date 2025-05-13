import { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setSubmitted(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 w-[50%] bg-gray-100 p-4 rounded-md"
    >
      <label className="block mb-2 font-semibold">
        Subscribe to our Newsletter
      </label>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          className="flex-1 border border-gray-300 rounded px-3 py-2"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Subscribe
        </button>
      </div>
      {submitted && (
        <p className="text-green-600 mt-2">Thank you for subscribing!</p>
      )}
    </form>
  );
};

export default NewsletterForm;
