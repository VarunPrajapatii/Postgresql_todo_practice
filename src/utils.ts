import { Client } from "pg";

export async function getClient() {
    const client = new Client("");
    await client.connect();
    return client
}