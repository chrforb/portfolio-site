import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  return (
    <main className="px-8 py-20">
      <h1 className="text-4xl font-bold">Projects</h1>

      <p className="mt-4 text-gray-600">
        Software development, analytics, and UX projects.
      </p>

      <div className="grid gap-6 mt-10 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </main>
  );
}
