import React from 'react';
import { 
  BookOpen, 
  ArrowUp, 
  Calendar, 
  UserCheck 
} from 'lucide-react';
import { studentInfo } from '../data/portfolioData';

export default function Footer({ onOpenAllPdfs }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#070A12] mt-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-base text-white tracking-tight">NLPFolio Explorer</span>
                <span className="text-xs text-indigo-400 ml-2 font-mono">• VIT SCOPE</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Digital Academic Submission by <strong className="text-slate-200">{studentInfo.name}</strong> ({studentInfo.rollNo}), {studentInfo.degree}, School of Computer Science and Engineering, Vellore Institute of Technology (VIT).
            </p>

            <div className="pt-1 text-xs text-slate-400 font-medium">
              Course: <span className="text-slate-200">{studentInfo.course}</span>
            </div>
            <div className="text-xs text-indigo-300 font-medium">
              Course Slot & Term: {studentInfo.slot} • {studentInfo.academicYear}
            </div>
          </div>

          {/* Col 2: Core Deliverables */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Deliverables
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button onClick={onOpenAllPdfs} className="hover:text-indigo-400 transition">
                  • Capstone Project Writeup (.pdf)
                </button>
              </li>
              <li>
                <button onClick={onOpenAllPdfs} className="hover:text-indigo-400 transition">
                  • EdinburghNLP Case Study (.pdf)
                </button>
              </li>
              <li>
                <button onClick={onOpenAllPdfs} className="hover:text-indigo-400 transition">
                  • Thirukkural Benchmark (.pdf)
                </button>
              </li>
              <li>
                <button onClick={onOpenAllPdfs} className="hover:text-indigo-400 transition">
                  • HealthMap Outbreak Radar (.pdf)
                </button>
              </li>
              <li>
                <button onClick={onOpenAllPdfs} className="hover:text-indigo-400 transition">
                  • Bharathiyar & Idioms (.pdf)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Supervision */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Supervision
            </h4>
            <div className="text-xs space-y-1.5">
              <div>Faculty Supervisor:</div>
              <div className="font-semibold text-slate-200">{studentInfo.facultyGuide}</div>
              <div className="text-slate-400 mt-1">School of Computer Science & Engg</div>
              <div className="text-slate-500">Vellore Institute of Technology</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} {studentInfo.name} ({studentInfo.rollNo}) • Vellore Institute of Technology. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
