/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from "./components/Hero";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-white">
            A<span className="text-blue-500">H</span>TL.
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#certificates" className="hover:text-white transition-colors">Certificates</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>
      
      <main className="pt-16">
        <Hero />
        <Certificates />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800">
        <p>© {new Date().getFullYear()} Asyer Harel Thaddeus Latuharhary. All rights reserved.</p>
      </footer>
    </div>
  );
}
