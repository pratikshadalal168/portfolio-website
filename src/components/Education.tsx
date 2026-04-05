import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      title: 'B.Tech in Electrical Engineering',
      institute: 'GHRCEMN',
      duration: '2022 - 2026',
      icon: <GraduationCap size={20} />,
    },
    {
      title: 'Senior Secondary (Science)',
      institute: 'School of Scholars (CBSE)',
      duration: '2020 - 2022',
      icon: <School size={20} />,
    },
    {
      title: 'Secondary',
      institute: 'School of Scholars (CBSE',
      duration: '2018 - 2020',
      icon: <BookOpen size={20} />,
    },
  ];

  return (
    <section id="education" className="scroll-mt-24 section-container !py-10 md:!py-12 bg-gradient-to-b from-[#faf7ff] to-[#fdf2f8] rounded-[40px] shadow-inner">

      {/* HEADING */}
      <div className="flex flex-col items-center text-center mb-10 md:mb-12">
        <span className="glass-pill mb-3">My Education</span>

        <h2 className="text-3xl md:text-5xl font-extrabold gradient-text">
          Education
        </h2>

        <div className="h-[2px] w-24 mt-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {educationData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 flex flex-col gap-4"
          >
            {/* ICON */}
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-3 rounded-xl w-fit text-white shadow-md">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h3>

            {/* INSTITUTE */}
            {item.institute && (
              <p className="text-sm text-gray-600">
                {item.institute}
              </p>
            )}

            {/* DURATION */}
            <span className="px-3 py-1 text-xs font-medium rounded-full border border-pink-200 bg-pink-50 text-purple-600 w-fit">
              {item.duration}
            </span>

          </motion.div>
        ))}
      </div>

    </section>
  );
}