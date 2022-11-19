/* eslint-disable no-undef */
const todoList = require("../todo");
let today = new Date().toLocaleDateString("en-CA");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todo list Test cases", () => {
  beforeAll(() => {
    add({
      title: "Finish WD-201 level 4",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  //test: adding a todo
  test("test : add", () => {
    let length = all.length;

    add({
      title: "Gym : legs workout(1 hour)",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1);
  });

  //test: completed
  test("test : completed", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  //test: retrievals
  test("test: retrieve due today ", () => {
    let listOfTodos = dueToday();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate === today;
      })
    ).toBe(true);
  });

  test("test: retrieve due later", () => {
    let listOfTodos = dueLater();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate > today;
      })
    ).toBe(true);
  });

  test("test: retrieve overdue", () => {
    let listOfTodos = overdue();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate < today;
      })
    ).toBe(true);
  });
});
