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


global.SESSION_ID = process.env.SESSION_ID ||  "s"  /SUHAIL_09_31_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA1NixcbiAgICAgICAgOTUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMixcbiAgICAgICAgMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIwLFxuICAgICAgICA0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwLFxuICAgICAgICA0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNCxcbiAgICAgICAgODMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDMwLFxuICAgICAgICA4NixcbiAgICAgICAgODgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODQsXG4gICAgICAgIDQwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MyxcbiAgICAgICAgODMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUwLFxuICAgICAgICA5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDM0LFxuICAgICAgICA3MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDkzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODYsXG4gICAgICAgIDQ3LFxuICAgICAgICA4MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMwLFxuICAgICAgICAzNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDY5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgNDksXG4gICAgICAgIDk1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NCxcbiAgICAgICAgOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzQsXG4gICAgICAgIDcwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA5MixcbiAgICAgICAgODQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1LFxuICAgICAgICA4NixcbiAgICAgICAgMTg2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkk5K0ZWbTgzR3J4dm55VFBseEIyMTdYOUQyRW5CdDRwaWtTNVRPVXhlUHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzg5MDE1NjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFQ0U4RjQzOTE1RTI3MkQwNzYyRjAyQjA2QTkyMEJCOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIxNTkwNzZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3ODkwMTU2MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQxOUMzQzg3MkU2Q0EwRENGQkUwODQ1OTFBMkNCNjc1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjE1OTA3NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaYlZlMHhBV1FTNlZKekxuVDFWekZBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI0Nzk3OWIzLWNjMTgtNGMzMy04ZTY4LTI0MGY0NWE4YmJiZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNixcbiAgICAgIDY0LFxuICAgICAgMTk0LFxuICAgICAgMTk0LFxuICAgICAgMTYsXG4gICAgICAxMDUsXG4gICAgICAxNTAsXG4gICAgICAyMzgsXG4gICAgICAxMzksXG4gICAgICAyMzYsXG4gICAgICA3NCxcbiAgICAgIDU2LFxuICAgICAgNTgsXG4gICAgICA0MixcbiAgICAgIDEyMSxcbiAgICAgIDE4LFxuICAgICAgMzgsXG4gICAgICA1NSxcbiAgICAgIDEyMixcbiAgICAgIDE5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDksXG4gICAgICAyMzEsXG4gICAgICAxNzIsXG4gICAgICA3MCxcbiAgICAgIDEyLFxuICAgICAgMTA0LFxuICAgICAgMTI3LFxuICAgICAgMTA4LFxuICAgICAgMTk3LFxuICAgICAgMjQyLFxuICAgICAgMjA4LFxuICAgICAgMTA1LFxuICAgICAgMTQyLFxuICAgICAgOTAsXG4gICAgICA5NCxcbiAgICAgIDk5LFxuICAgICAgMzQsXG4gICAgICAyNDMsXG4gICAgICA3NSxcbiAgICAgIDEzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYRUZZV0VHMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzg5MDE1NjMyOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMTc2NzE4ODQ0MDMyOjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTfCfkpZIT0ZV8J+SnlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BENXJxQUNFTjJmbUxVR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaDQ1bFVnYmlMWjdCY0dFVGhad0IvVm9JTjBVRUxBanFoWmdyZTdRdnp5WT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNNHlwZEJ4ejA5aFBwR0taNUxyckdZSFlZS0dpcnJPZ3AzTVczdWkyclZtZ3lwN2pHeUZ2UHkwUmhZTWQrSnVlUUVjMmdCd3NmQVlTVHcxd3p2eW9EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiTTYrbXI5VTczUnBPRE01UWgwTGxDdnJXWC82aXdtS3hBRFg1VGdxUE9hSTdJNC9PSUZoWWJTMXo4NnBMa0NFbjU2NGw3alFIcThlMlViVk9LV3Bndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3ODkwMTU2MzI6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjE1OTA3MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdHSVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0dJLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSENsTm82dEVoRk8yN0xDS3hCUC9nSXA4cjc4dTVYbGRPcklNdzZIS2ExTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MDQ3NDkwNDAsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjE1ODk5NTgyMFwifSIKfQ==/ PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
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
