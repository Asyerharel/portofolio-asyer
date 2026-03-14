import { motion } from "motion/react";
import { Mail, Linkedin, ArrowRight, Sparkles } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden border-t border-slate-800/50 bg-slate-900/20">
      {/* Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] pointer-events-none">
        <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white flex items-center justify-center gap-3">
            Let's Connect <Sparkles className="text-blue-400" size={32} />
          </h2>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full max-w-2xl">
            {/* Email Button */}
            <a 
              href="mailto:asyerharel@gmail.com" 
              className="group relative flex items-center gap-4 px-8 py-4 bg-slate-800/50 hover:bg-blue-500/10 border border-slate-700 hover:border-blue-500/50 rounded-2xl transition-all duration-300 w-full sm:w-auto overflow-hidden text-left"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <div className="w-12 h-12 shrink-0 rounded-full bg-slate-900 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-sm text-slate-400 mb-0.5">Drop me an email</div>
                <div className="text-slate-200 font-medium group-hover:text-blue-400 transition-colors">asyerharel@gmail.com</div>
              </div>
            </a>

            {/* LinkedIn Button */}
            <a 
              href="https://www.linkedin.com/in/asyer-harel-b28070209/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative flex items-center gap-4 px-8 py-4 bg-slate-800/50 hover:bg-blue-600/10 border border-slate-700 hover:border-blue-600/50 rounded-2xl transition-all duration-300 w-full sm:w-auto overflow-hidden text-left"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <div className="w-12 h-12 shrink-0 rounded-full bg-slate-900 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Linkedin size={24} />
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-sm text-slate-400 mb-0.5">Connect on</div>
                  <div className="text-slate-200 font-medium group-hover:text-blue-500 transition-colors">LinkedIn</div>
                </div>
                <ArrowRight size={18} className="text-slate-500 group-hover:text-blue-500 group-hover:translate-x-1 transition-all ml-2" />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
