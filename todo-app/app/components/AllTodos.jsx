export default function AllTodos({ todoList }) {
  return (
    <div className="my-5 px-8 py-5">
      {todoList?.map((item) => {
        return (
          <div key={item.id} className="border-2 rounded p-5 border-[#404040] my-5">
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}
