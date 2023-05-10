const { Client,LogLevel } = require("@notionhq/client");

console.log(process.env.NOTION_TOKEN)
// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  logLevel: LogLevel.DEBUG
});

module.exports = notion