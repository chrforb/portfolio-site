export default function About() {
  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "PHP",
    "SQL",
    "Python",
    "R",
    "Git",
    "REST APIs",
    "MySQL",
    "Figma",
  ];

  return (
    <main className="max-w-5xl mx-auto px-8 py-16">
      <section className="max-w-3xl">
        <p className="text-gray-500 text-lg">About Me</p>

        <h1 className="text-4xl font-bold mt-2">
          Developer, analyst, and problem solver.
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          I'm an Informatics student at Indiana University with interests
          spanning software development, data analytics, and human-centered
          design.
        </p>

        <p className="mt-5 text-lg text-gray-600 leading-8">
          I enjoy building projects that combine technical problem solving with
          practical applications—from developing REST APIs and relational
          databases to analyzing large datasets and designing interactive user
          experiences.
        </p>

        <p className="mt-5 text-lg text-gray-600 leading-8">
          My work has given me experience across backend development, frontend
          technologies, statistical analysis, data visualization, database
          design, and UX prototyping.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">Skills & Technologies</h2>

        <div className="flex flex-wrap gap-3 mt-6">
          {skills.map((skill) => (
            <span key={skill} className="border rounded-full px-4 py-2 text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">What I Work With</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-lg">Development</h3>

            <p className="mt-3 text-gray-600 leading-7">
              Web applications, REST APIs, backend systems, relational
              databases, and authentication.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-lg">Data</h3>

            <p className="mt-3 text-gray-600 leading-7">
              Data cleaning, statistical analysis, modeling, visualization, and
              communicating insights.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-lg">UX & HCI</h3>

            <p className="mt-3 text-gray-600 leading-7">
              User-centered research, prototyping, accessibility, and
              interactive experience design.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14 flex gap-4">
        <a
          href="/projects"
          className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-80 transition"
        >
          View My Work
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border px-6 py-3 rounded-lg hover:bg-gray-50 transition"
        >
          View Resume
        </a>
      </section>
    </main>
  );
}
