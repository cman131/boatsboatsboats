var score = 0;
function update() {
	document.getElementById("score").innerHTML = score+"/"+num;
	if(score == num){
		alert("Good Job!!!");
		document.getElementById("totallySecretTitle").innerHTML = songTitle;
		$("#secretKiller").css("visibility","hidden");
	}
}

function getTitle(){
	return "Kristen Bell - Do You Wanna Build A Snowman?";
}

function getSong(){
	return "Elsa? Do you wanna build a snowman? Come on lets go and play I never see you anymore Come out the door It's like you've gone away- We used to be best buddies And now we're not I wish you would tell me why!- Do you wanna build a snowman? It doesn't have to be a snowman. Go away, Anna Okay, bye... Do you wanna build a snowman? Or ride our bikes around the halls I think some company is overdue I've started talking to the pictures on the walls- Hang in there, Joan! It gets a little lonely All these empty rooms, Just watching the hours tick by- Tic-Tock, Tic-Tock, Tic-Tock, Tic-Tock, Tic-Tock Elsa? Please, I know you're in there, People are asking where you've been They say \"have courage\", and I'm trying to I'm right out here for you, just let me in We only have each other It's just you and me What are we gonna do? Do you wanna build a Snowman?";
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

