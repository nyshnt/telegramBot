const TeleBot = require('telebot')
const fun = require('./modules.js')
const bot = new TeleBot('513763614:AAHbMm_RvWI8O6JJdMTRe-Wl9iJBBk35Nsk')

 bot.on('text', (msg) => {
    // if (msg.text == 'hello'){
    //     return bot.deleteMessage(msg.chat.id, msg.message_id)
    // }
    // else{
    var config = require('./messages.json')
    var echo= msg.text.toLowerCase()
    //console.log(echo)
    var answer = fun.search(echo, config);
    // console.log("Question:", echo)
    // console.log("Answer:", answer)
     return bot.sendMessage(msg.chat.id, `${answer}`)
    //}
 })

bot.start()