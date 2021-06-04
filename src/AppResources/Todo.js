import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class Todo extends React.Component {
    state = {
            todoObj: todosData
        }
        // this.handleChange = this.handleChange.bind(this)

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todoObj.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todoObj: updatedTodos
            }
        })
    }

    render() {
        const todoItemsObj = this.state.todoObj.map(item => <TodoItem key={item.id} item={item} handleChange={() => this.handleChange(item.id)}/>)
        return (
            <div className="todo-list">
                {todoItemsObj}
            </div>
        )
    }
}

export default Todo