// ajax ->

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        jsonData(data);
    }
}

xmlhttp.open("GET", "data.json", true);
xmlhttp.send();


function jsonData(json_object) {

    var js_object = JSON.parse(json_object);


    for (x in js_object.gamers) {
        var gamerS = js_object.gamers;

        for (y in gamerS[x]){

            console.log(gamerS[x][y]);
        }
    }
}