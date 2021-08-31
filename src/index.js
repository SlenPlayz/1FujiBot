const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity({name:'games instead of hw', type:'PLAYING'});
})
client.on('message', msg => {
  // if (msg.member.roles.cache.find(role => role.name == "Mod")) {
  //   console.log('yes')
  // }
  switch(msg.content){
    case '!exam':
      // msg.reply('Schedule: \n https://drive.google.com/file/d/11ainApP0rLnYa-EHamhPvEC_15zOU97k/view \n Topics Tested \n Express: https://drive.google.com/file/d/1sBrsWBuTmtND7vJz_Ewiqdjf0EptR9NJ/view \n NA: https://drive.google.com/file/d/1phGObmzyzvKuvWNz8btK3BUE6kGAgWWS/view \n NT: https://drive.google.com/file/d/1phGObmzyzvKuvWNz8btK3BUE6kGAgWWS/view');
      // break;
      msg.reply('No upcoming exams!!! Enjoy the holidays! :D')
      break;
      case '!exams':
      // msg.reply('Schedule: \n https://drive.google.com/file/d/11ainApP0rLnYa-EHamhPvEC_15zOU97k/view \n Topics Tested \n Express: https://drive.google.com/file/d/1sBrsWBuTmtND7vJz_Ewiqdjf0EptR9NJ/view \n NA: https://drive.google.com/file/d/1phGObmzyzvKuvWNz8btK3BUE6kGAgWWS/view \n NT: https://drive.google.com/file/d/1phGObmzyzvKuvWNz8btK3BUE6kGAgWWS/view');
      // break;
      msg.reply('No upcoming exams!!! Enjoy the holidays! :D')
      break;
      case '!suggest':
        msg.reply('Suggest features here: https://forms.gle/o8UcJoD8zATkg9DE9')
        break;
      case '!help':
        msg.reply(`List of avalible commands:\n!exam - gives links to exam schdule and what is tested. \n \n!timetable - Sends the timetable to the chat.\n \n!suggest - Sends a link to a google form to suggest features.\n \n
        `)
        break;
      case '!timetable':
      msg.channel.send('https://i.ibb.co/Zh8MY26/ED679-DCE-3-EEE-42-CE-8-D22-653-C5-D61-F268.jpg')
        break;
      // default:
      //   console.log(`Message by (id:${msg.author.id} Username: ${msg.author.username}#${msg.author.discriminator}): ${msg.content}`)
      //   break;
    }
    if(msg.content.substring(0,4) === '!say'){
      if (msg.member.roles.cache.find(role => role.name == "SayCmdUsage")) {
        if(msg.content.substring(5) != '') {
        msg.delete()
        msg.channel.send(msg.content.substring(5));
        }
        else{
          msg.reply('Enter a message for me to repeat')
        }
      }
      else{
        msg.reply('You dont have permission to use that command')
      }
    }
});

client.login(process.env.DISCORD_TOKEN);
