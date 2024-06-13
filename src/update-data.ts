import { getClient } from "./utils";

async function updateTodo (todoId: number) {
    const client = await getClient();

    const updateTodoText = 'UPDATE todos SET done = $1 WHERE id = $2';
    await client.query(updateTodoText, [false, todoId]);

    console.log(`Todo with ID ${todoId} updated to not done!`);
}

const todoIdToUpdate = 1;
updateTodo(todoIdToUpdate);