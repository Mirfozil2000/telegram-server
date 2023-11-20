const express = require('express');
const TelegramApi = require('node-telegram-bot-api');

const token = '6777217684:AAGIdB69DEULkrzcmJUKunAsD8axDSEXHrE';

const bot = new TelegramApi(token, {polling: true});
const app = express();
app.use(express.json());

bot.setMyCommands([
    {command: '/start', description: 'Telegram shop'},
    {command: '/sneakers', description: 'Все кроссовки'}
]);

bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if(text == '/start') {
        bot.sendMessage(chatId,'Здравствуйте здесь вы можете купить себе оригинальные кроссовки', {
            reply_markup: {
                keyboard: [
                    [
                        {
                            text: 'Смотреть кроссовки',
                            web_app: {
                                url: 'https://telegram-client-kohl.vercel.app'
                            }
                        }
                    ]
                ]
            }
        })
    }
    if(text == '/sneakers') {
        bot.sendMessage(chatId, 'Выберите кроссовки')
    }
})
