import { Client } from "discord.js";
import { BOT_TOKEN } from "./config";
import ready from "./listeners/ready";

const millo_id = "828921871583936553";

console.log("Bot is starting...");

const client = new Client({
  intents: [7796],
});

ready(client);

client.login(BOT_TOKEN);

setTimeout(startUpdateActivity, 3000);

function startUpdateActivity() {
  setTimeout(
    updateActivity,
    1000 * 60 - (new Date().getMilliseconds() + new Date().getSeconds() * 1000)
  );
}

async function updateActivity() {
  (await client.guilds.cache.get(millo_id)?.members.fetchMe())?.setNickname(
    formatDate()
  );
  setInterval(async function () {
    (await client.guilds.cache.get(millo_id)?.members.fetchMe())?.setNickname(
      formatDate()
    );
  }, 1000 * 60);
}

function formatDate() {
  var offset = -7;
  const d = new Date(new Date().getTime() + offset * 3600 * 1000);
  return `${formatNumber(d.getHours())}:${formatNumber(
    d.getMinutes()
  )} Uhr bei Jan.`;
}

function formatNumber(number: number) {
  return number < 10 ? "0" + number.toString() : number.toString();
}
