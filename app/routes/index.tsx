import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Link to="/new" className="link text-3xl font-black">
        Write a Letter
      </Link>

      <footer className="fixed bottom-2 left-2 text-xs text-gray-400">
        Created by{" "}
        <a
          href="https://www.nexxel.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 underline"
        >
          Shoubhit Dash
        </a>
        . Open source on{" "}
        <a
          href="https://github.com/nexxeln/letters"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 underline"
        >
          GitHub
        </a>
        .
      </footer>
    </main>
  );
}
