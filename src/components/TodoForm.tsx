'use client'

import { useActionState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { addNewTodo } from "@/app/actions/addNewTodo"

const TodoForm = () => {
    const [state, formAction, pending] = useActionState(addNewTodo, null)

    return (
        <form action={formAction} className="flex space-x-1 p-4">
            <Input type="text" name="todo" placeholder="Add new todo..." />
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default TodoForm;