import React from 'react';
import { 
  BookOpen, 
  FileText, 
  Sparkles, 
  ChevronRight,
  GraduationCap,
  Calendar,
  Layers
} from 'lucide-react';
import { studentInfo } from '../data/portfolioData';

export default function Hero({ onOpenCapstone, onOpenAllPdfs }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 border-b border-slate-800/60">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Student Photo Card (VIT verified removed) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group">
              {/* Outer decorative gradient frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
              
              <div className="relative w-64 sm:w-72 rounded-2xl bg-slate-900 p-3 shadow-2xl border border-slate-800 text-center">
                {/* Photo container */}
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-slate-950 mb-3 border border-slate-800/80">
                  <img
                    src={studentInfo.photo}
                    alt={studentInfo.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                </div>

                {/* Identity Information */}
                <div className="px-1 py-1">
                  <h3 className="font-bold text-lg text-white tracking-wide">
                    {studentInfo.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30">
                      {studentInfo.rollNo}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium mt-1.5">
                    {studentInfo.degree}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    School of Computer Science & Engg (SCOPE)
                  </p>
                  <div className="mt-2.5 pt-2.5 border-t border-slate-800/80 flex items-center justify-center gap-1 text-[11px] text-indigo-400 font-medium">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Vellore Institute of Technology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Information */}
          <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
            {/* Top pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Digital Assignment & J-Component Capstone Portfolio</span>
            </div>

            {/* Course Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Natural Language Processing & <br className="hidden sm:inline" />
                <span className="text-gradient-primary">Computational Linguistics</span>
              </h1>
              <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Academic digital portfolio showcasing applied research in 
                <span className="text-indigo-300 font-medium"> Multimodal Contradiction Detection</span>, 
                <span className="text-cyan-300 font-medium"> European NLP Research Labs</span>, 
                <span className="text-emerald-300 font-medium"> Classical Thirukkural Translation Benchmarking</span>, 
                and <span className="text-purple-300 font-medium">Epidemiological NLP Surveillance</span>.
              </p>
            </div>

            {/* Academic Details - Course Slot & Term */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0">
              <div className="glass-panel p-3.5 rounded-xl border border-indigo-500/30 bg-slate-900/80">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5 mb-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Course Slot & Term</span>
                </span>
                <span className="text-sm font-bold text-white block">
                  Slot F1 + TF1 (J-Component) • Fall Semester 2026–27
                </span>
              </div>
              <div className="glass-panel p-3.5 rounded-xl border border-slate-800 bg-slate-900/80">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-1">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Faculty Supervisor</span>
                </span>
                <span className="text-sm font-bold text-slate-200 block">
                  {studentInfo.facultyGuide}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onOpenCapstone}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 transition duration-200"
              >
                <span>View J-Component Capstone</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenAllPdfs}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 font-medium text-sm border border-slate-700/80 transition duration-200"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Open PDF Document Viewer</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
