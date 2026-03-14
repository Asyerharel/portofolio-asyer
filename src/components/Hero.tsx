import { motion } from "motion/react";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(59,130,246,0.15)_0%,_transparent_60%)] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 border border-blue-500/20"
        >
          <Terminal size={14} />
          <span>Cybersecurity & AI Enthusiast</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Asyer Harel</span>
          <br />Thaddeus Latuharhary
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
        >
          I'm passionate about building secure systems and leveraging artificial intelligence to solve complex problems. 
          Continuously learning and exploring the intersections of cybersecurity and data science.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#certificates" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-medium hover:bg-slate-100 transition-colors">
            View My Work
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-700 transition-colors border border-slate-700">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
