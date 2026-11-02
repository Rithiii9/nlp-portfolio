# NLPFolio Explorer — Academic NLP & Computational Linguistics Portfolio

> **Student:** RITHIKA M  
> **Registration Number:** 23MIC0072  
> **Degree:** Integrated M.Tech in Computer Science and Engineering  
> **School:** School of Computer Science and Engineering (SCOPE), Vellore Institute of Technology (VIT)  
> **Course:** Natural Language Processing and Computational Linguistics  
> **Course Slot & Term:** Slot F1 + TF1 (J-Component) • Fall Semester 2026–27  
> **Supervisor:** Dr. Sharmila Banu K, Professor Grade 1  

---

## 🌟 Overview

**NLPFolio Explorer** is a modern, high-performance interactive React portfolio. It organizes and showcases all course deliverables, case studies, linguistic benchmarks, and J-Component capstone research into a unified interface with embedded PDF readers and reproducible notebook code viewers.

---

## 📁 Included Folders & Deliverables

| Deliverable / Module | Folder | Artifact Files Included | Highlights & Description |
| :--- | :--- | :--- | :--- |
| **Capstone Project (J-Component)** | `Project/` | `NLP_Project_Writeup.pdf`<br>`NLP_Presentation.pptx`<br>`Project_Demo.ipynb` | Multimodal Contradiction & Behavioural Analysis using Dialogue Graphs (R-GCN) & Facial Action Units (OpenFace + MediaPipe). 59 nodes, 472 edges, 11,239 video frames. |
| **European NLP Lab Case Study** | `Case Study/` | `Case_Study.pdf` (8 pages) | Detailed analysis of EdinburghNLP / ILCC at University of Edinburgh. Covers 14 core faculty (Koehn, Goldwater, Lapata, Heafield, Cohen) and Moses/Marian NMT evolution. |
| **Classical Translation Benchmark** | `Kural Translation/` | `Thirukural Tanslation.pdf` | Couplet 500 benchmark across 8 linguistic dimensions: Rev. Dr. G.U. Pope Poetic Translation (95.00%) vs Modern LLM Translation (86.25%). |
| **Epidemic NLP Surveillance** | `Group Activity/` | `Group_Activity.pdf` (3 pages) | Tracing spatial epidemiology from Dr. John Snow's 1854 cholera map to HealthMap. Designs Rumour Detector & Spatial Outbreak Radar with NER. |
| **Poetic Song Translation** | `Song Translation/` | `Song Translation.pdf` | Subramania Bharathiyar's *"காக்கை சிறகினிலே"* (Kaakkai Siraginile) devotional pantheism analysis (Rating: 5/5). |
| **Idiomatic Linguistics & Pragmatics** | `Idioms/` | `IDIOMS.pdf` | Pragmatic analysis and non-compositionality modeling for *"Get a taste of your own medicine"*. |
| **Hands-on Lab Practice** | `Hands on Practice/` | `NLP 1.ipynb`<br>`NLP 2.ipynb` | Executable Jupyter labs: Brown Corpus, Inaugural Speeches, FreqDist, CFD, Gender Feature Classification, CountVectorizer BoW, and Gutenberg web text scraping. |
| **Candidate Profile Image** | `Picture/` | `profile.jpg` | Student photo with roll number and program badges. |

---

## 🚀 Running Locally

The application is built with **Vite + React 18 + Tailwind CSS + Lucide Icons**.

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 3. Build for Production
```bash
npm run build
```
The compiled, optimized static bundle is output to `dist/`.

---

## 🌐 Deploying to Vercel (One-Click)

The codebase is pre-configured for instant deployment on Vercel:

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of NLPFolio Explorer"
   git branch -M main
   git remote add origin https://github.com/<your-username>/nlp-portfolio.git
   git push -u origin main
   ```
2. Go to **[vercel.com/new](https://vercel.com/new)** and import your repository.
3. Vercel automatically detects **Vite**:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**! Your site will be live at `https://<your-project>.vercel.app` with all PDFs and images functioning out of the box.
