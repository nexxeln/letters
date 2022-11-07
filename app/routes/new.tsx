import { Form } from "@remix-run/react";

const NewPage = () => {
  return (
    <main className="flex flex-col items-start p-6 text-left">
      <h1 className="text-3xl font-extrabold text-gray-100">
        Write a New Letter
      </h1>

      <Form>
        <input type="text" placeholder="Header" />
      </Form>
    </main>
  );
};

export default NewPage;
