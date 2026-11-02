import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Download, 
  ExternalLink, 
  Brain, 
  Network, 
  Camera, 
  Activity, 
  Layers, 
  Users, 
  CheckCircle2, 
  Presentation, 
  Code2, 
  BookOpen, 
  ShieldAlert,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function CapstoneDetailModal({ isOpen, onClose, onOpenPdf }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('architecture'); // 'architecture', 'objectives', 'slides', 'metrics'

  const objectives = [
    { id: "O1", title: "Facial & Body Extraction", desc: "OpenFace 2.0 Action Units (AU1, AU2, AU4, AU12, gaze, head pose) and MediaPipe body/hand landmarks with stringent coverage QC." },
    { id: "O2", title: "ELAN Temporal Alignment", desc: "Parse ELAN XML annotations; align utterances to frame spans and veracity intervals with a conservative boundary collision rule." },
    { id: "O3", title: "Masked Feature Tables", desc: "Build utterance-level feature aggregates with explicit masking and documentation of failed face/hand detection intervals." },
    { id: "O4", title: "Candidate Contradiction Pairs", desc: "Retrieve and label 59 ordered utterance pairs (3-way: Contradiction, Consistent, Neutral) while keeping veracity strictly decoupled." },
    { id: "O5", title: "Relational Dialogue Graph (R-GCN)", desc: "Construct a 59-node conversation graph encoding speaker turns and 6 relation types; train graph & text encoders with grouped CV." },
    { id: "O6", title: "Auditing & Failure Analysis", desc: "Empirically audit multimodal fusion baselines, documenting why naive early fusion without dense samples cannot outperform text." }
  ];

  const presentationSlides = [
    { num: 1, title: "Title & Authorship", desc: "Multimodal Contradiction & Behavioural Analysis in Human Conversations. Team: Rithika M (23MIC0072), Vinytha S V (23MIC0088). Guide: Dr. Sharmila Banu K." },
    { num: 2, title: "Aim and Objectives", desc: "Groundwork for detecting dialogue contradictions linking transcripts, dialogue graphs (R-GCN), and facial/body action units." },
    { num: 3, title: "Motivation & Responsible AI", desc: "Conversational agents contradict themselves; visual channels exist. Crucially: Facial analysis is not lie detection! Contradiction is in speech; behaviour is context." },
    { num: 4, title: "Literature Survey: Contradiction", desc: "SNLI (Bowman 2015), MultiNLI (Williams 2018), Dialogue NLI (Welleck 2019). Gaps: existing datasets lack turn graphs & visual channels." },
    { num: 5, title: "Literature Survey: Tools & Graphs", desc: "OpenFace 2.0 (Baltrušaitis 2018), MediaPipe (Lugaresi 2019), Relational GCN (Schlichtkrull 2018), DialogueGCN (Ghosal 2019)." },
    { num: 6, title: "Research Gaps Identified", desc: "Gap 1: No multimodal contradiction resource. Gap 2: Veracity vs contradiction conflated. Gap 3: Detection quality rarely reported. Gap 4: Structure & behaviour unmerged." },
    { num: 7, title: "Problem Formulation", desc: "Given ordered utterance pair (ui, uj), classify into CONTRADICTION (both cannot hold), CONSISTENT (follows logically), or NEUTRAL." },
    { num: 8, title: "Dataset & Video Corpus", desc: "Real dyadic conversation video: 375.008s at 29.97 fps (11,239 video frames). ELAN time tiers: Host_verbal, Guest_verbal, Veracity_description." },
    { num: 9, title: "OpenFace & MediaPipe Pipeline", desc: "11,239 x 334 OpenFace facial matrix; 3,747 x 496 MediaPipe landmark matrix. Frame-level valid mask calculation." },
    { num: 10, title: "Dialogue Graph Construction", desc: "59 utterance nodes connected via 472 directed edges across 6 relation types: Same-Speaker, Cross-Speaker, Immediate Preceding, Temporal Gap." },
    { num: 11, title: "Relational GCN Architecture", desc: "R-GCN neighborhood message passing propagating conversational history and inter-speaker dynamics prior to pair classification." },
    { num: 12, title: "Multimodal Feature Fusion", desc: "Text TF-IDF features + Graph embeddings + Masked facial AU aggregations (mean, max, std) combined via regularized classifiers." },
    { num: 13, title: "Grouped Cross-Validation", desc: "Strict utterance-group splitting to prevent data leakage between overlapping dialogue turns." },
    { num: 14, title: "Quantitative Results", desc: "Evaluation across pooled out-of-fold accuracy, macro-F1, and per-class recall for Consistent vs Neutral pairs." },
    { num: 15, title: "Error Analysis & Audits", desc: "Identified edge cases: silent speaker frames, subtle micro-expressions vs speaking movement, and lexical ambiguity." },
    { num: 16, title: "Ablation Studies", desc: "Ablating visual channel vs dialogue graph: Text + Graph provides strongest semantic signal on small-sample dialogue." },
    { num: 17, title: "Responsible AI & Ethics", desc: "Emphasizes that facial action units measure visible muscle activation only, not deception or moral veracity." },
    { num: 18, title: "Future Scope", desc: "Extending to 3-class contradiction detection with fine-tuned transformer dialogue backbones (RoBERTa / DeBERTa) and multi-party video." },
    { num: 19, title: "Conclusion & References", desc: "Summary of contributions: reproducible audited pipeline, transparent documentation of alignment edge-cases, and open code artifacts." }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl h-[92vh] flex flex-col rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  J-Component Capstone
                </span>
                <span className="text-xs text-slate-400 font-mono">Slot F1 + TF1 (J-Component) • Fall Semester 2026–27</span>
              </div>
              <h2 className="text-lg font-bold text-white mt-0.5">
                Multimodal Contradiction & Behavioural Analysis in Human Conversations
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenPdf('/docs/NLP_Project_Writeup.pdf', 'Project Writeup PDF')}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Read Full Paper (PDF)</span>
            </button>

            <a
              href="/docs/NLP_Presentation.pptx"
              download="NLP_Presentation.pptx"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
            >
              <Download className="w-3.5 h-3.5 text-indigo-400" />
              <span>Download PPTX</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 border border-slate-700 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-slate-950/70 border-b border-slate-800 px-6 py-2.5 flex items-center gap-3 overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeTab === 'architecture'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Architecture & Pipeline</span>
          </button>

          <button
            onClick={() => setActiveTab('objectives')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeTab === 'objectives'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Core Objectives (O1 - O6)</span>
          </button>

          <button
            onClick={() => setActiveTab('slides')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeTab === 'slides'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Presentation className="w-3.5 h-3.5" />
            <span>Presentation Deck (19 Slides)</span>
          </button>

          <button
            onClick={() => setActiveTab('metrics')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeTab === 'metrics'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Dataset & Audit Metrics</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* TAB 1: ARCHITECTURE & PIPELINE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              
              {/* Authors & Faculty Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-panel p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                    <Users className="w-4 h-4" />
                    <span>Project Investigators</span>
                  </div>
                  <div className="mt-2 space-y-1">
                    <div className="text-sm font-bold text-white flex items-center justify-between">
                      <span>Rithika M (Lead)</span>
                      <span className="font-mono text-xs text-indigo-300">23MIC0072</span>
                    </div>
                    <div className="text-sm font-semibold text-slate-300 flex items-center justify-between">
                      <span>Vinytha S V</span>
                      <span className="font-mono text-xs text-slate-400">23MIC0088</span>
                    </div>
                  </div>
                </div>

                <div className="glass-panel p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-wider">
                    <BookOpen className="w-4 h-4" />
                    <span>Faculty Supervision</span>
                  </div>
                  <div className="mt-2">
                    <div className="text-sm font-bold text-white">Dr. Sharmila Banu K</div>
                    <div className="text-xs text-slate-400 mt-0.5">Professor Grade 1, SCOPE, VIT Vellore</div>
                  </div>
                </div>
              </div>

              {/* End-to-End Pipeline Visualization Flowchart */}
              <div className="glass-panel p-5 rounded-2xl border border-indigo-500/20">
                <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-300 mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Multimodal Pipeline Architecture</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  
                  {/* Step 1 */}
                  <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 inline-block mb-2">
                        1. Raw Video & Audio
                      </span>
                      <h5 className="font-bold text-sm text-white">Conversation Recording</h5>
                      <p className="text-xs text-slate-400 mt-1">
                        375.008s video (11,239 frames @ 29.97 fps) with synchronized 2-party audio.
                      </p>
                    </div>
                    <div className="mt-3 text-[11px] font-mono text-slate-500">
                      Tier: Host & Guest Verbal
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 inline-block mb-2">
                        2. Feature Extraction
                      </span>
                      <h5 className="font-bold text-sm text-white">OpenFace & MediaPipe</h5>
                      <p className="text-xs text-slate-400 mt-1">
                        Extracts 334 facial AU/gaze features + 496 MediaPipe 3D body & hand landmarks.
                      </p>
                    </div>
                    <div className="mt-3 text-[11px] font-mono text-slate-500">
                      Quality: Masked & Audited
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 inline-block mb-2">
                        3. Dialogue Graph (R-GCN)
                      </span>
                      <h5 className="font-bold text-sm text-white">Relational Turn Graph</h5>
                      <p className="text-xs text-slate-400 mt-1">
                        59 nodes and 472 directed edges across 6 relational edge types connecting conversational history.
                      </p>
                    </div>
                    <div className="mt-3 text-[11px] font-mono text-slate-500">
                      Encoder: Relational GCN
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 inline-block mb-2">
                        4. Multimodal Inference
                      </span>
                      <h5 className="font-bold text-sm text-white">Pair Classification</h5>
                      <p className="text-xs text-slate-400 mt-1">
                        Classifies statement pairs into Contradiction, Consistent, or Neutral with decoupled veracity labels.
                      </p>
                    </div>
                    <div className="mt-3 text-[11px] font-mono text-slate-500">
                      Validation: Grouped CV
                    </div>
                  </div>

                </div>
              </div>

              {/* Ethical Decoupling Highlight */}
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-amber-200">
                    Scientific & Ethical Framing: Contradiction vs. Lie Detection
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    A crucial innovation of this paper is keeping the logical semantic contradiction label space strictly separate from subjective veracity labels. Computer vision toolkits like OpenFace and MediaPipe measure visible muscular activation and skeletal geometry — they are <strong>not</strong> honesty classifiers. Contradiction is framed strictly as an empirical property of dialogue statements.
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: OBJECTIVES */}
          {activeTab === 'objectives' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-400">
                The project addresses 6 formal research objectives (O1 to O6), executed with rigorous quality control and out-of-fold cross validation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {objectives.map((obj) => (
                  <div key={obj.id} className="glass-panel p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 font-bold font-mono text-xs flex items-center justify-center shrink-0 border border-indigo-500/30">
                      {obj.id}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white">{obj.title}</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">{obj.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: PRESENTATION SLIDES */}
          {activeTab === 'slides' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Full slide deck breakdown from <span className="font-mono text-indigo-300">NLP_Presentation.pptx</span> (19 Slides):
                </span>
                <a
                  href="/docs/NLP_Presentation.pptx"
                  download="NLP_Presentation.pptx"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-600/30 text-indigo-300 hover:text-white text-xs font-semibold border border-indigo-500/30 transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .PPTX</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {presentationSlides.map((slide) => (
                  <div key={slide.num} className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800 hover:border-slate-700 transition">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 font-bold border border-indigo-800/60">
                        Slide {slide.num} of 19
                      </span>
                    </div>
                    <h5 className="font-bold text-xs text-white line-clamp-1">{slide.title}</h5>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-3 leading-relaxed">
                      {slide.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: METRICS */}
          {activeTab === 'metrics' && (
            <div className="space-y-5">
              <h4 className="text-sm font-bold text-white">Pipeline Execution & Data Dimensions</h4>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="glass-panel p-3.5 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400">Video Duration</div>
                  <div className="text-base font-bold text-white mt-1">375.01 s</div>
                  <div className="text-[10px] text-indigo-400">11,239 frames @ 29.97 fps</div>
                </div>

                <div className="glass-panel p-3.5 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400">OpenFace Matrix</div>
                  <div className="text-base font-bold text-white mt-1">11,239 × 334</div>
                  <div className="text-[10px] text-cyan-400">Facial action units & gaze</div>
                </div>

                <div className="glass-panel p-3.5 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400">MediaPipe Landmarks</div>
                  <div className="text-base font-bold text-white mt-1">3,747 × 496</div>
                  <div className="text-[10px] text-purple-400">3D body pose + bilateral hands</div>
                </div>

                <div className="glass-panel p-3.5 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400">Dialogue Graph</div>
                  <div className="text-base font-bold text-white mt-1">59 Nodes / 472 Edges</div>
                  <div className="text-[10px] text-emerald-400">6 relational edge types</div>
                </div>
              </div>

              {/* File Artifacts table */}
              <div className="glass-panel rounded-xl overflow-hidden border border-slate-800">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] font-semibold border-b border-slate-800">
                    <tr>
                      <th className="py-2.5 px-4">Artifact Name</th>
                      <th className="py-2.5 px-4">Format</th>
                      <th className="py-2.5 px-4">Dimensions / Scope</th>
                      <th className="py-2.5 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    <tr>
                      <td className="py-2 px-4 font-mono text-indigo-300">Cleaned Utterances</td>
                      <td className="py-2 px-4">CSV</td>
                      <td className="py-2 px-4">57 utterances (Host & Guest)</td>
                      <td className="py-2 px-4 text-emerald-400 font-semibold">QC Passed</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-mono text-indigo-300">Utterance Feature Table</td>
                      <td className="py-2 px-4">CSV</td>
                      <td className="py-2 px-4">57 × 677 features (masked aggregates)</td>
                      <td className="py-2 px-4 text-emerald-400 font-semibold">QC Passed</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-mono text-indigo-300">Candidate Pairs Table</td>
                      <td className="py-2 px-4">CSV</td>
                      <td className="py-2 px-4">59 labelled pairs with rationale</td>
                      <td className="py-2 px-4 text-emerald-400 font-semibold">QC Passed</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-mono text-indigo-300">Jupyter Pipeline Notebook</td>
                      <td className="py-2 px-4">.ipynb</td>
                      <td className="py-2 px-4">549 executable cells & visualizations</td>
                      <td className="py-2 px-4 text-emerald-400 font-semibold">Verified</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          )}

        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-400">
            Natural Language Processing and Computational Linguistics • J-Component Submission
          </div>
          <button
            onClick={() => onOpenPdf('/docs/NLP_Project_Writeup.pdf', 'Project Writeup PDF')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Open Research Paper PDF</span>
          </button>
        </div>

      </div>
    </div>
  );
}

