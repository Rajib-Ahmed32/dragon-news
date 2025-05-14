import { useState } from "react";

const CareerContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Didn't find your perfect role?
      </h2>
      <p className="mb-4 text-gray-600">
        We’re always on the lookout for great talent. Tell us a bit about
        yourself — we’d love to hear from you!
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 border p-6 rounded-md space-y-4 max-w-xl"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="What's your name?"
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email address"
          required
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us why you'd be a great fit..."
          className="w-full border px-3 py-2 rounded h-28 resize-none"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          Send Message
        </button>

        {submitted && (
          <p className="text-green-600 mt-2">
            Thanks for reaching out — we’ll be in touch soon!
          </p>
        )}
      </form>
    </div>
  );
};

export default CareerContactForm;
