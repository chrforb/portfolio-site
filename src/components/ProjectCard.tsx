import Image from "next/image";
import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  stack: string[];
  description: string;
  highlights: string[];
  image: string;
  github: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden border rounded-xl hover:shadow-lg transition">
      <div className="relative w-full h-64 bg-gray-50">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-contain p-4"
        />
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold">{project.title}</h2>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.stack.map((tech) => (
            <span key={tech} className="border rounded-full px-3 py-1 text-sm">
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-5 text-gray-600">{project.description}</p>

        <ul className="mt-5 list-disc pl-5">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="flex gap-3 mt-6">
          <Link
            href={`/projects/${project.slug}`}
            className="border px-5 py-2 rounded-lg hover:bg-black hover:text-white transition"
          >
            View Project
          </Link>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border px-5 py-2 rounded-lg"
          >
            External
          </a>
        </div>
      </div>
    </div>
  );
}
