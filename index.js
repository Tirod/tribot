const Discord = require('discord.js')
const bot = new Discord.Client()



bot.on('message', function (message) {
if (message.content === '!chaine T') {
message.reply('TiRoD:https://www.youtube.com/channel/UCoHJK4-WCp4zKWovFE8hhSw?view_as=subscriber ')
}
})


bot.on('message', function (message) {
if (message.content === '!chaine F') {
message.reply('Frizoux2.0: https://www.youtube.com/channel/UCnSYBQsAKlt7XXnR0f8JSmw ')
}
})


bot.on('message', function (message) {
if (message.content === '!help') {
message.reply('Alors les commande: !chaine F :chaine de Frizoux2.0, !chaine T: chaine de TiRoD ')
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

bot.login('process.env.TOKEN')
