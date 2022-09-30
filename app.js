$("#addTodo").click(function () {
  const inputTodo = $("input").val();
  $("#todoList").append("<li>" + inputTodo + "</li>");
});

//vanillna js
// const addTodoElem = document.getElementById("addTodo");
// const todoListElem = document.getElementById("todoList");
// const inputTodo = document.querySelector("input");
// console.log(inputTodo);

// addTodoElem.addEventListener("click", () => {
//   todoListElem.append("<li>" + inputTodo + "</li>");
// });
