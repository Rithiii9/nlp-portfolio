import React, { useState } from 'react';
import { 
  X, 
  Code2, 
  Download, 
  Play, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  FileCode, 
  Cpu,
  BookOpen
} from 'lucide-react';

export default function LabNotebookModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('playground'); // 'playground', 'nlp1', 'nlp2'

  // Playground state
  const [inputText, setInputText] = useState(
    "Natural Language Processing is a branch of artificial intelligence that helps computers understand, interpret, and generate human language."
  );
  const [testName, setTestName] = useState("Rithika");

  // Basic NLP computation simulation in JS
  const words = inputText.toLowerCase().match(/\b\w+\b/g) || [];
  const totalWordCount = words.length;
  const stopwordList = new Set([
    "a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", 
    "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", 
    "by", "could", "did", "do", "does", "doing", "down", "during", "each", "few", "for", "from", 
    "further", "had", "has", "have", "having", "he", "her", "here", "hers", "herself", "him", 
    "himself", "his", "how", "i", "if", "in", "into", "is", "it", "its", "itself", "me", "more", 
    "most", "my", "myself", "no", "nor", "not", "of", "off", "on", "once", "only", "or", "other", 
    "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "she", "should", "so", 
    "some", "such", "than", "that", "the", "their", "theirs", "them", "themselves", "then", 
    "there", "these", "they", "this", "those", "through", "to", "too", "under", "until", "up", 
    "very", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", 
    "why", "with", "would", "you", "your", "yours", "yourself", "yourselves"
  ]);

  const filteredWords = words.filter(w => !stopwordList.has(w));
  
  // Frequency distribution
  const freqMap = {};
  filteredWords.forEach(w => {
    freqMap[w] = (freqMap[w] || 0) + 1;
  });
  const topTokens = Object.entries(freqMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  // Gender classification heuristic from Lab 2
  const lastChar = testName.trim().slice(-1).toLowerCase();
  const femaleVowels = ['a', 'e', 'i', 'y'];
  const predictedGender = femaleVowels.includes(lastChar) ? "Female (High Probability)" : "Male (Probable / Feature Dependent)";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl h-[92vh] flex flex-col rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/20">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  Hands-on Lab Practice
                </span>
                <span className="text-xs text-slate-400 font-mono">NLTK & Scikit-learn Labs</span>
              </div>
              <h2 className="text-lg font-bold text-white mt-0.5">
                Computational Linguistics Practice & Code Executions
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/docs/NLP_1.ipynb"
              download="NLP 1.ipynb"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span>Lab 1 Notebook</span>
            </a>

            <a
              href="/docs/NLP_2.ipynb"
              download="NLP 2.ipynb"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span>Lab 2 Notebook</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 border border-slate-700 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-slate-950/70 border-b border-slate-800 px-6 py-2.5 flex items-center gap-3 overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('playground')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeTab === 'playground'
                ? 'bg-sky-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive NLP Playground</span>
          </button>

          <button
            onClick={() => setActiveTab('nlp1')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeTab === 'nlp1'
                ? 'bg-sky-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>NLP 1.ipynb (Corpora & CFD)</span>
          </button>

          <button
            onClick={() => setActiveTab('nlp2')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeTab === 'nlp2'
                ? 'bg-sky-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>NLP 2.ipynb (Classifiers & BoW)</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* TAB 1: INTERACTIVE PLAYGROUND */}
          {activeTab === 'playground' && (
            <div className="space-y-6">
              
              <div className="bg-gradient-to-r from-sky-950/40 via-slate-900 to-indigo-950/40 p-4 rounded-xl border border-sky-500/30">
                <div className="flex items-center gap-2 text-sky-300 font-bold text-sm">
                  <Terminal className="w-4 h-4" />
                  <span>Client-Side NLP Simulator (NLTK Tokenizer & FreqDist)</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Try the algorithms implemented in Lab 1 & 2 right here in real time.
                </p>
              </div>

              {/* Text Frequency & Stopwords Experiment */}
              <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                  <span>Input Corpus / Text for FreqDist Analysis:</span>
                  <span className="text-[11px] font-mono text-slate-400">{totalWordCount} words</span>
                </label>
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  rows={3}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-sky-500 font-mono"
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Total Tokens</span>
                    <span className="text-lg font-bold text-white mt-1 block">{totalWordCount}</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Filtered Content Words</span>
                    <span className="text-lg font-bold text-sky-400 mt-1 block">{filteredWords.length}</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Unique Vocabulary</span>
                    <span className="text-lg font-bold text-emerald-400 mt-1 block">{Object.keys(freqMap).length}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-[11px] font-semibold text-slate-400 block mb-2">
                    Top Frequent Content Words (NLTK FreqDist simulation):
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {topTokens.map(([w, cnt], i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-sky-950/80 border border-sky-800 text-xs font-mono text-sky-200 flex items-center gap-1.5">
                        <span className="font-semibold">{w}</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-sky-800 text-white font-bold">{cnt}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Lab 2: Name Gender Feature Classifier */}
              <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-sky-400" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Lab 2: Name Gender Feature Classifier (NLTK Names Corpus)
                  </h4>
                </div>
                <p className="text-xs text-slate-400">
                  Feature engineering function: <code className="text-sky-300 font-mono">def gender_features(word): return &#123;'last_letter': word[-1]&#125;</code>
                </p>

                <div className="flex items-center gap-3 pt-1">
                  <input
                    type="text"
                    value={testName}
                    onChange={(e) => setTestName(e.target.value)}
                    placeholder="Enter name (e.g. Rithika, Obama, Alex)..."
                    className="bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-sky-500 font-mono flex-1 max-w-xs"
                  />
                  <div className="bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-xs flex items-center gap-2">
                    <span className="text-slate-400">Feature:</span>
                    <span className="font-mono font-bold text-sky-400">last_letter = '{lastChar}'</span>
                    <span className="text-slate-500">|</span>
                    <span className="font-semibold text-emerald-400">{predictedGender}</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: NLP 1.IPYNB */}
          {activeTab === 'nlp1' && (
            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 font-sans">
                <span>Cells from <strong className="text-white">NLP 1.ipynb</strong> (12 Cells):</span>
                <span className="text-xs text-sky-400">Brown Corpus, Inaugural, CFD</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
                <div>
                  <div className="text-slate-500 text-[11px] mb-1"># In [1]: Brown Corpus Categories</div>
                  <pre className="text-sky-300 overflow-x-auto">
{`from nltk.corpus import brown 
brown.categories()`}
                  </pre>
                  <div className="text-slate-400 text-[11px] mt-1 bg-slate-900/60 p-2 rounded">
                    ['adventure', 'belles_lettres', 'editorial', 'fiction', 'government', 'hobbies', 'humor', 'learned', 'lore', 'mystery', 'news', 'religion', 'reviews', 'romance', 'science_fiction']
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <div className="text-slate-500 text-[11px] mb-1"># In [2]: Lincoln vs Bush Inaugural Speeches</div>
                  <pre className="text-sky-300 overflow-x-auto">
{`from nltk.corpus import inaugural
inaugural.fileids()
inaugural.words(fileids = "2005-Bush.txt")[:20]
total_words = len(inaugural.words("1861-Lincoln.txt"))
print(total_words)`}
                  </pre>
                  <div className="text-slate-400 text-[11px] mt-1 bg-slate-900/60 p-2 rounded">
                    Output: 3988 total words in Lincoln 1861 Address
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <div className="text-slate-500 text-[11px] mb-1"># In [3]: Conditional Frequency Distribution (CFD) by Word Length</div>
                  <pre className="text-sky-300 overflow-x-auto">
{`from nltk.probability import ConditionalFreqDist
from nltk.corpus import inaugural

words = inaugural.words("1861-Lincoln.txt")
cfd = ConditionalFreqDist(
    (target, len(w))
    for target in ['1861-Lincoln.txt', '2005-Bush.txt']
    for w in inaugural.words(target)
)`}
                  </pre>
                  <div className="text-emerald-400 text-[11px] mt-1 bg-slate-900/60 p-2 rounded">
                    ✓ CFD matrix calculated across historical presidential address lengths
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: NLP 2.IPYNB */}
          {activeTab === 'nlp2' && (
            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 font-sans">
                <span>Cells from <strong className="text-white">NLP 2.ipynb</strong> (5 Cells):</span>
                <span className="text-xs text-sky-400">Feature Engineering, CountVectorizer, Web Scraping</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
                <div>
                  <div className="text-slate-500 text-[11px] mb-1"># In [1]: Gender Feature Extractor</div>
                  <pre className="text-sky-300 overflow-x-auto">
{`def gender_features(word):
    return {'last_letter': word[-1]}

gender_features('Obama') # {'last_letter': 'a'}`}
                  </pre>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <div className="text-slate-500 text-[11px] mb-1"># In [2]: NLTK Names Corpus Classification</div>
                  <pre className="text-sky-300 overflow-x-auto">
{`from nltk.corpus import names
labeled_names = ([(name,'male') for name in names.words('male.txt')] + 
                 [(name, 'female') for name in names.words('female.txt')])`}
                  </pre>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <div className="text-slate-500 text-[11px] mb-1"># In [3]: Scikit-Learn CountVectorizer Bag of Words</div>
                  <pre className="text-sky-300 overflow-x-auto">
{`from sklearn.feature_extraction.text import CountVectorizer
vect = CountVectorizer(binary=True)
corpus = ["Tesseract is good optical character recognition engine"]
vect.fit(corpus)`}
                  </pre>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <div className="text-slate-500 text-[11px] mb-1"># In [4]: Project Gutenberg Web Scraping</div>
                  <pre className="text-sky-300 overflow-x-auto">
{`from urllib import request
url = "http://www.gutenberg.org/files/2554/2554-0.txt"
response = request.urlopen(url)
raw = response.read().decode('utf8')`}
                  </pre>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-400">
            Natural Language Processing and Computational Linguistics • Laboratory Practicum
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

