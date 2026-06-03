import { motion } from 'framer-motion';
import pratu from '../assets/pratu.jpeg';
import { Github, Linkedin, Instagram, Phone, Download, Target, Zap, Heart, Sparkles } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: <Target size={18} />, title: 'Goal Oriented', desc: 'Focused on delivering high-impact results.' },
    { icon: <Zap size={18} />, title: 'Fast Learner', desc: 'Quickly adapting to new tech & trends.' },
    { icon: <Heart size={18} />, title: 'User First', desc: 'Crafting experiences people actually love.' },
    { icon: <Sparkles size={18} />, title: 'Clean Code', desc: 'Writing maintainable & readable software.' },
  ];

  return (
    <section 
      id="about" 
      className="section-container !py-8 md:!py-10 bg-gradient-to-b from-[#faf7ff] to-[#fdf2f8] rounded-[40px] shadow-inner"
    >

      {/* HEADING */}
      <div className="flex flex-col items-center text-center mb-10 md:mb-12">
        <span className="glass-pill mb-3">My Identity</span>
        <h2 className="text-3xl md:text-5xl font-extrabold gradient-text">
          About Me
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-stretch">

        {/* LEFT CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="lg:col-span-4 bg-white rounded-2xl shadow-md p-5 md:p-7 flex flex-col items-center text-center gap-4 border border-pink-100"
        >
          {/* IMAGE */}
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-md">
            <img src={pratu} className="w-full h-full object-cover" alt="profile" />
          </div>

          <h1 className="text-lg md:text-xl font-bold text-gray-800">
            Pratiksha Dalal
          </h1>

          <p className="text-primary font-semibold text-sm">
            Full Stack Developer
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap justify-center gap-2">
            {['MERN Stack', 'Frontend Developer', 'UI/UX Design', 'HTML/CSS', 'React.js', 'Node.js'].map((tag) => (
              <span key={tag} className="glass-pill">
                {tag}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-3 mt-2">

            <a 
              href="tel:+919975451306"
              className="pink-btn flex items-center gap-2"
            >
              <Phone size={14} /> Contact
            </a>

            <a 
             href="/portfolio-website/pratiksha resume.pdf"
              download
              className="px-4 py-2 rounded-full border border-pink-200 text-gray-700 hover:bg-pink-50 transition flex items-center gap-2"
            >
              <Download size={14} /> Resume
            </a>

          </div>

          {/* SOCIAL */}
          <div className="flex gap-3 mt-2">
            {[
              {
                icon: Linkedin,
                link: "https://linkedin.com/in/pratiksha-dalal-66020b251",
                hover: "hover:bg-[#0077b5]"
              },
              {
                icon: Instagram,
                link: "https://www.instagram.com/pratikshadalal_?igsh=NXVuMHJjd2QwdGRu&utm_source=qr",
                hover: "hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500"
              },
              {
                icon: Github,
                link: "https://github.com/pratikshadalal168",
                hover: "hover:bg-gray-800"
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-pink-50 transition-all duration-300 hover:scale-110 ${item.hover}`}
                >
                  <Icon size={16} className="text-primary" />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-8 space-y-5">

          <motion.div className="bg-white rounded-2xl shadow-md p-5 md:p-7 border border-pink-100">
            <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3">
              A Little Bit About Me
            </h3>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-2">
              I’m a MERN Stack Developer passionate about building responsive, scalable, and user-centric web applications. I specialize in React.js, Node.js, Express.js, MongoDB, and modern frontend technologies to create seamless digital experiences.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              With hands-on experience in full-stack development, API integration, authentication systems, and deployment, I enjoy transforming ideas into efficient and impactful solutions while continuously learning and improving my craft.
            </p>
          </motion.div>

          {/* HIGHLIGHTS */}
          <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
            {highlights.map((item, i) => (
              <div 
                key={i}
                className="bg-white rounded-xl shadow-sm p-4 md:p-5 flex flex-col gap-2 border border-pink-100 hover:shadow-md transition"
              >
                <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-2 rounded-lg w-fit text-white">
                  {item.icon}
                </div>

                <h4 className="text-sm font-semibold text-gray-800">
                  {item.title}
                </h4>

                <p className="text-xs text-gray-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}