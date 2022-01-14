const {Client, Intents} = require('discord.js');
const dotenv = require('dotenv')

dotenv.config();

const client = new Client(
    {
        intents:[
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
        ]
    }
);

client.on('บอทพร้อมยังครับ', ()=>{
    console.log('น้อนบอทคอปตี้พร้อมทำงานเเล้วครัฟที่ร๊ากกก')
})

client.on('messageCreate', msg=>{
    if (msg.content == 'บอททำไรอยู่'){
        msg.reply('ทำไรเรื่องของกูไอคนขโมยปีโป้')
    }
})

client.login(process.env.TOKEN)