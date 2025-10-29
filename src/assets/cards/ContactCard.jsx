import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactCard() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log("succeed:", result.text);
        alert("Thank you for contact me!");
        form.current.reset();
      })
      .catch((error) => {
        console.log("failed:", error.text);
        alert(
          "Failed to submit. Please click the email icon on the main card to contact me."
        );
      });
  };

  return (
    <>
      <h3 className="text-xl font-bold mb-4 text-indigo-500 border-b-2">
        Feel free to reach out!
      </h3>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="user_name" className="sr-only">
          Full Name
        </label>
        <input
          type="text"
          name="user_name"
          placeholder="Full Name"
          className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#60a5fa] focus:border-[#60a5fa]"
        />
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#60a5fa] focus:border-[#60a5fa]"
        />
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Message"
          className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#60a5fa] focus:border-[#60a5fa]"
          rows="10"
        />
        <button
          type="submit"
          className="w-full bg-[#60a5fa] text-white py-2 px-4 rounded hover:opacity-70 duration-100"
        >
          Submit
        </button>
      </form>
    </>
  );
}
