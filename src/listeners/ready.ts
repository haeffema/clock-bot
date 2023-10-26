import { Client } from "discord.js";

export default (client: Client): void => {
  client.on("ready", async () => {
    if (!client.user || !client.application) {
      return;
    }
    (
      await client.guilds.cache.get("828921871583936553")?.members.fetchMe()
    )?.setNickname("waiting...");
  });
};
