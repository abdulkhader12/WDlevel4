/* eslint-disable no-undef */
const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  let today = new Date().toLocaleDateString("en-CA");
  // let today = new Date().toISOString().split("T")[0];

  // due for today
  const dueToday = () => {
    return all.filter((todo) => {
      return todo.dueDate === today;
    });
  };

  // due later
  const dueLater = () => {
    return all.filter((todo) => {
      return todo.dueDate > today;
    });
  };

  //overdue
  const overdue = () => {
    return all.filter((todo) => {
      return todo.dueDate < today;
    });
  };

  //displaying list
  const toDisplayableList = (list) => {
    return list
      .map((todo) => {
        display_status = todo.completed ? "[x]" : "[ ]";
        display_date = todo.dueDate == today ? "" : todo.dueDate;

        return `${display_status} ${todo.title} ${display_date}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};
module.exports = todoList;

