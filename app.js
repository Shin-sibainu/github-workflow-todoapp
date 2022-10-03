$("#addTodo").click(function () {
  const inputTodo = $("input").val();
  $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");

  $("input").val("");
});

$(document).on("change", "input[type=checkbox]", function () {
  if ($(this).is(":checked")) {
    $(this).parent().css("text-decoration", "line-through");
    $(this).parent().css("color", "#ccc");
  } else {
    $(this).parent().css("text-decoration", "none");
    $(this).parent().css("color", "#000");
  }
});
//vanillna js
// const addTodoElem = document.getElementById("addTodo");
// const todoListElem = document.getElementById("todoList");
// const inputTodo = document.querySelector("input");
// console.log(inputTodo);

// addTodoElem.addEventListener("click", () => {
//   todoListElem.append("<li>" + inputTodo + "</li>");
// });
