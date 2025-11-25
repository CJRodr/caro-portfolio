// src/app/notes/page.tsx

const NOTES = [
  {
    date: "2025-11-20",
    title: "IBM Data Science Certificate Notes",
    summary:
      "This section will include structured notes from each module in the IBM DS cert: EDA, visualization, classification, SQL, APIs, and dashboards.",
    tags: ["Data Science", "IBM DS"],
  },
  {
    date: "2025-11-18",
    title: "AWS Study Log",
    summary:
      "Planned notes covering S3, Lambda, DynamoDB, IAM, and how serverless tooling supports data workflows and ML pipelines.",
    tags: ["AWS", "Cloud"],
  },
  {
    date: "2025-11-15",
    title: "LeetCode DSA Patterns",
    summary:
      "Upcoming summaries of Sliding Window, Two Pointers, Hashing, Binary Search, Trees, and Graph algorithms.",
    tags: ["DSA", "LeetCode"],
  },
];


export default function NotesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      {/* Header */}
      <header className="space-y-3">
        <p className="font-mono text-xs text-cyan-200/80">
          MODULE 03 — TECH JOURNAL / NOTES
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Notes & Learning Log
        </h1>
        <p className="text-slate-400 max-w-3xl">
          Quick snapshots from my study sessions — Data Science, AWS, algorithms,
          and bioinformatics. I update this as I learn.
        </p>
      </header>

      {/* Notes list */}
      <section className="space-y-4">
        {NOTES.map((note) => (
          <article
            key={note.title + note.date}
            className="bg-slate-900/40 border border-slate-800 rounded-lg p-4 hover:border-cyan-400/40 transition"
          >
            <p className="text-xs text-slate-500 font-mono">{note.date}</p>
            <h2 className="text-lg font-semibold text-slate-50">
              {note.title}
            </h2>
            <p className="text-sm text-slate-300 mt-2">{note.summary}</p>
            <div className="flex gap-2 mt-3 flex-wrap">
              {note.tags.map((t) => (
                <span
                  key={t}
                  className="text-[10px] uppercase tracking-wide px-2 py-1 rounded bg-slate-950/40 border border-slate-700/80 text-slate-200 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <div className="text-[11px] text-slate-500 font-mono">
        Notes are edited directly in{" "}
        <code className="text-slate-300">src/app/notes/page.tsx</code>. I keep
        this up to date as I study.
      </div>
    </div>
  );
}
