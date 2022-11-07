import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getLetterFromId } from "~/services/letters.server";

export const loader = async ({ params }: LoaderArgs) => {
  const id = params.id!;

  const letter = await getLetterFromId({ id });

  if (!letter)
    return json({
      header: null,
      content: null,
      error: true,
      errorMessage: "Couldn't fetch data",
    });

  return json({
    ...letter,
    error: false,
    errorMessage: null,
  });
};

const LetterPage = () => {
  const data = useLoaderData<typeof loader>();

  if (data.error) {
    return <main>{data.errorMessage}</main>;
  }

  return (
    <main>
      <h1>{data.header}</h1>
      <hr />
      <p>{data.content}</p>
    </main>
  );
};

export default LetterPage;
