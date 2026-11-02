import React from 'react';
import { BookOpen, FolderArchive } from 'lucide-react';
import { studentInfo } from '../data/portfolioData';

export default function Navbar({ onOpenAllPdfs }) {
  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 bg-[#090e1a]/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight text-white">NLPFolio</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-medium border border-indigo-500/30">
                Explorer
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">VIT Computational Linguistics & NLP</p>
          </div>
        </div>

        {/* Center Pill: Student Info */}
        <div className="hidden md:flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs">
          <span className="font-semibold text-slate-200">{studentInfo.name}</span>
          <span className="text-slate-500">|</span>
          <span className="font-mono text-indigo-400 font-medium">{studentInfo.rollNo}</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-400">{studentInfo.degree}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenAllPdfs}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 transition shadow-sm"
          >
            <FolderArchive className="w-4 h-4 text-indigo-400" />
            <span>PDF Documents</span>
            <span className="px-1.5 py-0.2 rounded bg-indigo-900/60 text-indigo-300 text-[10px] font-bold">6</span>
          </button>
        </div>
      </div>
    </header>
  );
}
