const TelegramBot = require("node-telegram-bot-api");
const fs = require("fs");

const token = "5927350968:AAHpJtavt0-g_mDl7s1k-vYUkqLYU4icFTQ";

const bot = new TelegramBot(token, { polling: true });
const TRACKS_UPPER_LIMIT = 7;
const GIFS_UPPER_LIMIT = 364;

const gifs = 
  [
    "https://imgur.com/VXpFwzW",
    "https://imgur.com/cUgxlfR",
    "https://imgur.com/VU2vTag",
    "https://imgur.com/TctVNWq",
    "https://imgur.com/cd6cDqo",
    "https://imgur.com/p0PHEW0",
    "https://imgur.com/Bh8RrX8",
    "https://imgur.com/NFvbYj2",
    "https://imgur.com/AUntdiY",
    "https://imgur.com/1umBOpn",
    "https://imgur.com/UWMGp7x",
    "https://imgur.com/hoUPFyY",
    "https://imgur.com/5QAlfJs",
    "https://imgur.com/g8uE0pP",
    "https://imgur.com/ThREz49",
    "https://imgur.com/4FSCh0G",
    "https://imgur.com/WcvU2FZ",
    "https://imgur.com/4dvdYTm",
    "https://imgur.com/kqkzlU1",
    "https://imgur.com/stz7jwe",
    "https://imgur.com/gzU2IaA",
    "https://imgur.com/5RyTDaR",
    "https://imgur.com/ABIr3eR",
    "https://imgur.com/JQgnnvL",
    "https://imgur.com/D9SdcUG",
    "https://imgur.com/tmaa2ue",
    "https://imgur.com/XEnCFnp",
    "https://imgur.com/1mtHT8Q",
    "https://imgur.com/ISOz7fj",
    "https://imgur.com/aZdmaJA",
    "https://imgur.com/bUi7rde",
    "https://imgur.com/VxPtK2Z",
    "https://imgur.com/baSFl2J",
    "https://imgur.com/2aFdMs2",
    "https://imgur.com/PN4IjZr",
    "https://imgur.com/Xhk93B9",
    "https://imgur.com/0j2c9Gf",
    "https://imgur.com/KKe6vRi",
    "https://imgur.com/5IaeB3b",
    "https://imgur.com/or198rn",
    "https://imgur.com/GaHn9rt",
    "https://imgur.com/U7nyEnI",
    "https://imgur.com/DZlhOFu",
    "https://imgur.com/nZ79KYo",
    "https://imgur.com/tfJimKo",
    "https://imgur.com/xtp9bVh",
    "https://imgur.com/BP8d1oV",
    "https://imgur.com/5mkxJ3c",
    "https://imgur.com/0x2JmVu",
    "https://imgur.com/ZEcJQQ7",
    "https://imgur.com/LpyOVMG",
    "https://imgur.com/vagIgsZ",
    "https://imgur.com/INDTzqa",
    "https://imgur.com/adPWJc0",
    "https://imgur.com/laFm2Gi",
    "https://imgur.com/pQz8YlB",
    "https://imgur.com/jxLbozF",
    "https://imgur.com/gtxFaiz",
    "https://imgur.com/zFkpnEF",
    "https://imgur.com/WMGYZ1v",
  "https://imgur.com/zn8vuXX",
  "https://imgur.com/yVHHAm6",
  "https://imgur.com/ZLIXzdK",
  "https://imgur.com/G7OiUv6",
  "https://imgur.com/JsnvPKK",
  "https://imgur.com/5YoyYVF",
  "https://imgur.com/PXSHdly",
  "https://imgur.com/pGMic4O",
  "https://imgur.com/HXcHvNC",
  "https://imgur.com/msXjnWR",
  "https://imgur.com/uTFNI7g",
  "https://imgur.com/9sCf3Il",
  "https://imgur.com/BZVFcje",
  "https://imgur.com/hD9e13J",
  "https://imgur.com/cCRzDP0",
  "https://imgur.com/O0AouFD",
  "https://imgur.com/51HjTDR",
  "https://imgur.com/pnLu13k",
  "https://imgur.com/eUmpQjm",
  "https://imgur.com/JGMZmgg",
  "https://imgur.com/KHDqnQr",
  "https://imgur.com/1S4dyAG",
  "https://imgur.com/rGCrJsG",
  "https://imgur.com/wgjWFU3",
  "https://imgur.com/NF0SWoP",
  "https://imgur.com/sTxxzaC",
  "https://imgur.com/bizrZw7",
  "https://imgur.com/CzBEPaw",
  "https://imgur.com/oIPrvwJ",
  "https://imgur.com/fAyyhD7",
  "https://imgur.com/SIiMExg",
  "https://imgur.com/nidyz4H",
  "https://imgur.com/2UTAsLE",
  "https://imgur.com/t4UgUuw",
  "https://imgur.com/BHNFVGa",
  "https://imgur.com/FyrBn3S",
  "https://imgur.com/fJmDRBB",
  "https://imgur.com/qqRNqk4",
  "https://imgur.com/s1HUh5d",
  "https://imgur.com/3gelgss",
  "https://imgur.com/PRDol76",
  "https://imgur.com/j26wEtr",
  "https://imgur.com/9v5qyNB",
  "https://imgur.com/HS70dgq",
  "https://imgur.com/oQ0Y2wC",
  "https://imgur.com/CcAKWyA",
  "https://imgur.com/0ZGHQGz",
  "https://imgur.com/QdQRgYe",
  "https://imgur.com/iqrD5Ff",
  "https://imgur.com/1HG1F9w",
  "https://imgur.com/oUqX2ZU",
  "https://imgur.com/LnwlbQm",
  "https://imgur.com/oB1xznG",
  "https://imgur.com/yGhixMU",
  "https://imgur.com/gT0yHgt",
  "https://imgur.com/QkL65MF",
  "https://imgur.com/ZF1Cpfy",
  "https://imgur.com/g1ivLwR",
  "https://imgur.com/LCqPRF8",
  "https://imgur.com/MU9BPKH",
  "https://imgur.com/KES5ygX",
  "https://imgur.com/wPtsAzK",
  "https://imgur.com/HtHJCNM",
  "https://imgur.com/zDgdC19",
  "https://imgur.com/BGyEXjm",
  "https://imgur.com/oMQNKuZ",
  "https://imgur.com/S6d5zIW",
  "https://imgur.com/QORaElw",
  "https://imgur.com/WEo5Zbo",
  "https://imgur.com/bdvQLSV",
  "https://imgur.com/rklxfOs",
  "https://imgur.com/0BCKxFI",
  "https://imgur.com/er1oEgI",
  "https://imgur.com/sQ5vPhX",
  "https://imgur.com/wI1jXwD",
  "https://imgur.com/YvPN7DE",
  "https://imgur.com/bwMTuNn",
  "https://imgur.com/Pt8m7kv",
  "https://imgur.com/2HqDHgR",
  "https://imgur.com/aix5Jau",
  "https://imgur.com/3ZH1wyT",
  "https://imgur.com/JSw4nss",
  "https://imgur.com/KLPHSUp",
  "https://imgur.com/d43pcHG",
  "https://imgur.com/KJrpGpd",
  "https://imgur.com/PuLpANj",
  "https://imgur.com/99n0ewK",
  "https://imgur.com/DSCkmhH",
  "https://imgur.com/0l1Yq2E",
  "https://imgur.com/siCtNyV",
  "https://imgur.com/7ithCih",
  "https://imgur.com/edSVGak",
  "https://imgur.com/mQXgzUT",
  "https://imgur.com/oeoQkVg",
  "https://imgur.com/GQlmYzT",
  "https://imgur.com/PbVyv8d",
  "https://imgur.com/vusGN63",
  "https://imgur.com/Oyas0d3",
  "https://imgur.com/mLRq3AI",
  "https://imgur.com/OookgyY",
  "https://imgur.com/i4uggO0",
  "https://imgur.com/UQmi0vE",
  "https://imgur.com/p9Qjtht",
  "https://imgur.com/X8fUFvq",
  "https://imgur.com/ofcRCyh",
  "https://imgur.com/NiLOjBv",
  "https://imgur.com/KJpP5Pb",
  "https://imgur.com/ohGMFON",
  "https://imgur.com/aJYFFgu",
  "https://imgur.com/8XGiS3a",
  "https://imgur.com/YMDXXiw",
  "https://imgur.com/uNZg6af",
  "https://imgur.com/i0FDLyg",
  "https://imgur.com/d2RIpMO",
  "https://imgur.com/YLIJvL3",
  "https://imgur.com/5cJUXwW",
  "https://imgur.com/5hjHxXH",
  "https://imgur.com/BqnmbUz",
  "https://imgur.com/XNCnOrc",
  "https://imgur.com/4IdSM0f",
    "https://imgur.com/1k7ipXn",
    "https://imgur.com/2nozvMx",
    "https://imgur.com/PtRJR8q",
    "https://imgur.com/XL8zvBm",
    "https://imgur.com/SubA16A",
    "https://imgur.com/CLuv1vh",
    "https://imgur.com/1lQqRs9",
    "https://imgur.com/FkwlVYl",
    "https://imgur.com/2bW52lJ",
    "https://imgur.com/atctDV7",
    "https://imgur.com/qPjevA0",
    "https://imgur.com/dBNioI5",
    "https://imgur.com/nW9uF1f",
    "https://imgur.com/HOPAzE2",
    "https://imgur.com/gPOl9Hw",
    "https://imgur.com/LXmW36Z",
    "https://imgur.com/trJGShz",
    "https://imgur.com/6I6WH4W",
    "https://imgur.com/EkzQj7j",
    "https://imgur.com/gBvEgrg",
    "https://imgur.com/UUACK9g",
    "https://imgur.com/YRDKXSH",
    "https://imgur.com/mlXDPL3",
    "https://imgur.com/JgKvmHR",
    "https://imgur.com/JeGTv2q",
    "https://imgur.com/e1LTiqZ",
    "https://imgur.com/Oy6upNA",
    "https://imgur.com/ym4xdsn",
    "https://imgur.com/Z3oNJ2i",
    "https://imgur.com/KtolNfq",
    "https://imgur.com/bHXrmUt",
    "https://imgur.com/4XuTggI",
    "https://imgur.com/HC1V4KQ",
    "https://imgur.com/kgScT4y",
    "https://imgur.com/Zb98AgY",
    "https://imgur.com/OG5D7U2",
    "https://imgur.com/mRqo3YE",
    "https://imgur.com/lFzBGFi",
    "https://imgur.com/P3vJK1J",
    "https://imgur.com/8k1gfRL",
    "https://imgur.com/KuqLkif",
    "https://imgur.com/eeBgW7F",
    "https://imgur.com/Revc3Io",
    "https://imgur.com/TrlsbMP",
    "https://imgur.com/hca0140",
    "https://imgur.com/CtZcw4e",
    "https://imgur.com/JlMeKAq",
    "https://imgur.com/rWVXEXV",
    "https://imgur.com/u2Yoq69",
    "https://imgur.com/dkFj8Vw",
    "https://imgur.com/PEbICcS",
    "https://imgur.com/ZA4Rhij",
    "https://imgur.com/7pYy5zR",
    "https://imgur.com/hVz5CZ9",
    "https://imgur.com/m5MhAL1",
    "https://imgur.com/Ch3ykip",
    "https://imgur.com/b6JmF1y",
    "https://imgur.com/OyaJ2so",
    "https://imgur.com/gOhGihE",
    "https://imgur.com/KMPS9KC",

  "https://imgur.com/4UwdYJa",
  "https://imgur.com/vjDpow3",
  "https://imgur.com/xmNSPLD",
  "https://imgur.com/6GYd9EG",
  "https://imgur.com/yZpGWHX",
  "https://imgur.com/ssB2nBk",
  "https://imgur.com/WSGb6Hg",
  "https://imgur.com/2eSVtzR",
  "https://imgur.com/TPhqXae",
  "https://imgur.com/6cs9yqe",
  "https://imgur.com/bCO22RM",
  "https://imgur.com/udkHZmq",
  "https://imgur.com/5nhK72t",
  "https://imgur.com/H3LfueA",
  "https://imgur.com/MmVfDD6",
  "https://imgur.com/5Kt2zJ0",
  "https://imgur.com/VGFD3Hc",
  "https://imgur.com/vPCycJR",
  "https://imgur.com/wQN9Wdi",
  "https://imgur.com/m91yTZ2",
  "https://imgur.com/ZxIJ3Vf",
  "https://imgur.com/ZR6ESO1",
  "https://imgur.com/LN8wNEs",
  "https://imgur.com/jc1Fntv",
  "https://imgur.com/SYuNLEv",
  "https://imgur.com/d1bbxhY",
  "https://imgur.com/PEKnFHm",
  "https://imgur.com/ZpMz5xd",
  "https://imgur.com/CRcMvm3",
  "https://imgur.com/LZnLeqa",
  "https://imgur.com/RB16gID",
  "https://imgur.com/2EphcUK",
  "https://imgur.com/sjsew2X",
  "https://imgur.com/WWfv4Jb",
  "https://imgur.com/6KSLKaY",
  "https://imgur.com/w2zihiy",
  "https://imgur.com/jRAlkWB",
  "https://imgur.com/DNJsbLp",
  "https://imgur.com/ykY4qxG",
  "https://imgur.com/JfnHYHN",
  "https://imgur.com/7R0rWW0",
  "https://imgur.com/aNDSpQN",
  "https://imgur.com/FC5FNOI",
  "https://imgur.com/k7ZJAhX",
  "https://imgur.com/0LDzxTz",
  "https://imgur.com/glCl87H",
  "https://imgur.com/vD3CgLl",
  "https://imgur.com/IfIP08U",
  "https://imgur.com/4uF53lF",
  "https://imgur.com/bIwLID3",
  "https://imgur.com/96Sw39u",
  "https://imgur.com/AU2zE54",
  "https://imgur.com/sxkCY7h",
  "https://imgur.com/R6CbXqr",
  "https://imgur.com/oQulv0n",
  "https://imgur.com/C7SKZUc",
  "https://imgur.com/NwiQViZ",
  "https://imgur.com/CAvhH8u",
  "https://imgur.com/bdT3xRx",
  "https://imgur.com/PFvpVWS",
  "https://imgur.com/rbk99Dn",
  "https://imgur.com/CEr7X2V",
  "https://imgur.com/A0W0bGD",
  "https://imgur.com/ancPh8m",
  "https://imgur.com/q1KZEbG",
  "https://imgur.com/QIWNjY9",
  "https://imgur.com/YZiXDxx",
  "https://imgur.com/xviAcab",
  "https://imgur.com/8oEHjgZ",
  "https://imgur.com/Ost7vLl",
  "https://imgur.com/cViqZF6",
  "https://imgur.com/cd7AqVz",
  "https://imgur.com/Kbf0eAj",
  "https://imgur.com/V91lV7Y",
  "https://imgur.com/JtLn0AL",
  "https://imgur.com/w5KnRot",
  "https://imgur.com/MwajKVy",
  "https://imgur.com/1GmWKLq",
  "https://imgur.com/spY5rx1",
  "https://imgur.com/7r4CuFi",
  "https://imgur.com/8ReRubz",
  "https://imgur.com/ftk6Yvk",
  "https://imgur.com/ruCUvX4",
  "https://imgur.com/gV8Uige",
  "https://imgur.com/2KoSwU1",
  "https://imgur.com/MGEudCv",
  "https://imgur.com/tUHymSx",
  "https://imgur.com/MVN6Kaw",
  "https://imgur.com/L41yOfi",
  "https://imgur.com/zBuI6pR",
  "https://imgur.com/lRyXEft",
  "https://imgur.com/g0KE86m",
  "https://imgur.com/Oa4kkDx",
  "https://imgur.com/ngO5pal",
  "https://imgur.com/kfwwods",
  "https://imgur.com/apEcsuy",
  "https://imgur.com/Bs3Ta9x",
  "https://imgur.com/fwsQsX0",
  "https://imgur.com/WdLuLrB",
  "https://imgur.com/dyW3NNs",
  "https://imgur.com/Frdk0aZ",
  "https://imgur.com/tm0eo5q",
  "https://imgur.com/1Wci1Z1",
  "https://imgur.com/sLIr6z7",
  "https://imgur.com/k29OO9a",
  "https://imgur.com/xjhmGhJ",
  "https://imgur.com/o1oeDBg",
  "https://imgur.com/Lheqv4q",
  "https://imgur.com/BNVDbvV",
  "https://imgur.com/8tv9VV3",
  "https://imgur.com/i4AOI5j",
  "https://imgur.com/eb1RwZE",
  "https://imgur.com/Ke3RQMw",
  "https://imgur.com/zPhOppz",
  "https://imgur.com/19DMSif",
  "https://imgur.com/OxAgWdb",
  "https://imgur.com/3aq8oxq",
  "https://imgur.com/AlI8vAD",
  "https://imgur.com/gBZHEDv",
  "https://imgur.com/lOcXqzz"
]

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
        keyboard: [["do u nob me?"], ["sing me a song"],["send me something cute"]],
      },
    }
  );
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  if (msg.text.toLowerCase() === "/start") {
    return;
  }
  // send texts ///////////////////////////////////////////////////////////
  else if (
    msg.text.toLowerCase() === "do u nob me?" ||
    msg.text.toLowerCase() === "do you nob me?"
  ) {
    bot.sendMessage(
      chatId,
      replies[randomNumberGenerator(0, replies.length - 1)].toString()
    );
  } 
  // send a song ///////////////////////////////////////////////////////////
  else if (msg.text.toLowerCase() === "sing me a song") {
    try {
      bot.sendMessage(chatId, "😳😳 okay, i'll try");
      const stream = fs.createReadStream(
        `./assets/track_${randomNumberGenerator(1, TRACKS_UPPER_LIMIT)}.mp3`
      );
      bot.sendAudio(chatId, stream);
    } catch (error) {
      console.error(error);
    }

    // send gifs ///////////////////////////////////////////////////////////
  } else if(msg.text.toLowerCase() === "send me something cute") {

    try {
  
      const selectedGIF = gifs[randomNumberGenerator(0, gifs.length - 1)];
      bot.sendPhoto(chatId, `${selectedGIF}.gif`);
    } catch (error) {
      console.error(error);
    }

    // exception catch ////////////////////////////////////////////////////
  }
   else  {
    bot.sendMessage(chatId, "Not The Magic Words, Pathuman!!!");
  }
});

function randomNumberGenerator(min = 0, max = 999) {
  return Math.floor(Math.random() * (max - min) + min);
}

//