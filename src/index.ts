import { Client } from "discord.js";
import dotenv from "dotenv";
import ready from "./listeners/ready";

dotenv.config();

console.log('Bot is starting...');

const client = new Client({
    intents: [],
});

ready(client);

client.login(process.env.BOT_TOKEN);