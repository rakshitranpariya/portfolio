import React from "react";
import { Mail, Phone, Linkedin } from "lucide-react";

function Contact() {
  return (
    <section id="Contact" className=" ">
      <div className="mt-0 lg:mt-20  lg:h-screen px-4 py-24 lg:pb-0">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <div className="mt-3 h-1 w-20 bg-blue-500 mx-auto rounded" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about technology.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {/* Email */}

          <div className=" rounded-[40px] bg-white/5 dark:bg-black/30 backdrop-blur-sm border border-white/30 dark:!border-black/30 shadow-xl shadow-black/10  p-6 text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 outline outline-blue-500/30">
              <Mail size={22} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
              Email
            </h3>
            <a
              href="mailto:rakshitranpariya@gmail.com"
              className="mt-2 block text-gray-600 dark:text-white/50 hover:text-blue-600 break-words"
            >
              rakshitranpariya@gmail.com
            </a>
          </div>
          {/* Phone */}
          <div className=" rounded-[40px] bg-white/2 dark:bg-black/30 backdrop-blur-sm border border-white/30 dark:!border-black/30 shadow-xl shadow-black/10  p-6 text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-green-700 outline outline-green-500/30">
              <Phone size={22} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
              Phone
            </h3>
            <a
              href="tel:+17828822958"
              className="mt-2 block text-gray-600 dark:text-white/50 "
            >
              +1 (782) 882-2958
            </a>
          </div>
          {/* LinkedIn */}
          <div className=" rounded-[40px]  bg-white/2 dark:bg-black/30 backdrop-blur-sm border border-white/30 dark:!border-black/30 shadow-xl shadow-black/10 p-6 text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-sky-50 flex items-center justify-center text-sky-700 outline outline-sky-500/30">
              <Linkedin size={22} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
              LinkedIn
            </h3>
            <a
              href="https://www.linkedin.com/in/rakshit-ranpariya/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-gray-600 dark:text-white/50"
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
