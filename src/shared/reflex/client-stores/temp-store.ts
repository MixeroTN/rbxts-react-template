import { createProducer } from "@rbxts/reflex";

interface tempStore {
    readonly todos: readonly string[];
}

const defaultState: tempStore = {
    todos: []
}

export const tempStore = createProducer(defaultState, {
    addTodo: (state, todo: string) => ({
        ...state,
        todos: [...state.todos, todo],
    }),

    removeTodo: (state, todo: string) => ({
        ...state,
        todos: state.todos.filter((t) => t !== todo),
    }),
})