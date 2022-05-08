import { Client } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

console.log('Bot is starting...');

const client = new Client({
    intents: [],
});
client.login(process.env.BOT_TOKEN);

console.log(client);