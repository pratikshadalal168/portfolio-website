import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {

  // ✅ WhatsApp Function (TYPE FIXED ONLY)
  const handleWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const subject = (form.elements.namedItem('subject') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const phoneNumber = "919975451306"; // 👉 apna number yaha daalo

    const text = `Hello Pratiksha,

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}`;

    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.location.href = url;
  };

  return (
    <section id="contact" className="scroll-mt-24 section-container !py-6 md:!py-8 bg-gradient-to-b from-[#faf7ff] to-[#fdf2f8] rounded-[40px] shadow-inner">

      {/* HEADING */}
      <div className="flex flex-col items-center text-center mb-6 md:mb-8">
        <span className="glass-pill mb-2">Contact Me</span>

        <h2 className="text-2xl md:text-4xl font-extrabold gradient-text">
          Get In Touch
        </h2>

        <div className="h-[2px] w-20 mt-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
      </div>

      {/* FORM */}
      <motion.form
        onSubmit={handleWhatsApp}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card max-w-2xl mx-auto p-6 md:p-8 rounded-3xl flex flex-col gap-4"
      >

        {/* NAME */}
        <div className="group">
          <label className="text-sm font-medium text-gray-700 mb-1 block group-hover:text-purple-500 transition">
            Name
          </label>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2.5 rounded-xl border border-pink-200 bg-white/60 
            transition-all duration-300 ease-in-out
            hover:shadow-md hover:scale-[1.01]
            focus:outline-none focus:ring-0 focus:border-pink-200"
          />
        </div>

        {/* EMAIL */}
        <div className="group">
          <label className="text-sm font-medium text-gray-700 mb-1 block group-hover:text-purple-500 transition">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2.5 rounded-xl border border-pink-200 bg-white/60 
            transition-all duration-300 ease-in-out
            hover:shadow-md hover:scale-[1.01]
            focus:outline-none focus:ring-0 focus:border-pink-200"
          />
        </div>

        {/* SUBJECT */}
        <div className="group">
          <label className="text-sm font-medium text-gray-700 mb-1 block group-hover:text-purple-500 transition">
            Subject
          </label>
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-2.5 rounded-xl border border-pink-200 bg-white/60 
            transition-all duration-300 ease-in-out
            hover:shadow-md hover:scale-[1.01]
            focus:outline-none focus:ring-0 focus:border-pink-200"
          />
        </div>

        {/* MESSAGE */}
        <div className="group">
          <label className="text-sm font-medium text-gray-700 mb-1 block group-hover:text-purple-500 transition">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            className="w-full px-4 py-2.5 rounded-xl border border-pink-200 bg-white/60 
            transition-all duration-300 ease-in-out
            hover:shadow-md hover:scale-[1.01]
            focus:outline-none focus:ring-0 focus:border-pink-200 resize-none"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="mt-1 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold flex items-center justify-center gap-2 
          hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-300"
        >
          Send Message <Send size={18} />
        </button>

      </motion.form>

    </section>
  );
}