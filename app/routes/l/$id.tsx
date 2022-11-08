import { json, type LoaderArgs } from "@remix-run/node";
import { useCatch, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getLetterFromId } from "~/services/letters.server";

export const loader = async ({ params }: LoaderArgs) => {
  const { id } = params;
  invariant(id, "id is required");

  const letter = await getLetterFromId({ id });

  if (!letter) {
    throw new Response("Not Found", { status: 404 });
  }

  return json(letter);
};

const LetterPage = () => {
  const data = useLoaderData<typeof loader>();

  return (
    <main>
      <h1>{data.header}</h1>
      <hr />
      <p>{data.content}</p>
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
