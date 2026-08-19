export default function Home() {
  return (
    <main className="px-8 py-24">
      <section className="max-w-4xl">
        <p className="text-gray-500 text-lg">Informatics Developer</p>

        <h1 className="text-6xl font-bold mt-4">Christian Forbes</h1>

        <h2 className="text-3xl mt-6 text-gray-700">
          Building full-stack applications, APIs, and data-driven experiences.
        </h2>

        <p className="mt-8 text-lg text-gray-600 max-w-2xl">
          Informatics student at Indiana University focused on software
          development, backend systems, data analytics, and human-centered
          design.
        </p>

        <div className="flex gap-4 mt-10">
          <a
            href="/projects"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="border px-6 py-3 rounded-lg"
          >
            Resume
          </a>
        </div>

        <div className="mt-16">
          <h3 className="font-bold text-xl">Skills</h3>

          <div className="flex flex-wrap gap-3 mt-5">
            {[
              "JavaScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "PHP",
              "SQL",
              "Python",
              "R",
              "Git",
            ].map((skill) => (
              <span key={skill} className="border rounded-full px-4 py-2">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
