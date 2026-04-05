import { motion } from 'framer-motion';
import { Database, Layout, Settings, Code, Users } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Layout size={20} />,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion'],
    },
    {
      title: 'Backend',
      icon: <Database size={20} />,
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Supabase', 'Firebase'],
    },
    {
      title: 'Tools',
      icon: <Settings size={20} />,
      skills: ['Git', 'GitHub', 'AWS', 'Canva', 'Vercel', 'VS Code', 'Postman'],
    },
    {
      title: 'Programming Languages',
      icon: <Code size={20} />, // ✅ changed
      skills: ['JavaScript', 'TypeScript', 'Java'],
    },
    {
      title: 'Soft Skills',
      icon: <Users size={20} />, // ✅ changed
      skills: [
        'Communication',
        'Teamwork',
        'Problem Solving',
        'Debugging',
        'Adaptability',
        'Time Management',
      ],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-24 section-container !py-10 md:!py-12 bg-gradient-to-b from-[#faf7ff] to-[#fdf2f8] rounded-[40px] shadow-inner">

      {/* HEADING CENTER */}
      <div className="flex flex-col items-center text-center mb-10 md:mb-12">

        {/* CAPSULE */}
        <span className="glass-pill mb-3">
          My Skills
        </span>

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-extrabold gradient-text">
          Technical Skills
        </h2>

        {/* LINE */}
        <div className="h-[2px] w-24 mt-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 flex flex-col gap-4"
          >

            {/* ICON */}
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-3 rounded-xl w-fit text-white shadow-md">
              {category.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-gray-800">
              {category.title}
            </h3>

            {/* SKILLS */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium rounded-full border border-pink-200 bg-pink-50 text-purple-600 hover:bg-pink-100 transition"
                >
                  {skill}
                </span>
              ))}
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}