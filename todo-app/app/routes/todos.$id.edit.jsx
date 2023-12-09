import { updateTodo } from "../data";

export async function action({ params, request }) {
  const body = await request.formData();
  const id = await params.id;
  const updatedTodo = await updateTodo(id, { title: body.get("title") });
  return updatedTodo;
}
