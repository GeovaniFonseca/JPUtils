e=false
en=true
ena=true
enb=true
enab=true
enable=true
enabled=false

register("Chat", (event) => {
  if(!enab) return;
  var formattedMessage = ChatLib.getChatMessage(event, true);
  if(formattedMessage.includes("&cOops! You are not on SkyBlock so we couldn't warp you!&r")){
          setTimeout(() => {
              ChatLib.command("l")
              ChatLib.command("pc Oops! You are not on SkyBlock so we couldn't warp you!")
          }, 100);

      }
  })

register("Chat", (event) => {
  if(!enab) return;
  var formattedMessage = ChatLib.getChatMessage(event, true);
  if(formattedMessage.includes("&cYou were kicked while joining that server!&r")){
          setTimeout(() => {
              ChatLib.command("l")
              ChatLib.command("pc You were kicked while joining that server!")
          }, 100);

      }
  })

register("Chat", (event) => {
  if(!enab) return;
  var formattedMessage = ChatLib.getChatMessage(event, true);
  if(formattedMessage.includes("&cOops! You are not on SkyBlock so we couldn't warp you!&r")){
          setTimeout(() => {
              ChatLib.command("skyblock")
          }, 3500);

      }
  })

register("Chat", (event) => {
  if(!enab) return;
  var formattedMessage = ChatLib.getChatMessage(event, true);
  if(formattedMessage.includes("&cYou were kicked while joining that server!&r")){
          setTimeout(() => {
              ChatLib.command("skyblock")
          }, 3500);

      }
  })

register("Chat", (event) => {
  if(!e) return;
  var formattedMessage = ChatLib.getChatMessage(event, true);
  if(formattedMessage.includes("&e[NPC] &cElle&f: &rOkay adventurers, I will go and fish up Kuudra!&r")){
          setTimeout(() => {
              ChatLib.command("pc TAP Reminder!")
          }, 300);

      }
  })

register("Chat", (event) => {
  if(!e) return;
  var formattedMessage = ChatLib.getChatMessage(event, true);
  if(formattedMessage.includes("&e[NPC] &cElle&f: &rPOW! SURELY THAT'S IT! I don't think he has any more in him!&r")){
          setTimeout(() => {
              ChatLib.command("pc Equipment Reminder!")
          }, 300);
  
      }
  })

register("Chat", (event) => {
  if(!enabled) return;
  var formattedMessage = ChatLib.getChatMessage(event, true);
  if(formattedMessage.includes("&r&6&lCLICK HERE &bto re-queue into &a&aThe Catacombs!&r")){
          setTimeout(() => {
              ChatLib.command("instancerequeue")
          }, 300);

      }
  })

register("Chat", (event) => {
  if(!enabled) return;
  var formattedMessage = ChatLib.getChatMessage(event, true);
  if(formattedMessage.includes("&r&6&lCLICK HERE &bto re-queue into &a&a&c&lMM&c Catacombs!&r")){
          setTimeout(() => {
              ChatLib.command("instancerequeue")
          }, 300);

      }
  })

register("Chat", (event) => {
  var formattedMessage = ChatLib.getChatMessage(event, true);
  if(formattedMessage.includes("&r&4[BOSS] &r&4&kWither King&r&c: &r&cYou.. again?&r")){
          setTimeout(() => {
              ChatLib.command("pc EDrag Reminder!")
			      	ChatLib.chat("&c&lRed &f> &6&lOrange &f> &b&lBlue &f> &5&lPurple &f> &a&lGreen")
          }, 300);
        
		  }
  })
	
register("Chat", (event) => {
	if(!en) return;
  var formattedMessage = ChatLib.getChatMessage(event, true);
  if(formattedMessage.includes("&r&aA &r&cVanquisher &r&ais spawning nearby!&r")){
          setTimeout(() => {
				      ChatLib.command("patcher sendcoords Vanquisher!")
          }, 300);

      }
  })
	
register("Chat", (event) => {
	if(!ena) return;
  var formattedMessage = ChatLib.getChatMessage(event, true);
  if(formattedMessage.includes("&r&c&lThe ground begins to shake as an Endstone Protector rises from below!&r")){
          setTimeout(() => {
              ChatLib.command("pq off")
          }, 300);
        
		  }
		
	if(formattedMessage.includes("&r&r&r                    &r&6&lENDSTONE PROTECTOR DOWN!&r")){
          setTimeout(() => {
              ChatLib.command("pq medium")
          }, 300);
        
  		}
  })
	
    
const createChatEvent = (chatMsg, cmd) =>{
register("Chat", (event) => {
	if(!enable) return;
	var formattedMessage = ChatLib.getChatMessage(event, true);
	if(formattedMessage==(chatMsg)){	
			    setTimeout(() => {
				      ChatLib.command(cmd)
			    }, 300);
			
		}
	})
	
}

