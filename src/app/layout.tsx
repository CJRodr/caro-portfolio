// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Carolina Rodriguez — Software Engineer",
  description: "SWE → Data Science → Bioinformatics. Retro-futuristic portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100">
        <header className="border-b border-cyan-500/30 bg-slate-950/70 backdrop-blur">
          <div className="mx-auto max-w-6xl flex items-center justify-between py-4 px-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-sm tracking-tight">
                SYS: CARO-46
              </span>
            </div>
            <nav className="flex gap-6 text-sm font-mono">
              <a href="/" className="hover:text-cyan-300">home</a>
              <a href="/projects" className="hover:text-cyan-300">projects</a>
              <a href="/lab" className="hover:text-cyan-300">bio lab</a>
              <a href="/notes" className="hover:text-cyan-300">notes</a>
              <a href="/contact" className="hover:text-cyan-300">contact</a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500 font-mono">
          © {new Date().getFullYear()} Carolina. System uptime: stable.
        </footer>
      </body>
    </html>
  );
}
