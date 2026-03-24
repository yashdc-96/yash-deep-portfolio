import { showcasedProjects } from '../firebase/projects'

export function ProjectsPage() {
  return (
    <section className="space-y-6">
      <header className="glass-card p-6">
        <h2 className="text-2xl font-semibold">My Projects</h2>
        <p className="mt-2 text-muted-foreground">Selected programs across enterprise AI tooling, government systems and scalable UI architecture.</p>
      </header>
      <div className="grid gap-4 lg:grid-cols-3">
        {showcasedProjects.map((project) => (
          <article key={project.title} className="glass-card p-5">
            <p className="text-sm text-primary">{project.organization}</p>
            <h3 className="mt-1 text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span key={tag} className="rounded-full bg-primary/15 px-2.5 py-1 text-xs text-primary">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
