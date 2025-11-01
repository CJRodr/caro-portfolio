// src/app/lab/page.tsx
"use client";

import { useState } from "react";

const EXPERIMENTS = [
  {
    id: "exp-01",
    title: "Gene Expression Dashboard",
    desc: "Mock dataset visualized in a Next.js dashboard to explore differential expression across samples.",
    status: "designing ui",
    tags: ["Next.js", "Data viz", "Bio"],
  },
  {
    id: "exp-02",
    title: "Sequence Alignment Notebook",
    desc: "Python / Biopython demo of pairwise alignment (Needleman–Wunsch) and BLAST-like workflows.",
    status: "drafting",
    tags: ["Python", "Biopython", "Algorithms"],
  },
  {
    id: "exp-03",
    title: "Cancer Data Classifier",
    desc: "IBM DS cert-inspired classification on public cancer datasets (e.g. Breast Cancer Wisconsin).",
    status: "training",
    tags: ["IBM DS", "ML", "Classification"],
  },
  {
    id: "exp-04",
    title: "BioNLP Playground",
    desc: "Small biomedical text processing experiments (NER, summarization) with multilingual angle.",
    status: "researching",
    tags: ["NLP", "HuggingFace", "Multilingual"],
  },
];

const LAB_NOTES = [
  {
    date: "2025-10-31",
    note: "Set up project scaffolding for genomic dashboards in Next.js.",
  },
  {
    date: "2025-10-28",
    note: "Reviewed sequence alignment approaches (global vs local) for future notebook.",
  },
  {
    date: "2025-10-25",
    note: "Mapped IBM Data Science cert modules to future bioinformatics demos.",
  },
];

const TOOLS = [
  { label: "Languages", value: "Python, TypeScript" },
  { label: "Frameworks", value: "Next.js, React, Tailwind, shadcn/ui" },
  { label: "Data/ML", value: "Pandas, scikit-learn, Jupyter" },
  { label: "Bio", value: "Biopython (planned), NCBI/Ensembl APIs" },
  { label: "Cloud", value: "AWS (in progress), Vercel" },
];

