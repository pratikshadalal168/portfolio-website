import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 min-h-screen flex items-center justify-center soft-bg px-6">

      {/* MAIN CARD */}
      <div className="max-w-6xl w-full bg-white rounded-[40px] p-10 md:p-14 shadow-[0_30px_80px_rgba(244,114,182,0.25)]">

        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* LEFT IMAGE */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-[280px] h-[400px] bg-gradient-to-br from-pink-200 to-purple-200 rounded-[180px_180px_30px_30px] p-3">
              <div className="w-full h-full rounded-[160px_160px_20px_20px] overflow-hidden">
                <img
                  src="\Pratu 1.jpeg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:w-1/2 relative">

            {/* INNER CARD */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-[30px] p-8 pb-20 shadow-inner">

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-bold text-gray-800 mb-4"
              >
                Hello, I'm <br />
                <span className="gradient-text">Pratiksha Dalal</span>
              </motion.h1>

              <p className="text-gray-600 mb-6">
                Full Stack Developer creating aesthetic web experiences.
              </p>

              {/* ✅ UPDATED BUTTON */}
              <a href="#about" className="pink-btn inline-block">
                Learn More
              </a>

            </div>

            {/* 🔥 OVERLAP CARDS */}
            <div className="absolute left-0 right-0 -bottom-10 px-2">

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="bg-white rounded-2xl p-4 shadow-lg border border-pink-100 hover:-translate-y-1 transition">
                  <h4 className="font-semibold text-gray-800 text-sm">Clean Code</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Writing maintainable & readable software.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-4 shadow-lg border border-pink-100 hover:-translate-y-1 transition">
                  <h4 className="font-semibold text-gray-800 text-sm">User First</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Designing experiences people love.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-4 shadow-lg border border-pink-100 hover:-translate-y-1 transition">
                  <h4 className="font-semibold text-gray-800 text-sm">Fast Learner</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Quickly adapting to new technologies.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}