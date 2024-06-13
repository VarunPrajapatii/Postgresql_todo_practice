import { getClient } from "./utils";

async function getUser () {
    const client = await getClient();

    const selectUserText = 'SELECT * FROM users';
    const userRes = await client.query(selectUserText);

    console.log("Users:");
    for(let user of userRes.rows) {
        console.log(`Id: ${user.id}, Email: ${user.email}`);        
    }
}

async function getUserFromEmail(email: string) {
    const client = await getClient();

    const selectUserText = `SELECT * FROM users WHERE email = $1`;
    const userRes = await client.query(selectUserText, [email]);

    console.log("Single User detail: ");
    for(let user of userRes.rows) {
        console.log(`Id: ${user.id}, Email: ${user.email}`);
    }    
}

async function getTodosForUser(userId: number) {
    const client = await getClient();

    const selectTodoText = `SELECT * FROM todos WHERE user_id = $1`;
    const todoRes = await client.query(selectTodoText, [userId]);

    console.log("Todos: ");
    for(let todo of todoRes.rows) {
        console.log(`ID: ${todo.id}, Title: ${todo.title}, Description: ${todo.description}, Done: ${todo.done}`);
    }
}

getUser();
getUserFromEmail("varunpjp@mail.com");

const userIdToFetch = 1;
getTodosForUser(userIdToFetch);