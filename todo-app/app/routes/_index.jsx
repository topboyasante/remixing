import AddTodo from "../components/AddTodo";
import AllTodos from "../components/AllTodos";
import { createTodo, getTodos } from "../data";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta = () => {
  return [{ title: "WhatToDo?" }];
};

export async function action({ request }) {
  const body = await request.formData();
  const todo = await createTodo({ title: body.get("title") });
  return todo;
}

export const loader = async () => {
  const todos = await getTodos();
  return json({ todos });
};

export default function Index() {
  const { todos } = useLoaderData();
  return (
    <section className="w-screen h-screen bg-[#121212] text-white">
      {/* Navbar */}
      <nav className="p-5 h-[8vh] border-b border-b-[#404040] flex items-center">
        <p>WhatToDo?</p>
      </nav>
      {/* Content */}
      <section className="flex w-full h-[92vh]">
        {/* Left */}
        <section className="lg:w-[50%] border-r border-r-[#404040] p-8 h-full">
          <h1 className="text-3xl">What do you want to do today?</h1>
          <AddTodo />
        </section>
        {/* Right - All Todos */}
        <section className="lg:w-[50%] h-full relative overflow-y-auto">
          <section className="sticky  top-0 bg-[#121212] p-5 w-full border-b">
            <h1 className="text-3xl">View All your Todos:</h1>
          </section>
          <AllTodos todoList={todos} />
        </section>
      </section>
    </section>
  );
}
