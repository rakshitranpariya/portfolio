import React from "react";
import { Mail, Phone, Linkedin } from "lucide-react";

function Contact() {
  return (
    <section
      id="Contact"
      className="pb-12 pt-[150px] h-screen   justify-center "
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Get in Touch
          </h2>
          <div className="mt-3 h-1 w-20 bg-blue-600 mx-auto rounded" />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about technology.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {/* Email */}

          <div className=" rounded-[40px] bg-white/5 backdrop-blur-sm border border-white/30 shadow-xl shadow-black/10  p-6 text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 outline outline-blue-500/30">
              <Mail size={22} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900">Email</h3>
            <a
              href="mailto:rakshitranpariya@gmail.com"
              className="mt-2 block text-gray-600 hover:text-blue-600 break-words"
            >
              rakshitranpariya@gmail.com
            </a>
          </div>
          {/* Phone */}
          <div className=" rounded-[40px] bg-white/2 backdrop-blur-sm border border-white/30 shadow-xl shadow-black/10  p-6 text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-green-700 outline outline-green-500/30">
              <Phone size={22} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900">Phone</h3>
            <a
              href="tel:+17828822958"
              className="mt-2 block text-gray-600 hover:text-blue-600"
            >
              +1 (782) 882-2958
            </a>
          </div>
          {/* LinkedIn */}
          <div className=" rounded-[40px]  bg-white/2 backdrop-blur-sm border border-white/30 shadow-xl shadow-black/10 p-6 text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-sky-50 flex items-center justify-center text-sky-700 outline outline-sky-500/30">
              <Linkedin size={22} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/rakshit-ranpariya/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-gray-600 hover:text-blue-600"
            >
              rakshitranpariya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
