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