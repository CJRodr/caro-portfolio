import { Card, CardContent } from "@/components/ui/card";

const PROJECTS = [
  {
    title: "Genomic Variant Explorer",
    type: "bioinformatics",
    description: "Next.js + API route + mock genomic dataset.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "NLP Multilingual Toy",
    type: "nlp",
    description: "Compare EN/ES/PT outputs, shows language skills.",
    tech: ["Next.js", "Python (api)", "HuggingFace?"],
  },
  {
    title: "SWE API Integrations",
    type: "swe",
    description: "Production-style API integration sample.",
    tech: [".NET", "C#", "SQL"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <div>
        <p className="font-mono text-xs text-cyan-200/80">
          MODULE 01 — PROJECTS INDEX
        </p>
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="text-slate-400">
          SWE → Data → Bioinformatics. Filterable later.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {PROJECTS.map((proj) => (
          <Card
            key={proj.title}
            className="bg-slate-900/40 border-slate-800 hover:border-cyan-400/40 transition"
          >
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">{proj.title}</h2>
                <span className="text-[10px] uppercase text-cyan-200 font-mono">
                  {proj.type}
                </span>
              </div>
              <p className="text-sm text-slate-400">{proj.description}</p>
              <p className="text-[10px] text-slate-500 font-mono">
                {proj.tech.join(" • ")}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
