const Discord = require('discord.js');
const config = require('./config.json');
const { Client, Intents, GatewayIntentBits } = require('discord.js');
const client = new Discord.Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.GuildMembers,
],});

client.once('ready', () => {
  console.log('Bot is nu online!');
});

client.on('guildMemberAdd', member => {  
  member.guild.roles.fetch('884780453272383539')
  .then(role => member.roles.add(role))
  .catch(console.error)  
});

client.login(config.token);

