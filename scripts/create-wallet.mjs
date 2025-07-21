import fs from "node:fs";
import Arweave from "arweave";
const wallet = await new Arweave({}).wallets.generate();
fs.writeFileSync("key.json", JSON.stringify(wallet));