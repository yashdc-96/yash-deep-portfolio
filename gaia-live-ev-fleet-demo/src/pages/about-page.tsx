export function AboutPage() {
  return (
    <section className="space-y-4">
      <header className="glass-card p-6">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          I am Yash Deep, a senior front-end engineer focused on UX-driven architecture, modern React systems and AI-augmented product delivery.
          This demo showcases real-time telemetry UX, live mapping and production-grade state design with Firebase.
        </p>
      </header>
      <article className="glass-card p-6">
        <h3 className="text-lg font-semibold">Core Skills</h3>
        <ul className="mt-3 grid list-disc gap-2 pl-5 text-sm text-muted-foreground sm:grid-cols-2">
          <li>React, TypeScript, Vite, Router architecture</li>
          <li>Realtime systems with Firebase and map visualization</li>
          <li>Design systems, accessibility, UX performance</li>
          <li>AI-assisted front-end delivery workflows</li>
        </ul>
      </article>
    </section>
  )
}
