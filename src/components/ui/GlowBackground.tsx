export function GlowBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute left-[-15%] top-[-10%] h-72 w-72 rounded-full bg-sky-500/25 blur-3xl" />
      <div className="absolute right-[-10%] top-[20%] h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="absolute bottom-[5%] left-[15%] h-64 w-64 rounded-full bg-fuchsia-500/15 blur-3xl" />
      <div className="absolute bottom-[20%] right-[10%] h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
    </div>
  )
}
