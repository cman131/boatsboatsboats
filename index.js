var score = 0;
function update() {
	document.getElementById("score").innerHTML = score+"/"+num;
	if(score == num){
		alert("Good Job!!!");
		document.getElementById("totallySecretTitle").innerHTML = songTitle;
		$("#secretKiller").css("visibility","hidden");
	}
}

function parseLyrics(lies){
	var fin={};
	var a=lies.split(" ");
	for (var i = 0; i < a.length; i++) {
		var n = strippinTime(a[i]).toLowerCase();
		if(n.length>12){
			console.log(n);
			n = n.substring(0,2);
		}
		if(fin[n]==null){
			fin[n]=[[i,a[i]]];
		}
		else {
			var temp = fin[n];
			var temp2 = [[i,a[i]]];
			fin[n]=temp.concat(temp2);
		}
	}
	return [fin,a.length];
}

function size(obj){
	var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size + 1;
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