export default function LabPage() {
  const [filter, setFilter] = useState<"all" | "bio" | "ml" | "nlp">("all");

  const filteredExperiments = EXPERIMENTS.filter((exp) => {
    if (filter === "all") return true;
    if (filter === "bio") return exp.tags.includes("Bio") || exp.title.toLowerCase().includes("gene");
    if (filter === "ml") return exp.tags.includes("ML") || exp.desc.toLowerCase().includes("classifier");
    if (filter === "nlp") return exp.tags.includes("NLP");
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      {/* Header */}
      <header className="space-y-3">
        <p className="font-mono text-xs text-cyan-200/80">
          MODULE 02 — BIO LAB CONSOLE
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Experimental Systems in Bioinformatics & Data Science
        </h1>
        <p className="text-slate-400 max-w-3xl">
          This area tracks exploratory work toward bioinformatics, data engineering for biology,
          and ML/NLP experiments. Most of these start as notebooks or API demos and become
          production-ish Next.js pages later.
        </p>
      </header>

      <div className="bg-slate-900/40 border border-cyan-400/30 rounded-lg p-4 text-sm text-slate-300 font-mono">
  ℹ️ <span className="text-cyan-300 font-semibold">Preview Mode:</span>
  The Bio Lab section currently displays conceptual examples of projects I plan to build as I progress 
  through data science and bioinformatics training. Implementation details and live demos will be added 
  as development continues.
</div>


      {/* Lab status row */}
      <section className="grid md:grid-cols-3 gap-4">
        <div className="bg-slate-900/40 border border-cyan-500/20 rounded-xl p-4 space-y-2 shadow-[0_0_30px_rgba(8,47,73,0.25)]">
          <p className="font-mono text-xs text-slate-400">LAB STATUS</p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-sm text-slate-50">online — receiving datasets</p>
          </div>
          <p className="text-xs text-slate-500 font-mono">
            last update: 2025-10-31
          </p>
        </div>
        <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 space-y-2">
          <p className="font-mono text-xs text-slate-400">IN PROGRESS</p>
          <p className="text-sm text-slate-50">
            IBM Data Science cert → convert labs to Next.js pages
          </p>
          <p className="text-xs text-slate-500">
            goal: show DS → bioinformatics transition
          </p>
        </div>
        <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 space-y-2">
          <p className="font-mono text-xs text-slate-400">NEXT UP</p>
          <p className="text-sm text-slate-50">
            build small sequence alignment visualizer (client-side)
          </p>
          <p className="text-xs text-slate-500">+ add Kaggle cancer dataset EDA</p>
        </div>
      </section>

      {/* Experiment list */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-cyan-200/80">
              ACTIVE EXPERIMENTS
            </p>
            <h2 className="text-xl font-semibold">Current workbench</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 rounded-md text-xs font-mono border ${
                filter === "all"
                  ? "bg-cyan-400 text-slate-950 border-cyan-400"
                  : "border-slate-700 text-slate-200 hover:border-cyan-400/50"
              }`}
            >
              all
            </button>
            <button
              onClick={() => setFilter("bio")}
              className={`px-3 py-1 rounded-md text-xs font-mono border ${
                filter === "bio"
                  ? "bg-cyan-400 text-slate-950 border-cyan-400"
                  : "border-slate-700 text-slate-200 hover:border-cyan-400/50"
              }`}
            >
              bio
            </button>
            <button
              onClick={() => setFilter("ml")}
              className={`px-3 py-1 rounded-md text-xs font-mono border ${
                filter === "ml"
                  ? "bg-cyan-400 text-slate-950 border-cyan-400"
                  : "border-slate-700 text-slate-200 hover:border-cyan-400/50"
              }`}
            >
              ml
            </button>
            <button
              onClick={() => setFilter("nlp")}
              className={`px-3 py-1 rounded-md text-xs font-mono border ${
                filter === "nlp"
                  ? "bg-cyan-400 text-slate-950 border-cyan-400"
                  : "border-slate-700 text-slate-200 hover:border-cyan-400/50"
              }`}
            >
              nlp
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {filteredExperiments.map((exp) => (
            <div
              key={exp.id}
              className="bg-slate-900/40 border border-slate-800 rounded-lg p-4 flex flex-col justify-between gap-3 hover:border-cyan-400/40 transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold">{exp.title}</h3>
                  <p className="text-sm text-slate-400 mt-1">{exp.desc}</p>
                </div>
                <span className="px-2 py-1 rounded-md text-[10px] uppercase font-mono bg-slate-800 text-slate-200">
                  {exp.status}
                </span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wide px-2 py-1 rounded bg-slate-950/40 border border-slate-700/80 text-slate-200 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Coming soon card */}
          <div className="bg-slate-900/10 border border-dashed border-cyan-400/40 rounded-lg p-4 flex flex-col gap-2 justify-center text-center min-h-[160px]">
            <p className="font-mono text-xs text-slate-400">
              NEW PIPELINE DETECTED
            </p>
            <p className="text-slate-50">
              Project_05: Proteomic_Data_Visualizer
            </p>
            <p className="text-xs text-slate-500">
              status: awaiting dataset / auth
            </p>
          </div>
        </div>
      </section>

      {/* Tools + Lab notes */}
      <section className="grid md:grid-cols-[1.1fr,0.9fr] gap-6">
        {/* Tools */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 space-y-3">
          <p className="font-mono text-xs text-cyan-200/80">
            LAB TOOLCHAIN
          </p>
          <h2 className="text-lg font-semibold">Stacks, datasets & targets</h2>
          <div className="space-y-2">
            {TOOLS.map((tool) => (
              <div
                key={tool.label}
                className="flex items-start justify-between gap-3 border-b border-slate-800/50 pb-2 last:border-none"
              >
                <p className="text-sm text-slate-200">{tool.label}</p>
                <p className="text-xs text-right text-slate-400 max-w-[220px]">
                  {tool.value}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-slate-500 font-mono pt-2">
            note: bio integrations (NCBI / Ensembl) will be proxied through Next.js route handlers.
          </p>
        </div>

        {/* Lab notes */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 space-y-3">
          <p className="font-mono text-xs text-cyan-200/80">
            LAB NOTES / CHANGELOG
          </p>
          <h2 className="text-lg font-semibold">Recent updates</h2>
          <div className="space-y-3">
            {LAB_NOTES.map((log) => (
              <div key={log.date} className="border-b border-slate-800/60 pb-2 last:border-none">
                <p className="text-xs text-slate-500 font-mono">{log.date}</p>
                <p className="text-sm text-slate-200">{log.note}</p>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-slate-500 font-mono pt-2">
            todo: connect to /api/lab-notes for dynamic updates.
          </p>
        </div>
      </section>
    </div>
  );
}

