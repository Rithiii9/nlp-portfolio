import React, { useState } from 'react';
import { 
  X, 
  Languages, 
  FileText, 
  Download, 
  CheckCircle2, 
  Sparkles, 
  Scale, 
  Award,
  BookOpen,
  ArrowRightLeft
} from 'lucide-react';

export default function KuralTranslationModal({ isOpen, onClose, onOpenPdf }) {
  if (!isOpen) return null;

  const rubrics = [
    { criterion: "Translation Accuracy", llm: 9, human: 10, max: 10, notes: "Human captures archaic nuances precisely." },
    { criterion: "Lexical Faithfulness", llm: 8, human: 10, max: 10, notes: "Human retains fen/mire and tusks imagery." },
    { criterion: "Semantic Preservation", llm: 9, human: 10, max: 10, notes: "Both correctly convey situational disadvantage." },
    { criterion: "Cultural & Metaphoric Tone", llm: 8, human: 10, max: 10, notes: "Human captures Sangam martial gravity." },
    { criterion: "Grammatical Correctness", llm: 10, human: 9, max: 10, notes: "LLM uses flawless standard modern syntax." },
    { criterion: "Naturalness in English", llm: 9, human: 8, max: 10, notes: "LLM feels more approachable to contemporary readers." },
    { criterion: "Fluency & Readability", llm: 10, human: 9, max: 10, notes: "LLM prose flows effortlessly." },
    { criterion: "Poetic Quality & Rhythm", llm: 6, human: 10, max: 10, notes: "Human translation preserves meter and end-rhyme." }
  ];

  const llmTotal = rubrics.reduce((acc, r) => acc + r.llm, 0); // 69
  const humanTotal = rubrics.reduce((acc, r) => acc + r.human, 0); // 76
  const maxTotal = rubrics.length * 10; // 80

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl h-[92vh] flex flex-col rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
              <Languages className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Translation Benchmark
                </span>
                <span className="text-xs text-slate-400 font-mono">Thirukkural • Couplet 500</span>
              </div>
              <h2 className="text-lg font-bold text-white mt-0.5">
                Human Poetic vs. LLM Neural Machine Translation
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenPdf('/docs/Thirukural_Translation.pdf', 'Thirukkural Translation Benchmark PDF')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Read PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 border border-slate-700 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Classical Tamil Verse Showcase */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 p-6 border border-emerald-500/30 text-center">
            <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 inline-block mb-3">
              திருக்குறள் — குறள் 500 (பொருட்பால் • இடனறிதல்)
            </span>
            <blockquote className="font-serif text-lg sm:text-2xl text-emerald-100 font-medium leading-relaxed tracking-wide">
              "காலாழ் களரின் நரியடும் கண்ணஞ்சா <br />
              வேலாள் முகத்த களிறு"
            </blockquote>
            <p className="text-xs text-slate-400 mt-2 font-mono">
              Author: திருவள்ளுவர் (Tiruvalluvar) • Classical Tamil Heritage (~31 BCE)
            </p>

            <div className="mt-4 pt-4 border-t border-slate-800/80 max-w-2xl mx-auto text-xs text-slate-300 leading-relaxed text-left bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <strong className="text-emerald-400">Core Strategic Meaning:</strong> Even an indomitable war elephant capable of braving spear-hurling warriors can be overcome and slain by a humble jackal if trapped in treacherous, sinking mud. Physical dominance is futile without tactical positioning.
            </div>
          </div>

          {/* Side-by-Side Comparison Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* LLM Neural Translation */}
            <div className="glass-panel rounded-2xl p-5 border border-indigo-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                    Modern LLM Neural Translation
                  </span>
                  <div className="text-right">
                    <span className="text-lg font-extrabold text-indigo-300">{((llmTotal/maxTotal)*100).toFixed(1)}%</span>
                    <span className="text-[10px] text-slate-400 block font-mono">69 / 80 pts</span>
                  </div>
                </div>

                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-sm text-slate-200 leading-relaxed italic">
                  "A fearless elephant, capable of defeating spear-wielding warriors, can be killed even by a jackal when it gets trapped in deep, sinking mud."
                </div>

                <div className="mt-3 text-xs text-slate-400 space-y-1">
                  <div className="flex items-center gap-1.5 text-indigo-300">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Simple, clear, and direct modern prose</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <span>• Lacks poetic meter and classical rhyming cadence</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Human Poetic Translation (G.U. Pope) */}
            <div className="glass-panel rounded-2xl p-5 border border-emerald-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    Rev. Dr. G. U. Pope Translation (1886)
                  </span>
                  <div className="text-right">
                    <span className="text-lg font-extrabold text-emerald-300">{((humanTotal/maxTotal)*100).toFixed(1)}%</span>
                    <span className="text-[10px] text-slate-400 block font-mono">76 / 80 pts</span>
                  </div>
                </div>

                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-sm text-emerald-100 leading-relaxed font-serif italic">
                  "The jackal slays, in miry paths of foot-betraying fen,<br />
                  The elephant of fearless eye and tusks transfixing armed men."
                </div>

                <div className="mt-3 text-xs text-slate-400 space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Preserves rhyming couplet meter (fen / men)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <span>• Uses classical English ('miry paths', 'foot-betraying fen')</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* 8-Criteria Linguistic Quality Dimension Comparison */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-800">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-emerald-400" />
                <span>8-Criteria Linguistic Quality Evaluation</span>
              </span>
              <span className="text-xs font-mono text-slate-400">
                Scale: 1 to 10 per criterion
              </span>
            </h4>

            <div className="space-y-3">
              {rubrics.map((r, i) => (
                <div key={i} className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-200 mb-1.5">
                    <span>{r.criterion}</span>
                    <div className="flex items-center gap-4 font-mono text-[11px]">
                      <span className="text-indigo-400">LLM: {r.llm}/10</span>
                      <span className="text-emerald-400 font-bold">Human: {r.human}/10</span>
                    </div>
                  </div>

                  {/* Dual Bar Progress */}
                  <div className="grid grid-cols-2 gap-2 mb-1">
                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-indigo-500 h-1.5 rounded-full transition-all duration-500" 
                        style={{ width: `${(r.llm / 10) * 100}%` }}
                      />
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-emerald-500 h-1.5 rounded-full transition-all duration-500" 
                        style={{ width: `${(r.human / 10) * 100}%` }}
                      />
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 italic">
                    {r.notes}
                  </p>
                </div>
              ))}
            </div>

            {/* Total Row */}
            <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between px-2 text-xs">
              <span className="font-bold text-slate-300">Composite Score Comparison:</span>
              <div className="flex items-center gap-6">
                <span className="text-indigo-300 font-mono font-bold">
                  LLM Total: {llmTotal}/80 (86.25%)
                </span>
                <span className="text-emerald-400 font-mono font-bold">
                  Human Total: {humanTotal}/80 (95.00%)
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-400">
            Natural Language Processing and Computational Linguistics • Classical Translation Benchmark
          </span>
          <button
            onClick={() => onOpenPdf('/docs/Thirukural_Translation.pdf', 'Thirukkural Translation Benchmark PDF')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md transition"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Open Benchmark PDF</span>
          </button>
        </div>

      </div>
    </div>
  );
}

