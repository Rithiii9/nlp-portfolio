import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ModuleCard from './components/ModuleCard';
import PdfViewerModal from './components/PdfViewerModal';
import CapstoneDetailModal from './components/CapstoneDetailModal';
import KuralTranslationModal from './components/KuralTranslationModal';
import LabNotebookModal from './components/LabNotebookModal';
import Footer from './components/Footer';
import { modulesData, studentInfo } from './data/portfolioData';
import { 
  Search, 
  FolderArchive, 
  FileText, 
  Download, 
  Layers, 
  ChevronRight
} from 'lucide-react';

export default function App() {
  // Modal states
  const [isCapstoneOpen, setIsCapstoneOpen] = useState(false);
  const [isKuralOpen, setIsKuralOpen] = useState(false);
  const [isLabsOpen, setIsLabsOpen] = useState(false);

  // PDF Viewer Modal
  const [pdfModalState, setPdfModalState] = useState({
    isOpen: false,
    path: '/docs/NLP_Project_Writeup.pdf',
    title: 'Capstone Project Writeup'
  });

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Deliverables' },
    { id: 'capstone', label: 'Capstone (J-Component)' },
    { id: 'research', label: 'Research Case Study' },
    { id: 'translation', label: 'Linguistic Translations' },
    { id: 'labs', label: 'Hands-on Labs' },
    { id: 'activity', label: 'Group Activity' }
  ];

  // Filter modules
  const filteredModules = useMemo(() => {
    return modulesData.filter((mod) => {
      const matchesCategory = selectedCategory === 'all' || mod.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch = 
        mod.title.toLowerCase().includes(query) ||
        mod.subtitle?.toLowerCase().includes(query) ||
        mod.description?.toLowerCase().includes(query) ||
        mod.folderName.toLowerCase().includes(query) ||
        mod.tags?.some(t => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleOpenPdf = (path, title) => {
    setPdfModalState({
      isOpen: true,
      path,
      title: title || 'Academic PDF Viewer'
    });
  };

  const handleOpenAllPdfs = () => {
    setPdfModalState({
      isOpen: true,
      path: '/docs/NLP_Project_Writeup.pdf',
      title: 'Academic PDF Document Library'
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#080C14] text-slate-100">
      
      {/* Top Navbar */}
      <Navbar onOpenAllPdfs={handleOpenAllPdfs} />

      {/* Hero Section with Student Photo & Course Slot & Term */}
      <Hero 
        onOpenCapstone={() => setIsCapstoneOpen(true)}
        onOpenAllPdfs={handleOpenAllPdfs}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 flex-1 w-full">
        
        {/* Section Heading & Search Filter Bar */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>Course Modules & Deliverables</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Explore Course Submissions
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search modules, kurals, code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-900/90 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 shadow-sm"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Modules Grid */}
        {filteredModules.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModules.map((module) => (
              <ModuleCard
                key={module.id}
                module={module}
                onOpenPdf={handleOpenPdf}
                onOpenCapstone={() => setIsCapstoneOpen(true)}
                onOpenKural={() => setIsKuralOpen(true)}
                onOpenLabs={() => setIsLabsOpen(true)}
              />
            ))}
          </div>
        ) : (
          <div className="glass-panel p-12 text-center rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No deliverables matched your search query.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-3 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Quick PDF Document Hub Shelf */}
        <section className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
                <FolderArchive className="w-4 h-4" />
                <span>All PDF Artifacts</span>
              </div>
              <h3 className="text-xl font-bold text-white mt-0.5">
                Included Course PDF Files
              </h3>
            </div>
            <button
              onClick={handleOpenAllPdfs}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 font-semibold text-xs border border-indigo-500/30 transition self-start sm:self-auto"
            >
              <span>Open Document Viewer</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "NLP_Project_Writeup.pdf", folder: "Project", size: "24 KB (7 pages)", path: "/docs/NLP_Project_Writeup.pdf", desc: "Multimodal Contradiction Writeup" },
              { name: "Case_Study.pdf", folder: "Case Study", size: "177 KB (8 pages)", path: "/docs/Case_Study.pdf", desc: "EdinburghNLP Research Lab Review" },
              { name: "Thirukural Tanslation.pdf", folder: "Kural Translation", size: "81 KB (2 pages)", path: "/docs/Thirukural_Translation.pdf", desc: "Couplet 500 LLM vs Human Benchmark" },
              { name: "Group_Activity.pdf", folder: "Group Activity", size: "41 KB (3 pages)", path: "/docs/Group_Activity.pdf", desc: "John Snow vs HealthMap Epidemic NLP" },
              { name: "Song Translation.pdf", folder: "Song Translation", size: "62 KB (1 page)", path: "/docs/Song_Translation.pdf", desc: "Bharathiyar Kaakkai Siraginile Translation" },
              { name: "IDIOMS.pdf", folder: "Idioms", size: "28 KB (1 page)", path: "/docs/IDIOMS.pdf", desc: "Taste of Your Own Medicine Pragmatics" }
            ].map((pdf, idx) => (
              <div key={idx} className="glass-panel p-4 rounded-xl border border-slate-800 flex items-center justify-between gap-3 hover:border-slate-700 transition">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="font-bold text-xs text-white truncate">{pdf.name}</h5>
                    <p className="text-[11px] text-slate-400 font-mono truncate">{pdf.folder}/ • {pdf.size}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => handleOpenPdf(pdf.path, pdf.name)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                    title="View PDF"
                  >
                    <FileText className="w-3.5 h-3.5 text-indigo-400" />
                  </button>
                  <a
                    href={pdf.path}
                    download={pdf.name}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                    title="Download PDF"
                  >
                    <Download className="w-3.5 h-3.5 text-emerald-400" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer onOpenAllPdfs={handleOpenAllPdfs} />

      {/* Modals */}
      <PdfViewerModal
        isOpen={pdfModalState.isOpen}
        onClose={() => setPdfModalState({ ...pdfModalState, isOpen: false })}
        initialPdfPath={pdfModalState.path}
        title={pdfModalState.title}
      />

      <CapstoneDetailModal
        isOpen={isCapstoneOpen}
        onClose={() => setIsCapstoneOpen(false)}
        onOpenPdf={handleOpenPdf}
      />

      <KuralTranslationModal
        isOpen={isKuralOpen}
        onClose={() => setIsKuralOpen(false)}
        onOpenPdf={handleOpenPdf}
      />

      <LabNotebookModal
        isOpen={isLabsOpen}
        onClose={() => setIsLabsOpen(false)}
      />

    </div>
  );
}
