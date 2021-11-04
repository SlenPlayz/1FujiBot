const Discord = require('discord.js');
const client = new Discord.Client();
///const cron = require('node-cron');

const statuses = [{ name: 'games instead of hw', type: 'PLAYING' }, { name: 'Procrastination', type: 'PLAYING' }, { name: 'Speedrunning hw', type: 'PLAYING' }]
// cron.schedule('* * * * *', function() {
//   client.user.setActivity({name:'Loading..', type:'PLAYING'});
//   updateStatusWithRandom()
// });
const updateStatusWithRandom = () => {
  client.user.setActivity(statuses[Math.floor(Math.random() * (statuses.length + 1))]);
  //console.log(Math.floor(Math.random() * (statuses.length + 1)))
}
//console.log(Math.floor(Math.random() * (statuses.length + 1)))
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  //console.log(Math.floor(Math.random() * statuses.length + 1))
  //client.user.setActivity(statuses[Math.floor(Math.random() * (statuses.length + 1))]);
  client.user.setActivity({ name: 'FTE IS OVER!!!', type: 'PLAYING'});
  //updateStatusWithRandom()
})
client.on('message', msg => {
  // if (msg.member.roles.cache.find(role => role.name == "Mod")) {
  //   console.log('yes')
  // }
  switch (msg.content) {
    case '!exam':
      // msg.reply('Schedule: \n https://drive.google.com/file/d/11ainApP0rLnYa-EHamhPvEC_15zOU97k/view \n Topics Tested \n Express: https://drive.google.com/file/d/1sBrsWBuTmtND7vJz_Ewiqdjf0EptR9NJ/view \n NA: https://drive.google.com/file/d/1phGObmzyzvKuvWNz8btK3BUE6kGAgWWS/view \n NT: https://drive.google.com/file/d/1phGObmzyzvKuvWNz8btK3BUE6kGAgWWS/view');
      // break;
      exams(msg)
      break;
    case '!exams':
      // msg.reply('Schedule: \n https://drive.google.com/file/d/11ainApP0rLnYa-EHamhPvEC_15zOU97k/view \n Topics Tested \n Express: https://drive.google.com/file/d/1sBrsWBuTmtND7vJz_Ewiqdjf0EptR9NJ/view \n NA: https://drive.google.com/file/d/1phGObmzyzvKuvWNz8btK3BUE6kGAgWWS/view \n NT: https://drive.google.com/file/d/1phGObmzyzvKuvWNz8btK3BUE6kGAgWWS/view');
      // break;
      exams(msg)
      break;
    case '!suggest':
      msg.reply('Suggest features here: https://forms.gle/o8UcJoD8zATkg9DE9')
      break;
    case '!help':
      msg.reply(`List of avalible commands:\n!exam - gives links to exam schedule and what is tested.\n !timetable - Sends the timetable to the channel.\n !suggest - Sends a link to a google form to suggest features.\n!say - Makes the bot say whatever you want it to say. (only usable by mods)\n!hw - Sends and hw during the holidays.\n !periodic-table - Sends a message with the periodic table.\n!ping - Sends a message to the channel showing the bot and discord latency.\n!help - This command\n\n
`)
      break;
    case '!timetable':
      msg.channel.send('https://i.ibb.co/Zh8MY26/ED679-DCE-3-EEE-42-CE-8-D22-653-C5-D61-F268.jpg')
      break;
    case '!ping':
      msg.channel.send(`Pong! Bot latency: ${Date.now() - msg.createdTimestamp}ms. Discord API Latency: ${Math.round(client.ws.ping)}ms`);
      break;
    case '!hw':
      msg.channel.send('https://slenplayz.github.io/sl/sch/septholidayhw.pdf')
      break;
    case '!periodic-table':
      msg.channel.send(`https://slenplayz.github.io/sl/sch/periodic-table.jpg`)
      msg.channel.send('Please click on the photo and click open original')
      break;
    // default:
    //   console.log(`Message by (id:${msg.author.id} Username: ${msg.author.username}#${msg.author.discriminator}): ${msg.content}`)
    //   break;
  }
  if (msg.content.substring(0, 4) === '!say') {
    if (msg.member.roles.cache.find(role => role.name == "1FujiBotManager")) {
      if (msg.content.substring(5) != '') {
        msg.delete()
        msg.channel.send(msg.content.substring(5));
      }
      else {
        msg.reply('Enter a message for me to repeat')
      }
    }
    else {
      msg.reply('You dont have permission to use that command')
    }
  }
  if (msg.content.substring(0, 5) === '!eval') {
    if (msg.author.id = "517191312328491039") {
      try {
        console.log(msg.content.substring(6))
        eval(msg.content.substring(6));
        msg.channel.send('Done!')
      } catch (err) {
        msg.channel.send('Error!')
      }
    }
    else {
      msg.reply('You dont have permission to use that command')
    }
  }
});


const exams = (msg) => {
  //msg.channel.send('Schedule: https://i.ibb.co/M63knc3/173-C3005-1614-4-F11-810-B-8-BDCB52549-C2.jpg \n Topics tested: https://drive.google.com/drive/mobile/folders/1-y1aD838CHI-f3bELj04k4u5V3liSL_t?usp=sharing')
  msg.channel.send('https://i.ibb.co/M63knc3/173-C3005-1614-4-F11-810-B-8-BDCB52549-C2.jpg')
  msg.channel.send('Topics tested: https://slenplayz.github.io/sl/sch/1f2021fte')
}

client.login(process.env.DISCORD_TOKEN);
