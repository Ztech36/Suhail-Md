const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_10_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MixcbiAgICAgICAgMzIsXG4gICAgICAgIDkyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEsXG4gICAgICAgIDMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICAxODMsXG4gICAgICAgIDExMixcbiAgICAgICAgNjYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM3LFxuICAgICAgICA1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MixcbiAgICAgICAgMTUzLFxuICAgICAgICA5NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA3NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDU1LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDUwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDU3LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDUyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDcxLFxuICAgICAgICA2LFxuICAgICAgICA1NixcbiAgICAgICAgMTgsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDg2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA3NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDMxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTksXG4gICAgICAgIDc1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0LFxuICAgICAgICA2MixcbiAgICAgICAgMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAwLFxuICAgICAgICA4NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDU5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTMxLFxuICAgICAgICA3LFxuICAgICAgICAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzksXG4gICAgICAgIDc5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQyLFxuICAgICAgICA2MixcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMzLFxuICAgICAgICA4NixcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkgyMjBiUEVhZ0VWTE5lZkh5K2NURXNRNEdycENmN0k0YVJmaXhiTmFxcEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInR2NDJ0YnV5UlNDUW14cFRQXzNmLXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWU3NGZkOTUtNmEwZi00NDE2LTgyOGEtYjYwZTU3ZGVhODdhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDAsXG4gICAgICAxMixcbiAgICAgIDE4NSxcbiAgICAgIDI0NCxcbiAgICAgIDYsXG4gICAgICAxNjUsXG4gICAgICAyNDgsXG4gICAgICA0MSxcbiAgICAgIDI4LFxuICAgICAgNjcsXG4gICAgICA1NSxcbiAgICAgIDE4NyxcbiAgICAgIDM1LFxuICAgICAgODQsXG4gICAgICA4MSxcbiAgICAgIDk4LFxuICAgICAgMTg4LFxuICAgICAgMTU0LFxuICAgICAgMjMzLFxuICAgICAgMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MixcbiAgICAgIDExNixcbiAgICAgIDE1OCxcbiAgICAgIDU4LFxuICAgICAgMTcwLFxuICAgICAgMjE2LFxuICAgICAgMTkxLFxuICAgICAgMTkwLFxuICAgICAgNzYsXG4gICAgICAzMyxcbiAgICAgIDE1NCxcbiAgICAgIDE4NixcbiAgICAgIDE4NyxcbiAgICAgIDE0NixcbiAgICAgIDM0LFxuICAgICAgMjMsXG4gICAgICAyMzYsXG4gICAgICAyMzksXG4gICAgICAyMzUsXG4gICAgICAxODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS1hOV1FaWkVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxMjk4OTUzMToxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM3MTA0MDI5OTA5MjQxOjE5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01yaS9jc0VFS0tVd2JRR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTHNxdWZacE5KQUFsMHBHYzM0ckZjZFVyNmpENFJ1dVJDRTF3dkhpSDNTTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4TlZycEdVQ05GYzdkK2JNT3o2WFdqTW8wWXcrRm9KNFlmdktlN1h4VFlRbkZvS3J4eHlRR3U3NUVBb1dIdGRIOHk4Vy9zR3lQVDBGUVdiSjZvYXBBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsQTJBZUs5c1F1N0lNQnhHSHc3T0ZIWkV4WWtmTm5PaXlLUjdwbHpSSE83QmlUa0o5ays1Wk9lNklVTjJDNjZienpNcGhjenBtSCtpcUR2SHhVUkNBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTI5ODk1MzE6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzMyMTk3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSVpLXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJWksuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwTlZmNXhsOVl6RmFGck5FUjhLcFBkUk1LdXB2dzRHdThCTzVsTU9MeXVjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMzMwODg4NDIsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNF19LFwidGltZXN0YW1wXCI6XCIxNzIwNDU1NzU4Nzg0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
