import dotenv from "dotenv";
import { HookdeckClient, Hookdeck } from "@hookdeck/sdk";

dotenv.config();

const hookdeck = new HookdeckClient({
  token: process.env.HOOKDECK_API_KEY as string,
});

async function run() {
  const sources = await hookdeck.source.list();
  console.log(sources);
}

run();
