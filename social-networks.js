var url = "http://gmc.lingotek.com/language";
var http = new XMLHttpRequest();
http.open('HEAD', url, false);
http.send();

console.log("Response text is " + http.responseText);