// src/app/resume/page.tsx

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <p className="font-mono text-xs text-cyan-200/80">
        MODULE 04 — RESUME
      </p>

      <h1 className="text-3xl font-semibold text-slate-50">Résumé</h1>

      <p className="text-slate-300 text-sm">
        You can download my résumé as a PDF or preview it below.
      </p>

      <div className="flex gap-3">
        <a
          href="/October2025Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-cyan-400/60 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 hover:bg-cyan-400/20 hover:border-cyan-300 transition"
        >
          Download Résumé
        </a>

        <a
          href="/October2025Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-slate-900/60 transition"
        >
          Open in new tab
        </a>
      </div>

      <div className="border border-slate-800 rounded-lg overflow-hidden bg-slate-950/60">
        <iframe
          src="/October2025Resume.pdf"
          className="w-full h-[720px]"
          title="Carolina Rodriguez Resume"
        />
      </div>

      <p className="text-[11px] text-slate-500 font-mono">
        The PDF file is served from{" "}
        <code className="text-slate-300">/public/October2025Resume.pdf</code>.
      </p>
    </div>
  );
}
