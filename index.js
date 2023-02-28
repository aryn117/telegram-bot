const data = require('./data');

const TelegramBot = require("node-telegram-bot-api");
const fs = require("fs");

const token = "5927350968:AAHpJtavt0-g_mDl7s1k-vYUkqLYU4icFTQ";

const bot = new TelegramBot(token, { polling: true });
const TRACKS_UPPER_LIMIT = 7;

console.log("Server Started....");

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "Welcome Pathuman! I have made this bot so you can, whenever you want, you can ask me \n 1. do u nob me? \n 2. Sing me a song",
    {
      reply_markup: {
        keyboard: [["❤️do u nob me?❤️"], ["sing me a song"],["send me something cute"]],
      },
    }
  );
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  if (msg.text.toLowerCase() === "/start") {
    return;
  }
  //* send texts ///////////////////////////////////////////////////////////
  else if (
    msg.text.toLowerCase() === "❤️do u nob me?❤️" ||
    msg.text.toLowerCase() === "❤️do you nob me?❤️"
  ) {
    bot.sendMessage(
      chatId,
      data.quotesReplyList[randomNumberGenerator(0, data.quotesReplyList.length - 1)].toString()
    );
  } 
  //* send a song ///////////////////////////////////////////////////////////
  else if (msg.text.toLowerCase() === "sing me a song" || msg.text.toLowerCase().indexOf("song") !== -1) {
    try {
      bot.sendMessage(chatId, "😳😳 Okay, i'll try");
      const stream = fs.createReadStream(
        `./assets/track_${randomNumberGenerator(1, TRACKS_UPPER_LIMIT)}.mp3`
      );
      bot.sendAudio(chatId, stream);
    } catch (error) {
      console.error(error);
    }

    //* send gifs ///////////////////////////////////////////////////////////
  } else if(msg.text.toLowerCase() === "send me something cute" || msg.text.toLowerCase().indexOf("cute") !== -1) {

    try {
  
      const selectedGIF = data.GIFLinksList[randomNumberGenerator(0, data.GIFLinksList.length - 1)];
      bot.sendAnimation(chatId, `${selectedGIF}.gif`);
    } catch (error) {
      console.error(error);
    }

    //* exception catch ////////////////////////////////////////////////////
  }
  else  {
    bot.sendMessage(chatId, "Not The Magic Words, Pathuman!!!");
  }
});


//*  ////////////////////////////////////////////////////////////////////
//* Helper Functions ////////////////////////////////////////////////////

function randomNumberGenerator(min = 0, max = 999) {
  return Math.floor(Math.random() * (max - min) + min);
}

//*  ////////////////////////////////////////////////////////////////////
//*  ////////////////////////////////////////////////////////////////////
