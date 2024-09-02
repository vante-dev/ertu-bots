const { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
    console.log(`Vante Bots Basliyor ${readyClient.user.tag}`);
});

client.login(""); // bot tokeni buraya
