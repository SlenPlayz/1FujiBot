const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity({name:'procrastination', type:'PLAYING'}); 
})
client.on('message', msg => {
  switch(msg.content){
    case '!exam':
      msg.reply('Schedule: \n https://drive.google.com/file/d/11ainApP0rLnYa-EHamhPvEC_15zOU97k/view \n Topics Tested \n Express: https://drive.google.com/file/d/1sBrsWBuTmtND7vJz_Ewiqdjf0EptR9NJ/view \n NA: https://drive.google.com/file/d/1phGObmzyzvKuvWNz8btK3BUE6kGAgWWS/view \n NT: https://drive.google.com/file/d/1phGObmzyzvKuvWNz8btK3BUE6kGAgWWS/view');
      break;
      case '!suggest':
        msg.reply('Suggest features here: https://forms.gle/o8UcJoD8zATkg9DE9')
        break;
      case '!help':
        msg.reply(`List of avalible commands:\n!exam - gives links to exam schdule and what is tested. \n \n!timetable - Sends the timetable to the chat.\n \n!suggest - Sends a link to a google form to suggest features.\n \n
        `)
        break;
      case '!timetable':
      msg.reply('Message that goes above image', {
        files: [
          "https://i.ibb.co/Zh8MY26/ED679-DCE-3-EEE-42-CE-8-D22-653-C5-D61-F268.jpg"
        ]})
        break;
      default:
        console.log(`Message by (id:${msg.author.id} Username: ${msg.author.username}#${msg.author.discriminator}): ${msg.content}`)
        break;
    }
    if(msg.content.substring(0,4) === '!say'){
      msg.channel.send(msg.content.substring(5))
    }
});

client.login(process.env.DISCORD_TOKEN);
