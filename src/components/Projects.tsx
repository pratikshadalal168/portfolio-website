// import { useState } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { ExternalLink, Github } from 'lucide-react';

// export default function Projects() {
//   const [filter, setFilter] = useState('All');

//   const projects = [
//     {
//       title: 'E-Commerce Platform',
//       category: 'Web App',
//       image: 'https://picsum.photos/seed/shop/800/600',
//       desc: 'A full-featured online store with cart and payment integration.',
//       tech: ['React', 'Node.js', 'MongoDB'],
//       links: { live: '#', github: '#' },
//     },
//     {
//       title: 'Task Manager',
//       category: 'Web App',
//       image: 'https://picsum.photos/seed/task/800/600',
//       desc: 'A collaborative task management tool with real-time updates.',
//       tech: ['Next.js', 'Firebase', 'Tailwind'],
//       links: { live: '#', github: '#' },
//     },
//     {
//       title: 'Portfolio Design',
//       category: 'UI/UX',
//       image: 'https://picsum.photos/seed/design/800/600',
//       desc: 'Modern and minimalist portfolio design for creatives.',
//       tech: ['Figma', 'React', 'Framer Motion'],
//       links: { live: '#', github: '#' },
//     },
//   ];

//   const categories = ['All', 'Web App', 'UI/UX', 'Mobile'];
//   const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

//   return (
//     <div className="section-container">
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
//         <div>
//           <div className="flex items-center gap-3 mb-4">
//             <span className="text-primary font-mono text-sm">03.</span>
//             <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
//             <div className="h-px w-32 bg-white/10" />
//           </div>
//           <p className="text-text-muted">A collection of things I've built with passion.</p>
//         </div>

//         <div className="flex flex-wrap gap-2">
//           {categories.map(cat => (
//             <button
//               key={cat}
//               onClick={() => setFilter(cat)}
//               className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
//                 filter === cat 
//                   ? 'bg-primary text-white glow-primary' 
//                   : 'bg-white/5 text-text-muted border border-white/10 hover:border-primary/50'
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         <AnimatePresence mode="popLayout">
//           {filteredProjects.map((project, i) => (
//             <motion.div
//               key={project.title}
//               layout
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               transition={{ duration: 0.3 }}
//               className="group glass-card rounded-2xl overflow-hidden border border-white/10 transition-all"
//             >
//               <div className="relative aspect-video overflow-hidden">
//                 <img 
//                   src={project.image} 
//                   alt={project.title} 
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   referrerPolicy="no-referrer"
//                 />
//                 <div className="absolute inset-0 bg-bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
//                   <a href={project.links.github} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors">
//                     <Github size={20} />
//                   </a>
//                   <a href={project.links.live} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors">
//                     <ExternalLink size={20} />
//                   </a>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2 block">{project.category}</span>
//                 <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
//                 <p className="text-text-muted text-sm mb-4 line-clamp-2">{project.desc}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.map(t => (
//                     <span key={t} className="text-[10px] font-mono text-text-muted">{t}</span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }
