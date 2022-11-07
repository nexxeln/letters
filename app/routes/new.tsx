import { Form } from "@remix-run/react";

const NewPage = () => {
  return (
    <main className="flex flex-col items-center p-6 text-left">
      <h1 className="pb-6 text-3xl font-extrabold text-gray-200">
        Write a New Letter
      </h1>

      <Form>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="header" className="font-semibold">
            Header
          </label>
          <input
            name="header"
            id="header"
            type="text"
            placeholder="Header"
            className="w-96 rounded  border border-neutral-800 bg-neutral-900 px-4 py-2 placeholder:text-neutral-500 focus:outline-none"
          />
          <label htmlFor="content" className="font-semibold">
            Content
          </label>
          <textarea
            name="content"
            id="content"
            cols={30}
            rows={15}
            placeholder="Your letter content goes here"
            className="w-96 rounded  border border-neutral-800 bg-neutral-900 px-4 py-2 placeholder:text-neutral-500 focus:outline-none"
          ></textarea>
        </div>
      </Form>
    </main>
  );
};

export default NewPage;
