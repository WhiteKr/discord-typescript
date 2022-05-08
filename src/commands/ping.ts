import { Client, BaseCommandInteraction, CacheType } from "discord.js";
import { Command } from "../command";

export const Ping: Command = {
    name: 'ping',
    description: 'Returns a pong',
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        await interaction.followUp({
            ephemeral: true,
            content: 'Pong!',
        });
    },
};