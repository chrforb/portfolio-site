import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 border-b">
      <Link href="/" className="font-bold text-xl">
        Christian Forbes
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/about">About</Link>

        <Link href="/projects">Projects</Link>

        <a href="/resume.pdf" target="_blank">
          Resume
        </a>

        <a
          href="https://github.com/chrforb"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/christian-l-forbes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
}