createChatEvent("&r&c&lYou hear a massive rumble as Thunder emerges.&r", "pc ゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜███゜█゜゜█゜█゜█゜█゜゜゜█゜██゜゜███゜████゜█゜゜゜█゜゜█゜゜█゜█゜█゜██゜゜█゜█゜█゜█゜゜゜█゜゜█゜█゜゜゜█゜゜████゜█゜█゜█゜█゜█゜█゜█゜███゜███゜゜█゜゜゜█゜゜█゜゜█゜█゜█゜█゜゜██゜█゜█゜█゜゜゜█゜█゜゜゜゜゜゜█゜゜█゜゜█゜███゜█゜゜゜█゜██゜゜███゜█゜゜█゜█゜゜゜゜゜");

createChatEvent("&r&c&lYou have angered a legendary creature... Lord Jawbus has arrived.&r", "pc ゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜█゜゜██゜゜█゜゜゜█゜███゜゜█゜゜█゜████゜█゜゜゜゜゜゜█゜█゜゜█゜█゜█゜█゜█゜゜█゜█゜゜█゜█゜゜゜゜█゜゜゜゜゜゜█゜████゜█゜█゜█゜███゜゜█゜゜█゜████゜█゜゜゜█゜゜█゜█゜゜█゜█゜█゜█゜█゜゜█゜█゜゜█゜゜゜゜█゜゜゜゜゜████゜█゜゜█゜゜███゜゜███゜゜████゜████゜█゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜゜");

createChatEvent("&r&aHide no longer, a Great White Shark has tracked your scent and thirsts for your blood!&r", "pc Great White Shark!");

createChatEvent("&r&aThe spirit of a long lost Phantom Fisher has come to haunt you.&r", "pc Phantom Fisher!");
	
createChatEvent("&r&aThis can't be! The manifestation of death himself!&r", "pc Grim Reaper!");
	
createChatEvent("&r&aThe Sea Emperor arises from the depths.&r", "pc The Sea Emperor!");
	
createChatEvent("&r&aThe Water Hydra has come to test your strength.&r", "pc The Water Hydra!");
	
createChatEvent("&r&aWhat is this creature!?&r", "pc Yeti!");

createChatEvent("&r&aThe Grinch stole Jerry's Gifts...&r", "pc The Grinch!");

createChatEvent("&r&aYou found a forgotten Nutcracker laying beneath the ice.&r", "pc Nutcracker!");

createChatEvent("&r&aWOAH! A Plhlegblast appeared.&r", "pc SQUID SQUID SQUID SQUID SQUID SQUID SQUID SQUID SQUID SQUID SQUID SQUID");
	
register("RenderEntity", (x) => {
if(!enb) return;
  x.getName() === "Falling Block" && enb && x.getEntity().func_70106_y()
})

register("command", () => {
if(enable){
  enable = false;
  ChatLib.chat('&bFishing&3Utils &4Disabled.');
}else{
  enable = true;
  ChatLib.chat('&bFishing&3Utils &2Enabled.');
}
}).setCommandName("fishingutils");

register("command", () => {
if(enabled){
  enabled = false;
  ChatLib.chat('&cAutoWarp &4Disabled.');
}else{
  enabled = true;
  ChatLib.chat('&cAutoWarp &2Enabled.');
}
}).setCommandName("aw");

register("command", () => {
if(enb){
  enb = false;
  ChatLib.chat('&3&lFalling&b&lBlocks &4Disabled.');
}else{
  enb = true;
  ChatLib.chat('&3&lFalling&b&lBlocks &2Enabled.');
}
}).setCommandName("fb");

register("command", () => {
if(en){
  en = false;
  ChatLib.chat('&5Vanq&dCoords &4Disabled.');
}else{
  en = true;
  ChatLib.chat('&5Vanq&dCoords &2Enabled.');
}
}).setCommandName("vanq");

register("command", () => {
if(ena){
  ena = false;
  ChatLib.chat('&6&lGolemPQ &4Disabled.');
}else{
  ena = true;
  ChatLib.chat('&6&lGolemPQ &2Enabled.');
}
}).setCommandName("golempq");

register("command", () => {
  if(e){
    e = false;
    ChatLib.chat('&6Kuudra&e&lFeatures &4Disabled.');
  }else{
    e = true;
    ChatLib.chat('&6Kuudra&e&lFeatures &2Enabled.');
  }
  }).setCommandName("kft");

register("command", () => {
  if(enab){
    enab = false;
    ChatLib.chat('&a&lAutoSB &4Disabled.');
  }else{
    enab = true;
    ChatLib.chat('&a&lAutoSB &2Enabled.');
  }
  }).setCommandName("autosb");