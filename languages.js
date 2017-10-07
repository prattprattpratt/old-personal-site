<<<<<<< HEAD
var xmlhttp = new XMLHttpRequest();
var url = "http://gmc.lingotek.com/language";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var out = "";
    var i;
    for (i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' +
        arr[i].display + '</a><br>';
    }
    document.getElementById("id01").innerHTML = out;
}
=======
var request = new XMLHttpRequest();
var url = "http://gmc.lingotek.com/language", array;

request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        array = JSON.parse(this.responseText);
        for (var language in array) {
            $("#languages").html(
                $("#languages").html() +
                "<div class='language' id='" + array[language].language + "'>" +
                    "<h1>" + array[language].language + "</h1>" +
                    "<div class='language-info' id='" + array[language].language + "-info'>" +
                        "<p>Code: " + array[language].code + "</p>" +
                    "</div>" +
                "</div>");
        }
    }
};
request.open("GET", url, true);
request.send();
>>>>>>> 50c153eab8472718c67c1d0f3e3e252b73727d82
