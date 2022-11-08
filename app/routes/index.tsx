import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Link to="/new" className="text-3xl font-black">
        Write a Letter
      </Link>
      <span className="">(this is a link btw)</span>
    </main>
  );
}
