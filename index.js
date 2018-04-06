const Discord = require('discord.js')
const bot = new Discord.Client() 


bot.on('message', function (message) {
  if (message.content === '!chaine T') {
   message.reply('TiRoD:https://www.youtube.com/channel/UCoHJK4-WCp4zKWovFE8hhSw?view_as=subscriber ')
  }
})


bot.on('message', function (message) {
  if (message.content === '!help') {
   message.reply('Alors les commande:!chaine T: chaine de TiRoD ')
  }
})


bot.on('message', function (message) {
  if (message.content === '!régle') {
   message.reply('#1:Ne pas insulte, #2:Ne pas spawm, #3:Ne pas mal parler')
  }
})


bot.on('message', function (message) {
  if (message.content === '!Form') {
   message.reply('INDISPONIBLE')
  }
})


bot.on('message', function (message) {
  if (message.content === '!Info TB') {
   message.reply('Le Tribots(TB) est en constrution. Le bots pourra faire sortir vos musique préférè...')
  }
})


bot.login('NDI4MjQ0NTM5ODQ1NzcxMjY0.DaZPYg.SGPPTF4pbfCM9Evd27ORcgFiibw')
