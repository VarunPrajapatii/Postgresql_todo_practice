import { Client } from "pg";

export async function getClient() {
    await client.connect();
    return client
}