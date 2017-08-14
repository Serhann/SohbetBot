const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '&';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (msg.content === 'of') {
   	msg.reply('Of deme ah de!');
  }
  if (msg.content === 'ah') {
   	msg.reply('Ah deme oh de!');
  }
  if (msg.content === 'oh') {
   	msg.reply('Oh deme püf de!');
  }
  if (msg.content === 'püf') {
   	msg.reply('Püf deme of de!');
  }
  if (msg.content === 'günaydın') {
   	msg.reply('sana da günaydın');
  }
  if (msg.content === 'herkese günaydın') {
   	msg.reply('günaydın :)');
  }
  if (msg.content === 'iyi geceler') {
   	msg.reply('sana da iyi geceler');
  }
  if (msg.content === 'sa') {
   	msg.reply('as');
  }
  if (msg.content === 'iyi akşamlar') {
   	msg.reply('sana da iyi akşamlar');
  }
  if (msg.content === 'selamın aleyküm') {
   	msg.reply('aleyküm selam');
  }
  if (msg.content === 'güle güle') {
   	msg.reply('sana da güle güle');
  }
});

client.login('TOKEN');
