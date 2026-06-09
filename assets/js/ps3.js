function byId(id){return document.getElementById(id);}

function getPS3Firmware(){
  var ua=navigator.userAgent||"";
  var match=ua.match(/PLAYSTATION 3 ([0-9]+\.[0-9]+)/);
  return match?match[1]:"";
}

function isPS3Browser(){
  return (navigator.userAgent||"").indexOf("PLAYSTATION 3")!=-1;
}

function firmwareSlug(version){
  return String(version||"").replace(".","");
}

function initJailbreakHome(){
  var version=getPS3Firmware();
  var panel=byId("autoDetectPanel");
  var title=byId("autoDetectTitle");
  var text=byId("autoDetectText");
  var action=byId("autoDetectAction");

  if(!panel){return;}

  if(!isPS3Browser()){
    panel.className="auto-detect-panel detect-neutral";
    title.innerHTML="Desktop browser detected";
    text.innerHTML="Open this page on the PS3 to detect firmware automatically.";
    action.style.display="none";
    return;
  }

  if(version=="4.91"||version=="4.92"||version=="4.93"){
    panel.className="auto-detect-panel detect-good";
    title.innerHTML="PlayStation 3 firmware "+version+" detected";
    text.innerHTML="Use matching HFW "+version+" from the prepared USB, then start the local PS3HEN 3.5.0 installer.";
    action.href="firmware/"+version+".html";
    action.innerHTML="OPEN "+version+" CENTER";
    action.style.display="inline-block";

    var card=byId("fwCard"+firmwareSlug(version));
    if(card){card.className=card.className+" detected-card";}
    return;
  }

  panel.className="auto-detect-panel detect-warn";
  title.innerHTML=version?"Firmware "+version+" detected":"PlayStation 3 detected";
  text.innerHTML="This firmware is outside the current 4.91–4.93 service list.";
  action.style.display="none";
}

function runBrowserTests(){
  var ua=navigator.userAgent||"Unknown";
  var isPS3=isPS3Browser();
  var version=getPS3Firmware();
  var storage="Not available";

  try{
    if(window.localStorage){storage="Available";}
  }catch(e){storage="Blocked";}

  byId("testJS").innerHTML='<span class="ok">Working</span>';
  byId("testDevice").innerHTML=isPS3?'<span class="ok">PlayStation 3 detected</span>':'Desktop or other browser';
  byId("testFirmware").innerHTML=version?'<span class="ok">'+escapeHtml(version)+'</span>':'Not detected';
  byId("testRoute").innerHTML=version?("HFW "+escapeHtml(version)+" by USB, then local PS3HEN 3.5.0"):"Open this page on a PS3";
  byId("testUA").innerHTML=escapeHtml(ua);
  byId("testScreen").innerHTML=screen.width+" x "+screen.height;
  byId("testStorage").innerHTML=storage;
}

function escapeHtml(text){
  return String(text).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}