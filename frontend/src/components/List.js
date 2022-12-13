import React from "react"
import Todo from "./Todo"

const List = ({ list, removeTodoListProp, editTodoListProp }) => {
  const renderedList = list.map((item) => (
    <Todo
      title={item.title}
      completed={item.completed}
      removeTodoListProp={(e) => removeTodoListProp(item._id)}
      editTodoListProp={(updatedItem) =>
        editTodoListProp(item._id, updatedItem)
      }
      key={item.title}
    />
  ))
  return <div>{renderedList}</div>
}

export default List
