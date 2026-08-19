export default function Footer() {
  return (
    <footer className="border-t mt-20 px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h2 className="font-bold">Christian Forbes</h2>

          <p className="text-gray-600 mt-2">Informatics Developer</p>
        </div>

        <div className="flex gap-5">
          <a href="https://github.com/" target="_blank">
            GitHub
          </a>

          <a href="https://linkedin.com/" target="_blank">
            LinkedIn
          </a>

          <a href="mailto:christianlforbes@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
