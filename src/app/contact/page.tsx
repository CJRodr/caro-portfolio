// src/app/contact/page.tsx

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <p className="font-mono text-xs text-cyan-200/80">
        MODULE 05 — CONTACT INTERFACE
      </p>
      <h1 className="text-3xl font-semibold tracking-tight">Get in touch</h1>
      <p className="text-slate-400 max-w-2xl">
        I’m currently focused on software engineering roles with a data / bioinformatics
        angle. If you’d like to talk about projects, research, or roles, reach out below.
      </p>

      <div className="bg-slate-900/40 border border-slate-800 rounded-lg p-6 space-y-4">
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-slate-200" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="w-full bg-slate-950/50 border border-slate-700 rounded-md px-3 py-2 text-slate-100 focus:outline-none focus:border-cyan-400"
              placeholder="Your name"
              type="text"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-slate-200" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="w-full bg-slate-950/50 border border-slate-700 rounded-md px-3 py-2 text-slate-100 focus:outline-none focus:border-cyan-400"
              placeholder="name@company.com"
              type="email"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-slate-200" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full bg-slate-950/50 border border-slate-700 rounded-md px-3 py-2 text-slate-100 min-h-[140px] focus:outline-none focus:border-cyan-400"
              placeholder="Tell me a bit about the role or project…"
            />
          </div>

          {/* This is just UI for now; we can wire it to an API route later */}
          <button
            type="submit"
            className="bg-cyan-400 text-slate-950 px-4 py-2 rounded-md font-medium hover:bg-cyan-300 transition"
          >
            Send
          </button>
        </form>
      </div>

      <div className="text-sm text-slate-500 font-mono">
        Or email me directly: <span className="text-slate-200">youremail@example.com</span>
      </div>
    </div>
  );
}
