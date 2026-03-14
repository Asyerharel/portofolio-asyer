import { motion } from "motion/react";
import { Award, Calendar, Shield, Database, MessageSquare, ExternalLink, FileText, Code, Brain } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Basic Cybersecurity",
    issuer: "CODEPOLITAN (JagoanSiber)",
    date: "12 March 2026",
    credentialId: "CPJS-CR/2026/III/0259",
    icon: Shield,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    gradient: "from-emerald-900/40 to-slate-900",
    shadow: "hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.3)]",
    pdfUrl: "/certificates/basic-cybersecurity.pdf"
  },
  {
    id: 2,
    title: "Merancang Percakapan Cerdas di Azure AI Foundry",
    issuer: "Microsoft Elevate Training Center",
    date: "06 Maret 2026",
    credentialId: "elevate/certificate/2026/ONL53GL8M3",
    icon: MessageSquare,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    gradient: "from-blue-900/40 to-slate-900",
    shadow: "hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.3)]",
    pdfUrl: "/certificates/azure-ai.pdf"
  },
  {
    id: 3,
    title: "Mempersiapkan Data untuk Model AI di Microsoft Fabric",
    issuer: "Microsoft Elevate Training Center",
    date: "18 Februari 2026",
    credentialId: "elevate/certificate/2026/ONLJ9Z4M7T",
    icon: Database,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
    gradient: "from-purple-900/40 to-slate-900",
    shadow: "hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]",
    pdfUrl: "/certificates/microsoft-fabric.pdf"
  },
  {
    id: 4,
    title: "Belajar Penerapan Data Science dengan Microsoft Fabric",
    issuer: "Dicoding Indonesia",
    date: "27 Februari 2026",
    credentialId: "MEPJOE3YLZ3V",
    icon: Database,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    border: "border-indigo-400/20",
    gradient: "from-indigo-900/40 to-slate-900",
    shadow: "hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]",
    pdfUrl: "/certificates/data-science-fabric.pdf"
  },
  {
    id: 5,
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    date: "04 Maret 2026",
    credentialId: "4EXG19QLDPRL",
    icon: Code,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
    gradient: "from-yellow-900/40 to-slate-900",
    shadow: "hover:shadow-[0_0_30px_-5px_rgba(250,204,21,0.3)]",
    pdfUrl: "/certificates/python-programming.pdf"
  },
  {
    id: 6,
    title: "Membangun Aplikasi Gen AI dengan Microsoft Azure",
    issuer: "Dicoding Indonesia",
    date: "03 Maret 2026",
    credentialId: "98XW04RJLXM3",
    icon: Brain,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
    gradient: "from-cyan-900/40 to-slate-900",
    shadow: "hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)]",
    pdfUrl: "/certificates/gen-ai-azure.pdf"
  }
];

export function Certificates() {
  return (
    <section id="certificates" className="py-32 relative overflow-hidden">
      {/* Background ambient effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Certifications & Achievements
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of my continuous learning journey in cybersecurity, artificial intelligence, and data science.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 hover:border-slate-600/50 ${cert.shadow} group`}
            >
              <div className={`h-40 relative overflow-hidden flex items-center justify-center border-b border-slate-700/50 bg-gradient-to-br ${cert.gradient}`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.2)_0%,_transparent_100%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                
                <div className={`relative w-20 h-20 rounded-2xl ${cert.bg} ${cert.color} flex items-center justify-center border ${cert.border} z-10 shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <cert.icon size={40} className="drop-shadow-lg" />
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow relative">
                {/* Subtle glow behind text on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-b ${cert.gradient} transition-opacity duration-500`} />
                
                <h3 className="text-xl font-bold text-slate-100 mb-3 line-clamp-2 group-hover:text-white transition-colors relative z-10">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-8 relative z-10">
                  <Award size={16} className={cert.color} />
                  <span className="font-medium">{cert.issuer}</span>
                </div>

                <a 
                  href={cert.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 w-full mb-8 relative z-10 bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600 group/btn`}
                >
                  <FileText size={16} className={cert.color} />
                  <span>View Certificate</span>
                  <ExternalLink size={14} className="opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                </a>
                
                <div className="mt-auto pt-5 border-t border-slate-800 relative z-10">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 px-3 py-1.5 rounded-lg">
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                    <div className="text-slate-500 font-mono text-xs truncate max-w-[120px]" title={cert.credentialId}>
                      ID: {cert.credentialId.split('/').pop()}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
