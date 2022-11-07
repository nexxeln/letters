import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="">
      <h1 className="">Letters</h1>
      <Link to="/new">Create New</Link>
    </main>
  );
}
