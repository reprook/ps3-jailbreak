function flashById(id){return document.getElementById(id);}

function getDetectedFirmware(){
  var ua=navigator.userAgent||"";
  var match=ua.match(/PLAYSTATION 3 ([0-9]+\.[0-9]+)/);
  return match?match[1]:"";
}

function isPS3(){
  return (navigator.userAgent||"").indexOf("PLAYSTATION 3")!=-1;
}

function initFirmwarePage(expectedVersion){
  var detected=getDetectedFirmware();
  var box=flashById("firmwareDetection");
  var title=flashById("firmwareDetectionTitle");
  var text=flashById("firmwareDetectionText");
  var installer=flashById("installerButton");

  if(!box||!installer){return;}

  if(!isPS3()){
    box.className="firmware-detection detect-neutral";
    title.innerHTML="Desktop preview";
    text.innerHTML="Open this page on the PS3 to verify the firmware automatically.";
    installer.className="launch-main launch-disabled";
    installer.href="#";
    return;
  }

  if(detected==expectedVersion){
    box.className="firmware-detection detect-good";
    title.innerHTML="Correct firmware detected: "+detected;
    text.innerHTML="Use matching HFW "+expectedVersion+" from USB, then open the official PS3Xploit Standard Installer.";
    installer.className="launch-main";
    installer.href="http://ps3xploit.me/hen/installer/index.html";
    return;
  }

  box.className="firmware-detection detect-stop";
  title.innerHTML=detected?("Wrong firmware detected: "+detected):"Firmware not detected";
  text.innerHTML="This page is only for firmware "+expectedVersion+". Return and open the matching firmware center.";
  installer.className="launch-main launch-disabled";
  installer.href="#";
}