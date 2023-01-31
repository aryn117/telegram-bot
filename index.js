const TelegramBot = require("node-telegram-bot-api");
const fs = require("fs");

const token = "5927350968:AAHpJtavt0-g_mDl7s1k-vYUkqLYU4icFTQ";

const bot = new TelegramBot(token, { polling: true });
const TRACKS_UPPER_LIMIT = 7;

const replies = [
  "I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.",
  "I love you, and that’s the beginning and end of everything.",
  "We loved with a love that was more than love.",
  "I’m happiest when I’m right next to you.",
  "The water shines only by the sun. And it is you who are my sun.",
  "My night has become a sunny dawn because of you.",
  "I swear I couldn’t love you more than I do right now, and yet I know I will tomorrow.",
  "The best thing to hold onto in life is each other.",
  "You may hold my hand for a while but you hold my hand forever",
  "I need you like a heart needs a beat",
  "I will love you until the stars go out, and the tides no longer turn",
  "I love you because the entire universe conspired to help me find you.",
  "You are my best friend as well as my lover, and I do not know which side of you I enjoy the most. I treasure each side, just as I  treasure our life together",
  "All that you are, is all that I’ll ever need",
  "In your light, I learn how to love. In your beauty, how to make poems. You dance inside my chest where no-one sees you, but sometimes I do, and that sight becomes this art.",
  "In your light, I learn how to love. In your beauty, how to make poems. You dance inside my chest where no-one sees you, but sometimes I do, and that sight becomes this art.",
  "You don’t love someone for their looks, or their clothes, or for their fancy car, but because they sing a song only you can hear",
  "You have bewitched, me body and soul, and I love, I love, I love you",
  "You are my heart, my life, my one and only thought.",
  "So it’s not gonna be easy. It’s gonna be really hard. We’re gonna have to work at this every day, but I want to do that because I want you. I want all of you, forever, you and me, every day.",
  "I’m here. I love you. I don’t care if you need to stay up crying all night long, I will stay with you. There’s nothing you can ever do to lose my love. I will protect you until you die, and after your death, I will still protect you. I am stronger than depression and I am braver than loneliness and nothing will ever exhaust me.",
  "I’m not going far. I’ll always be here. Just an inch away. I promise.",
  "In vain I have struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you.",
  "All the time in the world is worth nothing if I don’t get to spend it with you. I Love You.",
  "When I tell you I love you, I don’t say it out of habit. I say it to remind you that you are the best thing that has ever happened to me.",
];

console.log("#################################################");

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "Welcome Pathuman! I have made this bot so you can, whenever you want, you can ask me \n 1. do u nob me? \n 2. Sing me a song",
    {
      reply_markup: {
        keyboard: [["do u nob me?"], ["sing me a song"]],
      },
    }
  );
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  if (msg.text.toLowerCase() === "/start") {
    return;
  } else if (
    msg.text.toLowerCase() === "do u nob me?" ||
    msg.text.toLowerCase() === "do you nob me?"
  ) {
    bot.sendMessage(
      chatId,
      replies[randomNumberGenerator(0, replies.length - 1)].toString()
    );
  } else if (msg.text.toLowerCase() === "sing me a song") {
    try {
      bot.sendMessage(chatId, "😳😳 okay, i'll try");
      const stream = fs.createReadStream(
        `./assets/track_${randomNumberGenerator(1, TRACKS_UPPER_LIMIT)}.mp3`
      );
      bot.sendAudio(chatId, stream);
    } catch (error) {
      console.error(error);
    }
  } else {
    bot.sendMessage(chatId, "Not The Magic Words, Pathuman!!!");
  }
});

function randomNumberGenerator(min = 0, max = 999) {
  return Math.floor(Math.random() * (max - min) + min);
}
