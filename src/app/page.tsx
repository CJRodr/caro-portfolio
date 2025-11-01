// app/page.tsx
export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-10">
      {/* Hero */}
      <section className="grid md:grid-cols-[1.4fr,0.6fr] gap-8 items-start">
        <div className="space-y-6">
          <p className="font-mono text-xs text-cyan-200/80">
            MODULE 00 — INTRO SEQUENCE
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Software Engineer building data-driven & biology-focused systems.
          </h1>
          <p className="text-slate-300 max-w-2xl">
            I design and develop backend and web applications, and 
            I’m transitioning into data science and bioinformatics. 
            Currently pursuing the IBM Data Science certification, studying AWS, 
            and refining algorithms through LeetCode to return to high-impact 
            SWE roles.
          </p>
          <div className="flex gap-4">
            <a
              href="/projects"
              className="bg-cyan-400 text-slate-950 px-4 py-2 rounded-md font-medium hover:bg-cyan-300 transition"
            >
              View projects
            </a>
            <a
              href="/resume"
              className="border border-cyan-400/50 px-4 py-2 rounded-md text-sm font-mono hover:border-cyan-200/80 transition"
            >
              download resume
            </a>
          </div>
        </div>

        {/* Status panel */}
        <div className="bg-slate-900/40 border border-cyan-500/20 rounded-xl p-4 space-y-3 shadow-[0_0_30px_rgba(8,47,73,0.25)]">
          <p className="font-mono text-xs text-slate-400">SYSTEM STATUS</p>
          <div className="flex items-center justify-between">
            <span className="text-sm">Pipeline: Bioinformatics</span>
            <span className="px-2 py-1 bg-emerald-400/20 text-emerald-300 rounded text-xs font-mono">
              active
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Certs: IBM Data Science, AWS</span>
            <span className="text-xs text-slate-300">in progress</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">LeetCode</span>
            <span className="text-xs text-cyan-200 font-mono">
              4/150 (neetcode) ✅
            </span>
          </div>
          <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 font-mono">
            last update: 2025-10-31
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="space-y-4">
        <p className="font-mono text-xs text-cyan-200/80">
          MODULE 01 — PRIORITY PROJECTS
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {/* We'll fetch these later from GitHub/API */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-lg p-4">
            <h3 className="font-semibold mb-1">Genomic Variant Explorer</h3>
            <p className="text-sm text-slate-400">
              Next.js + API route pulling mock genomic data, rendered in a
              dashboard.
            </p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 rounded-lg p-4">
            <h3 className="font-semibold mb-1">NLP Multilingual Toy</h3>
            <p className="text-sm text-slate-400">
              Small app to compare EN/ES/PT outputs. 
            </p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 rounded-lg p-4">
            <h3 className="font-semibold mb-1">SWE API Integrations</h3>
            <p className="text-sm text-slate-400">
              C#/.NET or Python microservice example.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
