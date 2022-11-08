import { type ActionArgs, json, redirect } from "@remix-run/node";
import { Form, useActionData, useTransition } from "@remix-run/react";
import invariant from "tiny-invariant";
import { createLetter } from "~/services/letters.server";

type ActionData =
  | {
      header: string | null;
      content: string | null;
    }
  | undefined;

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  const header = formData.get("header");
  const content = formData.get("content");

  const errors: ActionData = {
    header: header ? null : "Header is required",
    content: content ? null : "Content is required",
  };

  const hasErrors =
    errors.content === null && errors.content === null ? false : true;

  if (hasErrors) {
    return json<ActionData>(errors);
  }

  invariant(typeof header === "string", "header must be a string");
  invariant(typeof content === "string", "content must be a string");

  const letter = await createLetter({ header, content });

  return redirect(`/l/${letter.id}`);
};

const NewPage = () => {
  const errors = useActionData() as ActionData;
  const transition = useTransition();
  const loading = Boolean(transition.submission);

  return (
    <main className="flex flex-col items-center p-6 text-left">
      <h1 className="pb-6 text-3xl font-extrabold text-gray-200">
        Write a New Letter
      </h1>

      <Form method="post">
        <div className="flex flex-col gap-y-4">
          <label htmlFor="header" className="font-semibold">
            Header
          </label>
          {errors?.header ? (
            <span className="text-sm text-red-500">{errors.header}</span>
          ) : null}
          <input
            name="header"
            id="header"
            type="text"
            placeholder="Header"
            required
            className="w-96 rounded  border border-neutral-800 bg-neutral-900 px-4 py-2 placeholder:text-neutral-500 focus:outline-none"
          />
          <label htmlFor="content" className="font-semibold">
            Content
          </label>
          {errors?.content ? (
            <span className="text-sm text-red-500">{errors.content}</span>
          ) : null}
          <textarea
            name="content"
            id="content"
            cols={30}
            rows={15}
            placeholder="Your letter content goes here"
            required
            className="w-96 rounded  border border-neutral-800 bg-neutral-900 px-4 py-2 placeholder:text-neutral-500 focus:outline-none"
          />

          <button
            type="submit"
            className="rounded border border-neutral-700 bg-neutral-800 p-2 px-4 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={loading}
          >
            Next
          </button>
        </div>
      </Form>
    </main>
  );
};

export default NewPage;

export const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <main>
      Oh no! Something went wrong! Couldn't create letter.
      <pre>{error.message}</pre>
    </main>
  );
};
