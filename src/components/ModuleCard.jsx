import React from 'react';
import { 
  FileText, 
  ExternalLink, 
  Download, 
  Folder, 
  Brain, 
  GraduationCap, 
  Languages, 
  MapPin, 
  Music, 
  Quote, 
  Code2, 
  ChevronRight,
  Eye,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const iconMap = {
  Brain,
  GraduationCap,
  Languages,
  MapPin,
  Music,
  Quote,
  Code2
};

export default function ModuleCard({ 
  module, 
  onOpenPdf, 
  onOpenCapstone, 
  onOpenKural, 
  onOpenLabs 
}) {
  const IconComponent = iconMap[module.icon] || FileText;

  const handleDeepDive = () => {
    if (module.id === 'capstone-project') {
      onOpenCapstone();
    } else if (module.id === 'kural-translation') {
      onOpenKural();
    } else if (module.id === 'hands-on-practice') {
      onOpenLabs();
    } else if (module.pdfPath) {
      onOpenPdf(module.pdfPath, module.title);
    }
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-800 hover:border-indigo-500/40 relative group">
      {/* Top Banner accent */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${module.badgeColor || 'from-indigo-500 to-purple-600'}`} />

      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Header row: Folder badge & Tag */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
              <Folder className="w-3.5 h-3.5 text-indigo-400" />
              <span>{module.folderName}/</span>
            </div>

            <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-gradient-to-r ${module.badgeColor} text-white shadow-sm`}>
              {module.badge}
            </span>
          </div>

          {/* Module Title & Icon */}
          <div className="flex items-start gap-3 mt-2">
            <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-indigo-400 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition duration-300">
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-indigo-200 transition line-clamp-2">
                {module.title}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                {module.subtitle}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs text-slate-300 mt-3.5 leading-relaxed line-clamp-3">
            {module.description}
          </p>

          {/* Metrics / Key Stats Pill Grid */}
          <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-800/80">
            {module.metrics?.slice(0, 2).map((m, idx) => (
              <div key={idx} className="bg-slate-900/60 rounded-lg p-2 border border-slate-800/60">
                <div className="text-[10px] text-slate-400 font-medium">{m.label}</div>
                <div className="text-xs font-bold text-slate-200 mt-0.5 truncate">{m.val}</div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3.5">
            {module.tags?.slice(0, 4).map((tag, i) => (
              <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-900/90 text-slate-400 border border-slate-800">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
          {/* Primary Action Button */}
          <button
            onClick={handleDeepDive}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 hover:text-white border border-indigo-500/30 font-semibold text-xs transition duration-200"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>
              {module.id === 'capstone-project' ? 'Explore Capstone' : 
               module.id === 'kural-translation' ? 'View Translation Matrix' : 
               module.id === 'hands-on-practice' ? 'Explore Labs & Code' : 'Read Full Document'}
            </span>
          </button>

          {/* PDF Viewer Button if PDF exists */}
          {module.pdfPath && (
            <button
              onClick={() => onOpenPdf(module.pdfPath, module.title)}
              title="Open PDF Viewer"
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/80 transition"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
            </button>
          )}

          {/* Direct Download Link */}
          {module.pdfPath && (
            <a
              href={module.pdfPath}
              download={module.pdfName}
              title={`Download ${module.pdfName}`}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/80 transition"
            >
              <Download className="w-4 h-4 text-emerald-400" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

