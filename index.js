var score = 0;
function update() {
	document.getElementById("score").innerHTML = score+"/"+num;
}

function checkDatLyric(lyric){
	return lyrics[lyric]!=null;
}

function strippinTime(words){
	return words.replace(/\W/g, '');
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

