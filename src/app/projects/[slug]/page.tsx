import { projects } from "../../../data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto px-8 py-16">
      <Link
        href="/projects"
        className="text-gray-600 hover:text-black transition"
      >
        ← Back to Projects
      </Link>

      <section className="mt-8">
        <h1 className="text-4xl font-bold">{project.title}</h1>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.stack.map((tech) => (
            <span key={tech} className="border rounded-full px-3 py-1 text-sm">
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl">
          {project.description}
        </p>
      </section>

      <section className="mt-10">
        <div className="relative w-full h-[500px] bg-gray-50 rounded-xl border overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-contain p-6"
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Project Highlights</h2>

        <ul className="mt-4 list-disc pl-6 space-y-2">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {project.sections.map((section) => (
        <section key={section.title} className="mt-12">
          <h2 className="text-2xl font-bold">{section.title}</h2>

          <p className="mt-4 text-gray-600 leading-7">{section.text}</p>
        </section>
      ))}

      {project.secondaryImages.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Additional Project Visuals</h2>

          <div className="grid gap-6 mt-6 md:grid-cols-2">
            {project.secondaryImages.map((image) => (
              <div
                key={image.src}
                className="relative w-full h-[420px] bg-gray-50 rounded-xl border overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain p-4"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {project.github && !project.github.startsWith("YOUR_") && (
        <section className="mt-12">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:opacity-80 transition"
          >
            View Project
          </a>
        </section>
      )}
    </main>
  );
}
