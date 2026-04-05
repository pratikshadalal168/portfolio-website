import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail, Download, CheckCircle2 } from 'lucide-react';

export default function ProfileSpotlight() {
  return (
    <section id="home" className="pt-32 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          {/* Intro & Highlights */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
          >
            {/* Decorative Background Glows */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/10 blur-[100px] -z-10" />

            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 flex items-center gap-4">
                  <span className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center text-lg shadow-lg shadow-primary/20">👋</span>
                  Hello, I'm Pratiksha
                </h2>
                <p className="text-text-muted leading-relaxed mb-10 text-xl max-w-2xl">
                  A passionate <span className="text-white font-semibold">Full Stack Developer</span> with over 5 years of experience crafting high-performance web applications. I specialize in building scalable architectures and intuitive user interfaces that solve complex problems.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    { title: 'Clean Architecture', desc: 'Maintainable & scalable codebases' },
                    { title: 'User Centric', desc: 'Focus on accessibility & UX' },
                    { title: 'Performance', desc: 'Optimized for speed & SEO' },
                    { title: 'Collaboration', desc: 'Agile & team-oriented' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="mt-1 text-primary group-hover:scale-110 transition-transform">
                        <CheckCircle2 size={22} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-1 text-lg group-hover:text-primary transition-colors">{item.title}</h4>
                        <p className="text-text-muted text-sm leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Small Image in Home Section */}
              <div className="lg:col-span-4 hidden lg:block">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative glass-card rounded-[2.5rem] p-3">
                    <div className="rounded-[2rem] overflow-hidden aspect-square border border-white/10">
                      <img 
                        src="https://picsum.photos/seed/home-dev/600/600" 
                        alt="Developer at work" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { label: 'Years of Experience', value: '5+' },
              { label: 'Projects Completed', value: '40+' },
              { label: 'Happy Clients', value: '25+' },
            ].map((stat, i) => (
              <div key={i} className="glass-card rounded-3xl p-8 text-center group hover:border-primary/50 transition-colors">
                <div className="text-3xl font-extrabold text-white mb-2 group-hover:gradient-text transition-all">{stat.value}</div>
                <div className="text-xs font-bold text-text-muted uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
