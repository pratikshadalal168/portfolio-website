import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20">

      {/* FULL WIDTH BACKGROUND */}
      <div className="w-full px-6 py-14 
      bg-gradient-to-r from-[#14121c] via-[#1b1325] to-[#1a1626] text-white">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

          {/* LEFT */}
          <div className="max-w-sm">
            <h2 className="text-xl font-bold mb-3">
              <span className="text-pink-400">Pratiksha</span> Dalal
            </h2>

            <p className="text-sm text-gray-300 mb-3">
              Crafting high-performance digital experiences with a focus on clean code and user-centric design.
            </p>

            <p className="text-sm text-gray-400">Email: pratikshadalal168@gmail.com</p>
            <p className="text-sm text-gray-400">Phone: +91 9975451306</p>
            <p className="text-sm text-gray-400">Location: Nagpur, Maharashtra, India</p>
          </div>

          {/* CENTER */}
          <div className="flex flex-col items-center gap-5">

            {/* NAV LINKS */}
            <div className="flex gap-6 text-sm text-gray-300">
              <a href="#home" className="hover:text-pink-400 transition">Home</a>
              <a href="#about" className="hover:text-pink-400 transition">About</a>
              <a href="#skills" className="hover:text-pink-400 transition">Skills</a>
              <a href="#education" className="hover:text-pink-400 transition">Education</a>
              <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-4">
              {[
                {
                  icon: Linkedin,
                  link: "https://linkedin.com/in/pratiksha-dalal-66020b251",
                  hover: "hover:bg-[#0077b5] active:bg-[#0077b5]",
                },
                {
                  icon: Instagram,
                  link: "https://www.instagram.com/pratikshadalal_?igsh=NXVuMHJjd2QwdGRu&utm_source=qr",
                  hover: "hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 active:from-pink-500 active:to-yellow-500",
                },
                {
                  icon: Github,
                  link: "https://github.com/pratikshadalal168",
                  hover: "hover:bg-gray-800 active:bg-gray-800",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full bg-white/10 
                    transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ${item.hover}`}
                  >
                    <Icon size={18} className="text-white" />
                  </a>
                );
              })}
            </div>

          </div>

          {/* RIGHT (EMPTY / OPTIONAL) */}
          <div className="hidden md:block w-32" />
        </div>

        {/* BOTTOM */}
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-3">

          <p>© 2026 Pratiksha Dalal. All rights reserved.</p>

          <p>
            Built with{" "}
            <span className="text-pink-400">React</span> &{" "}
            <span className="text-purple-400">Tailwind</span>
          </p>

        </div>

      </div>
    </footer>
  );
}