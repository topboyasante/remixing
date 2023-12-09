import { Form, useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";

export default function AllTodos({ todoList }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const fetcher = useFetcher();

  useEffect(() => {
    if (fetcher.data) {
      console.log(fetcher.data)
      setIsEditMode(false);
    }
  }, [fetcher.data]);

  return (
    <div className="my-5 px-8 py-5">
      {todoList?.map((item) => {
        return (
          <div
            key={item.id}
            className="border-2 rounded p-5 border-[#404040] my-5"
          >
            <section>
              {isEditMode ? (
                <fetcher.Form
                  action={`/todos/${item.id}/edit`}
                  method="patch"
                  onSubmit={(event) => {
                    const response = confirm(
                      "Please confirm you want to Edit this record."
                    );
                    if (!response) {
                      event.preventDefault();
                    }
                  }}
                >
                  <input
                    type="text"
                    name="title"
                    defaultValue={item.title}
                    className="bg-transparent text-white border-2 border-[#404040] rounded px-2 py-1"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 my-5 rounded px-4 py-2"
                  >
                    Edit Todo
                  </button>
                </fetcher.Form>
              ) : (
                <p>{item.title}</p>
              )}
            </section>
            <section className="flex">
              <button
                type="submit"
                onClick={() => setIsEditMode(!isEditMode)}
                className={
                  isEditMode
                    ? "bg-red-500 text-black px-2 py-1 rounded mt-5"
                    : "bg-yellow-500 text-black px-2 py-1 rounded mt-5"
                }
              >
                {isEditMode ? "Cancel" : "Edit"}
              </button>
            </section>
          </div>
        );
      })}
    </div>
  );
}
