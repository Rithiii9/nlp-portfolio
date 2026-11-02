import React, { useState } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText, 
  Maximize2, 
  CheckCircle2, 
  FolderArchive,
  ChevronRight,
  BookOpen
} from 'lucide-react';

const allPdfList = [
  {
    id: "project",
    name: "NLP_Project_Writeup.pdf",
    title: "Capstone Project Writeup (Multimodal Contradiction)",
    folder: "Project",
    path: "/docs/NLP_Project_Writeup.pdf",
    pages: "7 Pages",
    badge: "J-Component"
  },
  {
    id: "case-study",
    name: "Case_Study.pdf",
    title: "EdinburghNLP Research Laboratory Case Study",
    folder: "Case Study",
    path: "/docs/Case_Study.pdf",
    pages: "8 Pages",
    badge: "Digital Assignment"
  },
  {
    id: "thirukural",
    name: "Thirukural Tanslation.pdf",
    title: "Thirukkural Couplet 500 LLM vs Human Benchmark",
    folder: "Kural Translation",
    path: "/docs/Thirukural_Translation.pdf",
    pages: "2 Pages",
    badge: "Translation Benchmark"
  },
  {
    id: "group-activity",
    name: "Group_Activity.pdf",
    title: "Dr. John Snow Broadway Map vs HealthMap",
    folder: "Group Activity",
    path: "/docs/Group_Activity.pdf",
    pages: "3 Pages",
    badge: "Group Activity"
  },
  {
    id: "song",
    name: "Song Translation.pdf",
    title: "Bharathiyar 'Kaakkai Siraginile' Song Translation",
    folder: "Song Translation",
    path: "/docs/Song_Translation.pdf",
    pages: "1 Page",
    badge: "Tamil Poetry"
  },
  {
    id: "idioms",
    name: "IDIOMS.pdf",
    title: "Idiom Pragmatics ('Taste of Your Own Medicine')",
    folder: "Idioms",
    path: "/docs/IDIOMS.pdf",
    pages: "1 Page",
    badge: "Pragmatics"
  }
];

export default function PdfViewerModal({ isOpen, onClose, initialPdfPath, title }) {
  if (!isOpen) return null;

  // Determine active PDF
  const [activePdf, setActivePdf] = useState(() => {
    const found = allPdfList.find(p => p.path === initialPdfPath);
    return found || allPdfList[0];
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-6xl h-[92vh] flex flex-col rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden">
        
        {/* Modal Top Header */}
        <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm sm:text-base text-white truncate">
                  {activePdf.title}
                </h3>
                <span className="hidden sm:inline-block text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {activePdf.pages}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono truncate">
                Folder: {activePdf.folder}/ • File: {activePdf.name}
              </p>
            </div>
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={activePdf.path}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
              title="Open in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden sm:inline">New Tab</span>
            </a>

            <a
              href={activePdf.path}
              download={activePdf.name}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 text-xs font-semibold border border-emerald-500/30 transition"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Download</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 border border-slate-700/80 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Switcher Strip */}
        <div className="bg-slate-950/70 border-b border-slate-800/80 px-4 py-2 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 shrink-0 flex items-center gap-1 mr-1">
            <FolderArchive className="w-3.5 h-3.5" />
            <span>Select PDF:</span>
          </span>
          {allPdfList.map((pdf) => {
            const isActive = activePdf.id === pdf.id;
            return (
              <button
                key={pdf.id}
                onClick={() => setActivePdf(pdf)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-800/70 text-slate-400 hover:text-slate-200 hover:bg-slate-700/70 border border-slate-700/50'
                }`}
              >
                <span>{pdf.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded ${
                  isActive ? 'bg-indigo-700 text-indigo-100' : 'bg-slate-900 text-slate-400'
                }`}>
                  {pdf.pages}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main PDF Frame */}
        <div className="flex-1 w-full bg-slate-950 relative overflow-hidden flex flex-col">
          <iframe
            key={activePdf.path}
            src={`${activePdf.path}#toolbar=1&view=FitH`}
            title={activePdf.title}
            className="w-full h-full border-none"
          />
        </div>

        {/* Bottom Status Bar */}
        <div className="px-5 py-2.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Official Academic Document • Course Deliverable</span>
          </div>
          <div className="font-mono text-slate-500 text-[11px]">
            RITHIKA M (23MIC0072) • Integrated M.Tech CSE
          </div>
        </div>

      </div>
    </div>
  );
}

