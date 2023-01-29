const crypto=require("crypto");
const token=crypto.randomBytes(20).toString("hex");

console.log(token);

const tokenCrypto=crypto.createHash("sha256").update(token).digest("hex");
console.log(tokenCrypto);