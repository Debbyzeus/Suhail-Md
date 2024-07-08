const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="debbyzeus@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaI7qckAYlUOKwy8SE1Z";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaI7qckAYlUOKwy8SE1Z" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2348057417867" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348057417867";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_25_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MixcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwLFxuICAgICAgICA4NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDUzLFxuICAgICAgICA1MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyLFxuICAgICAgICA4MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDc3LFxuICAgICAgICA0OSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDYyLFxuICAgICAgICAxODgsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDkyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgOSxcbiAgICAgICAgMixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMixcbiAgICAgICAgMjAwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI4LFxuICAgICAgICA5MixcbiAgICAgICAgMTI0LFxuICAgICAgICA1MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxODIsXG4gICAgICAgIDExMixcbiAgICAgICAgMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDk4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrL1UyNHYvbXZRU0xETE5HemszZnh3R0YvSWtYcFpQamFnQm5hSjF6QzV3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJqdmNCWTZkMFRFeVdYa3VkMG1QdXdBXCIsXG4gIFwicGhvbmVJZFwiOiBcImRkOGMwZmI0LTg2NjctNDNlMC1iMmI5LWRiZDljODM5Mzc0MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjgsXG4gICAgICA2NixcbiAgICAgIDIwNCxcbiAgICAgIDQzLFxuICAgICAgODMsXG4gICAgICAxODcsXG4gICAgICAxNjYsXG4gICAgICA0OCxcbiAgICAgIDIwLFxuICAgICAgMTA3LFxuICAgICAgNzUsXG4gICAgICAxMzUsXG4gICAgICAxMTYsXG4gICAgICAxMjMsXG4gICAgICAxMjUsXG4gICAgICAyNCxcbiAgICAgIDc1LFxuICAgICAgODksXG4gICAgICAxODQsXG4gICAgICAxNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzUsXG4gICAgICA0LFxuICAgICAgMTY3LFxuICAgICAgNDEsXG4gICAgICAyMTMsXG4gICAgICAxOTksXG4gICAgICAxMzgsXG4gICAgICAxMSxcbiAgICAgIDI0MyxcbiAgICAgIDEzOSxcbiAgICAgIDE3NixcbiAgICAgIDE1LFxuICAgICAgNixcbiAgICAgIDcwLFxuICAgICAgMzYsXG4gICAgICAxMjMsXG4gICAgICAxNjEsXG4gICAgICA5NCxcbiAgICAgIDYwLFxuICAgICAgMjE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjk1SkdINVRHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDU3NDE3ODY3OjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRGViYnlcIixcbiAgICBcImxpZFwiOiBcIjI1NDAyMTczMDM0NDk3Njo1MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQWDRoS29GRU52d3JiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZ6MlJuVENhSEJFRnQvc09VMnIvU1UvSTZ5amFoK2h2UktaZHBIS2pqUm89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYStCZ0poNE90U2dCM05lK1pOR2cvZmhEUFIzRkN2dzlLLzAvUk1Nd3NDdWdnVDROVWxtSzZOQXJKeE1LVnNOcUdjelZ1MHhFakZac3hOaUl5R3FxQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV1dCbStGTEkxWnNvSmpuRWxRVnFNdGFZWmIxK0NRVkVvd2RmZm5jdGFqMzdRTk1BNldLSmlORWhYWG5ZbXJRU0xmY1dJQnIxM0tpTS93b2lSTnlOQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA1NzQxNzg2Nzo1MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQxNjM1MFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Debby",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
