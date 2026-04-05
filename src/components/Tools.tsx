// import { motion } from 'motion/react';
// import { 
//   SiReact, SiNodedotjs, SiVercel, SiDocker, 
//   SiFigma, SiTailwindcss, SiTypescript, SiMongodb,
//   SiNextdotjs, SiPostgresql, SiGithub, SiFramer
// } from 'react-icons/si';

// export default function Tools() {
//   const tools = [
//     { name: 'React', icon: <SiReact />, color: '#61DAFB' },
//     { name: 'Next.js', icon: <SiNextdotjs />, color: '#FFFFFF' },
//     { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
//     { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
//     { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
//     { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
//     { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
//     { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
//     { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
//     { name: 'Framer', icon: <SiFramer />, color: '#0055FF' },
//     { name: 'GitHub', icon: <SiGithub />, color: '#FFFFFF' },
//     { name: 'Vercel', icon: <SiVercel />, color: '#FFFFFF' },
//   ];

//   return (
//     <section id="tools" className="section-container overflow-hidden">
//       <div className="flex flex-col items-center text-center mb-16">
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="glass-pill text-secondary mb-4 tracking-widest uppercase text-[10px] font-bold border-secondary/20"
//         >
//           My Toolbox
//         </motion.div>
//         <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
//           Technologies I <span className="gradient-text">Master</span>
//         </h2>
//         <p className="text-text-muted max-w-2xl leading-relaxed text-lg">
//           The modern tech stack I use to build scalable, high-performance digital products.
//         </p>
//       </div>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
//         {tools.map((tool, i) => (
//           <motion.div
//             key={tool.name}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.05 }}
//             whileHover={{ y: -8 }}
//             className="group relative"
//           >
//             {/* Hover Glow Effect */}
//             <div 
//               className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"
//               style={{ backgroundColor: tool.color }}
//             />
            
//             <div className="relative glass-card rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 border-white/5 group-hover:border-white/20 transition-all duration-500 overflow-hidden">
//               {/* Animated Background Accent */}
//               <div 
//                 className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"
//                 style={{ backgroundColor: tool.color }}
//               />

//               <div 
//                 className="text-4xl md:text-5xl text-text-muted group-hover:scale-110 transition-all duration-500"
//                 style={{ color: tool.color }}
//               >
//                 {tool.icon}
//               </div>
              
//               <span className="text-[10px] md:text-xs font-bold text-text-muted uppercase tracking-widest group-hover:text-white transition-colors">
//                 {tool.name}
//               </span>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Subtle Background Decoration */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] -z-10 rounded-full pointer-events-none" />
//     </section>
//   );
// }
