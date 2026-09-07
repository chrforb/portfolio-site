import Link from "next/link";

export default function About() {
  const skills = [
    "SQL",
    "Excel",
    "Power BI",
    "Python",
    "R",
    "Tableau",
    "MySQL",
    "Relational Database Design",
    "Data Visualization",
    "Git",
    "REST APIs",
    "JavaScript",
    "React",
  ];

  return (
    <main className="max-w-5xl mx-auto px-8 py-16">
      <section className="max-w-3xl">
        <p className="text-gray-500 text-lg">About</p>

        <h1 className="text-4xl font-bold mt-2">
          Data-focused Informatics student building practical technical
          solutions.
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          I&apos;m an Informatics student at Indiana University Indianapolis,
          graduating in December 2026, with a focus on data analytics,
          relational databases, and applied problem solving.
        </p>

        <p className="mt-5 text-lg text-gray-600 leading-8">
          I work with SQL, Python, R, Power BI, Tableau, and MySQL to clean
          data, analyze patterns, design databases, and communicate findings
          through clear visualizations and reports.
        </p>

        <p className="mt-5 text-lg text-gray-600 leading-8">
          My projects have included analyzing 25,000+ European soccer matches,
          developing relational database systems, and conducting user-centered
          research. I also work as a Teaching Assistant supporting students with
          SQL, database design, normalization, ER diagrams, triggers, and views.
        </p>

        <p className="mt-5 text-lg text-gray-600 leading-8">
          I&apos;m especially interested in entry-level opportunities in data
          analytics, business intelligence, reporting, database-focused roles,
          and informatics.
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

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-lg">Data & Analytics</h3>

            <p className="mt-3 text-gray-600 leading-7">
              Data cleaning, exploratory analysis, statistical analysis,
              visualization, dashboards, and communicating actionable insights.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-lg">Databases</h3>

            <p className="mt-3 text-gray-600 leading-7">
              SQL, MySQL, relational database design, normalization, ER
              diagrams, schema design, and database implementation.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-lg">Development</h3>

            <p className="mt-3 text-gray-600 leading-7">
              REST APIs, backend development, JavaScript, React, and web
              application development.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-lg">UX & HCI</h3>

            <p className="mt-3 text-gray-600 leading-7">
              User-centered research, accessibility, prototyping, and
              translating user needs into practical design decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14 flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-80 transition"
        >
          View My Work
        </Link>

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
