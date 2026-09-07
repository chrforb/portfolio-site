import Link from "next/link";
export default function Home() {
  return (
    <main className="px-8 py-24">
      <section className="max-w-4xl">
        <p className="text-gray-500 text-lg">Data & Informatics Analyst</p>

        <h1 className="text-6xl font-bold mt-4">Christian Forbes</h1>

        <h2 className="text-3xl mt-6 text-gray-700">
          Building data-driven solutions through analytics, databases, and
          visualization.
        </h2>

        <p className="mt-8 text-lg text-gray-600 max-w-2xl">
          Informatics student at Indiana University Indianapolis focused on data
          analytics, relational databases, SQL, visualization, and
          human-centered problem solving.
        </p>

        <div className="flex gap-4 mt-10">
          <Link
            href="/projects"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            View Projects
          </Link>

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
              "SQL",
              "Excel",
              "Power BI",
              "Tableau",
              "Python",
              "R",
              "Data Visualization",
              "Relational Database Design",
              "MySQL",
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
