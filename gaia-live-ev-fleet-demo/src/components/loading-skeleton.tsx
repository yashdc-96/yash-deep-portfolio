export function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="glass-card h-20 animate-pulse bg-white/40 dark:bg-slate-800/40" />
      ))}
    </div>
  )
}
