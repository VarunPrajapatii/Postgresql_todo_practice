import { getClient } from "./utils";

async function createEntities () {
    const client = await getClient();
    const insertUserText = "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id";
    const userValues = ['varunprajapati123@gmail.com', 'hashed_password'];

    let response = await client.query(insertUserText, userValues);

    const insertTodoText = 'INSERT INTO todos (title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id';
    const todoValues = ['Buy groceries', 'Milk, bread, eggs', response.rows[0].id, false];

    await client.query(insertTodoText, todoValues);

    console.log("Entries created!");
    

}

createEntities();