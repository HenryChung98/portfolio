import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactCard() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY
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

  const contactInfo = [
    { label: "Email", value: "henrychung.dev@gmail.com", href: "mailto:henrychung.dev@gmail.com" },
    { label: "Phone", value: "+1 778 322 3951", href: "tel:+17783223951" },
    { label: "Location", value: "Burnaby, Canada" },
  ];

  return (
    <>
      <h3 className="text-xl font-bold mb-4 text-indigo-500 border-b-2">
        Feel free to reach out!
      </h3>
      
      <div className="mb-6 space-y-2">
        {contactInfo.map((item, index) => (
          <div key={index} className="text-sm">
            <span className="font-semibold text-gray-700">{item.label}: </span>
            {item.href ? (
              <a href={item.href} className="text-indigo-500 hover:underline">
                {item.value}
              </a>
            ) : (
              <span className="text-gray-600">{item.value}</span>
            )}
          </div>
        ))}
      </div>

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
          Send
        </button>
      </form>
    </>
  );
}