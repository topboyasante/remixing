import { Form } from "@remix-run/react";


export default function AddTodo() {
  return (
    <Form method="post" className="my-16">
      <input
        type="text"
        name="title"
        className="bg-transparent text-white border-2 border-[#404040] rounded px-2 py-1"
      />
      <br />
      <button type="submit" className="bg-blue-500 my-5 rounded px-4 py-2">
        Create Todo
      </button>
    </Form>
  );
}
