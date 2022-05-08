import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "src/command";

export const Hello: Command = {
    name: 'hello',
    description: 'Returns a greeting',
    type: 'CHAT_INPUT',
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        await interaction.followUp({
            ephemeral: true,
            content: 'Hello there!',
        });
    }
};