export const studentInfo = {
  name: "RITHIKA M",
  rollNo: "23MIC0072",
  degree: "Integrated M.Tech CSE",
  department: "School of Computer Science and Engineering (SCOPE)",
  institution: "Vellore Institute of Technology (VIT), Vellore",
  course: "Natural Language Processing and Computational Linguistics",
  slot: "Slot F1 + TF1 (J-Component)",
  academicYear: "Fall Semester 2026–27",
  photo: "/profile.jpg",
  facultyGuide: "Dr. Sharmila Banu K, Professor Grade 1"
};

export const modulesData = [
  {
    id: "capstone-project",
    category: "capstone",
    categoryName: "Capstone Project (J-Component)",
    title: "Multimodal Contradiction and Behavioural Analysis in Human Conversations",
    subtitle: "Using Dialogue Graphs (R-GCN) and Facial Action Units (OpenFace & MediaPipe)",
    badge: "J-Component Capstone",
    badgeColor: "from-indigo-500 to-purple-600",
    icon: "Brain",
    featured: true,
    folderName: "Project",
    pdfPath: "/docs/NLP_Project_Writeup.pdf",
    pdfName: "NLP_Project_Writeup.pdf",
    pptxPath: "/docs/NLP_Presentation.pptx",
    pptxName: "NLP_Presentation.pptx",
    notebookPath: "/docs/Project_Demo.ipynb",
    notebookName: "Project_Demo.ipynb",
    team: [
      { name: "Rithika M", roll: "23MIC0072", lead: true },
      { name: "Vinytha S V", roll: "23MIC0088", lead: false }
    ],
    faculty: "Dr. Sharmila Banu K, Professor Grade 1, SCOPE, VIT",
    description: "A novel multimodal conversational contradiction framework combining audio-visual perception (OpenFace 2.0 Action Units, MediaPipe 3D pose/hands) with relational dialogue graphs (R-GCN) to distinguish utterance inconsistencies from deception.",
    highlights: [
      "Explicitly separates logical contradiction (textual inference) from deception / veracity",
      "OpenFace 2.0 AU extraction (AU1, AU2, AU4, AU12, gaze, pose) over 11,239 video frames",
      "MediaPipe body pose (33 landmarks) & bilateral hands (21 landmarks each)",
      "ELAN XML Annotation alignment with conservative boundary & time-slot resolution",
      "Dialogue Relational Graph Convolutional Network (R-GCN) modeling 6 relation types",
      "19-Slide Defense Presentation & 549-Cell Reproducible Python Notebook Pipeline"
    ],
    metrics: [
      { label: "Video Duration", val: "375.01s (11,239 frames)" },
      { label: "Clean Utterances", val: "57 Utterances" },
      { label: "Labelled Pairs", val: "59 Candidate Pairs" },
      { label: "Graph Nodes/Edges", val: "59 Nodes, 472 Edges" }
    ],
    tags: ["Multimodal NLP", "Dialogue Graphs", "R-GCN", "OpenFace 2.0", "MediaPipe", "ELAN", "NLI"]
  },
  {
    id: "case-study",
    category: "research",
    categoryName: "Research Case Study",
    title: "Exploring an NLP Research Laboratory in Europe: A Case Study of EdinburghNLP",
    subtitle: "Institute for Language, Cognition and Computation (ILCC), University of Edinburgh",
    badge: "Digital Assignment",
    badgeColor: "from-blue-500 to-cyan-500",
    icon: "GraduationCap",
    featured: false,
    folderName: "Case Study",
    pdfPath: "/docs/Case_Study.pdf",
    pdfName: "Case_Study.pdf",
    description: "An in-depth 8-page academic review of EdinburghNLP, Europe's foremost computational linguistics hub, analyzing institutional strengths, research pillars, core scientists, and landmark contributions from Moses to Modern LLMs.",
    highlights: [
      "Top European ranking in csrankings.org across NLP and Speech over 4 decades",
      "Full NLP Stack: morphology, semantic parsing, summarization, machine translation & LLMs",
      "Pioneering systems: Moses SMT (Philipp Koehn), Marian NMT (Kenneth Heafield), CCG Parsers",
      "Deep dive into 5 core faculty: Philipp Koehn, Sharon Goldwater, Mirella Lapata, Shay Cohen & Kenneth Heafield",
      "Analysis of low-resource language processing and interpretability outcomes"
    ],
    metrics: [
      { label: "Document Length", val: "8 Pages (Full Study)" },
      { label: "Faculty Analyzed", val: "14 Core Faculty" },
      { label: "Ranking", val: "Rank #1 Europe (csrankings)" },
      { label: "Key Systems", val: "Moses, Marian, CCG" }
    ],
    tags: ["EdinburghNLP", "Statistical MT", "Neural MT", "Cognitive NLP", "Marian NMT", "ILCC"]
  },
  {
    id: "kural-translation",
    category: "translation",
    categoryName: "Classical Translation Benchmark",
    title: "Thirukkural Translation Benchmark (குறள் 500) — Human vs. LLM Neural Evaluation",
    subtitle: "Evaluation of Couplet 500 across 8 Linguistic Quality Dimensions",
    badge: "NLP Benchmark",
    badgeColor: "from-emerald-500 to-teal-500",
    icon: "Languages",
    featured: true,
    folderName: "Kural Translation",
    pdfPath: "/docs/Thirukural_Translation.pdf",
    pdfName: "Thirukural Tanslation.pdf",
    description: "Quantitative linguistic comparison between Rev. Dr. G.U. Pope's classical English poetic translation (1886) and state-of-the-art Large Language Model translation of Thiruvalluvar's Couplet 500 on situational strategy.",
    kuralData: {
      original: "காலாழ் களரின் நரியடும் கண்ணஞ்சா\nவேலாள் முகத்த களிறு",
      meaning: "Even a mighty elephant that fearlessly charges warriors armed with spears can be slain by a small jackal when it becomes trapped in deep, sinking mud. Strength without the right terrain leads to ruin.",
      llmTranslation: "A fearless elephant, capable of defeating spear-wielding warriors, can be killed even by a jackal when it gets trapped in deep, sinking mud.",
      humanTranslation: "The jackal slays, in miry paths of foot-betraying fen,\nThe elephant of fearless eye and tusks transfixing armed men.\n(Rev. G. U. Pope, 1886)",
      llmScore: 86.25,
      humanScore: 95.00,
      rubrics: [
        { criterion: "Translation Accuracy", llm: 9, human: 10, max: 10 },
        { criterion: "Lexical Faithfulness", llm: 8, human: 10, max: 10 },
        { criterion: "Semantic Preservation", llm: 9, human: 10, max: 10 },
        { criterion: "Cultural Preservation", llm: 8, human: 10, max: 10 },
        { criterion: "Grammatical Correctness", llm: 10, human: 9, max: 10 },
        { criterion: "Naturalness in English", llm: 9, human: 8, max: 10 },
        { criterion: "Fluency & Readability", llm: 10, human: 9, max: 10 },
        { criterion: "Poetic Quality & Tone", llm: 6, human: 10, max: 10 }
      ]
    },
    highlights: [
      "Rigorous 8-dimension linguistic evaluation comparing neural vs poetic human translation",
      "LLM excels in modern syntactic fluency (10/10) and semantic clarity (9/10)",
      "Human translation by G.U. Pope preserves meter, rhyming, and poetic tone (10/10 vs 6/10)",
      "Includes TF-IDF Cosine Similarity framework for lexical alignment"
    ],
    metrics: [
      { label: "Couplet", val: "குறள் 500" },
      { label: "LLM Score", val: "69/80 (86.25%)" },
      { label: "Human Score", val: "76/80 (95.00%)" },
      { label: "Evaluation Criteria", val: "8 Rigorous Dimensions" }
    ],
    tags: ["Thirukkural", "Machine Translation", "LLM Evaluation", "G.U. Pope", "Computational Poetics"]
  },
  {
    id: "group-activity",
    category: "activity",
    categoryName: "Epidemiological NLP Activity",
    title: "NLP Applications in Epidemic Surveillance: John Snow's Broadway Map vs HealthMap",
    subtitle: "Spatial Mapping to Modern Web-scale Disease & Rumour Detection",
    badge: "Group Activity",
    badgeColor: "from-amber-500 to-orange-500",
    icon: "MapPin",
    featured: false,
    folderName: "Group Activity",
    pdfPath: "/docs/Group_Activity.pdf",
    pdfName: "Group_Activity.pdf",
    description: "Comparative study between Dr. John Snow's 1854 Soho cholera outbreak map and HealthMap automated web surveillance, designing novel NLP architectures for real-time pandemic rumour detection and outbreak radar.",
    highlights: [
      "Tracing spatial epidemiology from 1854 Broadway pump cholera mapping to modern satellite & web intelligence",
      "System 1: Pandemic Rumour Detection using tokenization, lemmatization, TF-IDF, sentiment and stance classifiers",
      "System 2: Outbreak Radar combining Named Entity Recognition (disease + location) with transportation networks",
      "End-to-end NLP data pipeline: web scraping -> filtering -> NER -> geo-tagging -> risk forecasting"
    ],
    metrics: [
      { label: "Historical Case", val: "Dr. John Snow (1854)" },
      { label: "Modern Platform", val: "HealthMap (Web NLP)" },
      { label: "Proposed Systems", val: "Rumour Detector & Outbreak Radar" },
      { label: "NLP Tasks", val: "NER, Stance, Spatial Linkage" }
    ],
    tags: ["Health NLP", "Information Extraction", "NER", "Rumour Detection", "Spatial Text Mining"]
  },
  {
    id: "song-translation",
    category: "translation",
    categoryName: "Poetic Translation & Devotional NLP",
    title: "Mahakavi Subramania Bharathiyar's 'காக்கை சிறகினிலே' (Kaakkai Siraginile)",
    subtitle: "Semantic & Philosophical Translation Analysis (Film: Ezhavathu Manithan)",
    badge: "Tamil Poetry",
    badgeColor: "from-rose-500 to-pink-500",
    icon: "Music",
    featured: false,
    folderName: "Song Translation",
    pdfPath: "/docs/Song_Translation.pdf",
    pdfName: "Song Translation.pdf",
    lyrics: {
      original: "காக்கை சிறகினிலே நந்தலாலா - நின்றன்\nகரிய நிறம் தோன்றுதையே நந்தலாலா;\nபார்க்கும் மரங்களெல்லாம் நந்தலாலா - நின்றன்\nபச்சை நிறம் தோன்றுதையே நந்தலாலா.",
      author: "மகாகவி சுப்பிரமணிய பாரதியார் (Mahakavi Subramania Bharathiyar)",
      movie: "ஏழாவது மனிதன் (Ezhavathu Manithan, 1982)",
      translation: "O Nandalala (Lord Krishna)! I see your dark complexion in the feathers of a crow. In every tree that I look at, I see your beautiful green colour.",
      rating: "5 / 5 Stars"
    },
    description: "Analysis of Subramania Bharathiyar's immortal mystic poem, exploring how figurative personification, pantheism, and spiritual devotion transfer across syntactic boundaries from Tamil to English.",
    highlights: [
      "Philosophical translation of divine pantheism seeing Krishna's presence in ordinary nature",
      "Study of color symbolism (dark black crow feathers -> Krishna's Shyamal complexion)",
      "Evaluation of emotional resonance, cadence preservation, and cross-lingual meaning transfer"
    ],
    metrics: [
      { label: "Poet", val: "Mahakavi Bharathiyar" },
      { label: "Theme", val: "Mystic Pantheism" },
      { label: "Film Adaptation", val: "Ezhavathu Manithan" },
      { label: "Analysis Score", val: "5.0 / 5.0" }
    ],
    tags: ["Tamil Poetry", "Subramania Bharathiyar", "Sentiment NLP", "Literary Translation"]
  },
  {
    id: "idioms",
    category: "linguistics",
    categoryName: "Pragmatics & Idiomatic NLP",
    title: "Idiom Compositionality Analysis: 'Get a taste of your own medicine'",
    subtitle: "Non-literal Meaning and Pragmatic Modeling in NLP",
    badge: "Pragmatics & Semantics",
    badgeColor: "from-purple-500 to-indigo-500",
    icon: "Quote",
    featured: false,
    folderName: "Idioms",
    pdfPath: "/docs/IDIOMS.pdf",
    pdfName: "IDIOMS.pdf",
    description: "Examination of non-compositional idioms in computational linguistics: why standard token-level neural embeddings struggle with figurative expressions and how pragmatic context resolves intended semantics.",
    idiomData: {
      phrase: "Get a taste of your own medicine",
      meaning: "Experience the same negative treatment or adverse consequences you have previously inflicted on others.",
      example: "After constantly making fun of others, he finally got a taste of his own medicine when they started teasing him.",
      nlpChallenge: "High non-compositionality: neither 'taste' nor 'medicine' relates to retaliatory behavior in literal semantic parsers."
    },
    highlights: [
      "Non-compositional multi-word expression (MWE) representation in language models",
      "Pragmatics and discourse context required to resolve figurative versus literal senses",
      "Application in sentiment analysis and contextual sarcasm detection"
    ],
    metrics: [
      { label: "Expression Type", val: "Multi-Word Expression" },
      { label: "NLP Challenge", val: "Non-Compositionality" },
      { label: "Core Concept", val: "Karmic Retribution" },
      { label: "Application", val: "Sentiment & Irony NLP" }
    ],
    tags: ["Idiom Processing", "Multi-Word Expressions", "Semantics", "Pragmatics", "NLU"]
  },
  {
    id: "hands-on-practice",
    category: "labs",
    categoryName: "Hands-on Lab Practice",
    title: "Hands-on Computational Linguistics & NLTK Practice Labs",
    subtitle: "From Brown Corpus & Inaugural Speeches to Gender Classification & Web Scraping",
    badge: "Jupyter Notebooks",
    badgeColor: "from-sky-500 to-blue-600",
    icon: "Code2",
    featured: true,
    folderName: "Hands on Practice",
    pdfPath: null,
    notebooks: [
      {
        id: "nlp1",
        title: "NLP Lab 1: Corpora, FreqDist & Conditional Distributions",
        fileName: "NLP 1.ipynb",
        path: "/docs/NLP_1.ipynb",
        cells: 12,
        topics: [
          "NLTK Brown Corpus category exploration",
          "Presidential Inaugural Speech Corpus (Lincoln 1861 vs Bush 2005)",
          "Frequency Distribution (FreqDist) and Top-k word frequency",
          "Stopwords filtering with NLTK English stopwords",
          "Conditional Frequency Distribution (CFD) by word length"
        ]
      },
      {
        id: "nlp2",
        title: "NLP Lab 2: Feature Engineering, CountVectorizer & Web Mining",
        fileName: "NLP 2.ipynb",
        path: "/docs/NLP_2.ipynb",
        cells: 5,
        topics: [
          "Supervised Gender Classification using character-level name features",
          "NLTK Names Corpus (male.txt and female.txt labelled dataset)",
          "Scikit-learn CountVectorizer binary Bag-of-Words feature matrix",
          "Web text scraping via urllib.request from Project Gutenberg (Crime & Punishment)"
        ]
      }
    ],
    description: "Two comprehensive Python/Jupyter practice notebooks implementing foundational computational linguistics algorithms: text preprocessing, corpus analysis, feature extraction, and text classification.",
    highlights: [
      "Corpus analysis using standard NLTK Brown and Inaugural speech corpora",
      "Word length distributions via ConditionalFreqDist",
      "Feature engineering for name-based demographic classification",
      "Scikit-learn CountVectorizer vectorization and Gutenberg web text mining"
    ],
    metrics: [
      { label: "Total Notebooks", val: "2 Jupyter Notebooks" },
      { label: "Total Code Cells", val: "17 Executed Cells" },
      { label: "Libraries", val: "NLTK, Scikit-learn, Urllib" },
      { label: "Corpora Used", val: "Brown, Inaugural, Names" }
    ],
    tags: ["NLTK", "Python", "CountVectorizer", "Feature Engineering", "FreqDist", "Jupyter"]
  }
];

