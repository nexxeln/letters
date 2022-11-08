import { json, type LoaderArgs } from "@remix-run/node";
import { useCatch, useLoaderData } from "@remix-run/react";
import { marked } from "marked";
import sanitize from "sanitize-html";
import invariant from "tiny-invariant";
import { getLetterFromId } from "~/services/letters.server";

export const loader = async ({ params }: LoaderArgs) => {
  const { id } = params;
  invariant(id, "id is required");

  const letter = await getLetterFromId({ id });

  if (!letter) {
    throw new Response("Not Found", { status: 404 });
  }

  const html = sanitize(marked.parse(letter.content));

  return json({
    header: letter.header,
    html,
  });
};

const LetterPage = () => {
  const { header, html } = useLoaderData<typeof loader>();

  return (
    <main>
      <h1>{header}</h1>
      <hr />
      <p dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
};

export default LetterPage;

export const CatchBoundary = () => {
  const caught = useCatch();

  if (caught.status === 404) {
    return <main>Letter not Found</main>;
  }

  throw new Error(`Unsupported thrown Response status code: ${caught.status}`);
};

export const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <main>
      Oh no! Something went wrong! Couldn't fetch letter.
      <pre>{error.message}</pre>
    </main>
  );
};
