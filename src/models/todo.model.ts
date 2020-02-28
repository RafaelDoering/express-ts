class Todo {
  id: string;
  text: string;
  done: boolean;

  constructor(id: string, text: string, done: boolean) {
    this.id = id;
    this.text = text;
    this.done = done;
  }
}

export default Todo;
