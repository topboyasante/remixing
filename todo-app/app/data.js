const todos = {
  records: [],

  //function to get all Todos
  async getAll() {
    return todos.records;
  },

  //function to create a todo
  async create(values) {
    //Let's check if an ID exists. if there's no ID . create a new one:
    const id = Math.random().toString(36).substring(2, 9);
    //Holds the date the todo was created
    const createdAt = new Date().toISOString();
    //the new Todo object
    const newTodo = { id, createdAt, ...values };
    //add the new todo object to the records
    todos.records.push(newTodo);
    //retrun the new todo
    return newTodo;
  },

  async getOne(id) {
    return todos.records.find((item) => item.id === id);
  },

  async update(id, values) {
    let todo = await todos.getOne(id);
    const updatedTodo = { ...todo, ...values };
    return updatedTodo;
  },
};

//Exported Functions(Sort of the Repository Pattern in Dotnet):
export async function createTodo(values) {
  const todo = await todos.create(values);
  return todo;
}

export async function getTodos() {
  let todosList = await todos.getAll();
  return todosList;
}

export async function updateTodo(id, updates) {
  const todoToBeUpdated = await todos.getOne(id);
  if (!todoToBeUpdated) {
    throw new Error(`No Todo found for ${id}`);
  }
  const updatedTodo = await todos.update(id, {
    ...todoToBeUpdated,
    ...updates,
  });
  return updatedTodo;
}
