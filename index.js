var score = 0;
var cheat = false;
function update() {
	// Update the current score
	var sar = score-parseInt($('#score').text().split("/")[0].split(" ")[1]);
	if(sar>0){
		$("#scoreMod").text("+"+sar);
		$("#scoreMod").css("top", "25px");
		$("#scoreMod").css("opacity", 1);
		$("#scoreMod").animate({top: "-50px", opacity: 0}, 600);
	}
	document.getElementById("score").innerHTML = "Score: "+score+"/"+num;
	// React to win condition
	if(score == num && timerOn){
		var good = true;
		// Update Best Time if affected
		if(document.getElementById("bestTime").innerHTML != "Best Time: None"){
			var mehTemp = document.getElementById("bestTime").innerHTML.split(" ")[2].split(":");
			good = parseInt(mehTemp[0])>min || (parseInt(mehTemp[0])==min && parseInt(mehTemp[1])>secs);
		}
		if(!cheat && good){
			if(!window.localStorage.bestTime){
				window.localStorage.bestTime=JSON.stringify({});
				}
			var murrel = "Best Time: "+min+":"+(secs<10 ? "0"+secs : secs);
			var truni = JSON.parse(window.localStorage.bestTime);
			truni[songTitle] = murrel;
			window.localStorage.bestTime = JSON.stringify(truni);
			document.getElementById("bestTime").innerHTML = murrel;
		}
		// Broadcast win message and stop timer
		$.blockUI({message: "<h1>You have won!</h1><button class='specialButton' onclick='$.unblockUI();'>OK</button>"});
		$(".blockUI")[0].style.cursor = "default";
		$(".blockUI")[1].style.cursor = "default";
		$(".blockUI")[2].style.cursor = "default";
		document.getElementById("totallySecretTitle").innerHTML = songTitle;
		$("#secretKiller").css("visibility","hidden");
		timerOn = false;
	}
}

// Verify that given input is an integer
function isInt(n) {
   return parseFloat(n) == parseInt(n, 10) && !isNaN(parseInt(n));
}

function getSong(select){
	if(select>-1 && select<songs.length){
		return songs[select];
	}
	return songs[Math.floor(Math.random()*songs.length)];
}

function parseLyrics(lies){
	var fin={};
	var a=lies.split(" ");
	count = 0;
	for (var i = 0; i < a.length; i++) {
		var n = strippinTime(a[i]).toLowerCase();
		if(a[i].length>18){
			var end="";
			for(var j=12; j<a[i].length; j+=12){
				end+=a[i].substring(j-12, j)+"\n";
			}
			a[i]=end;
		}
		if(n.length>12){
			n = n.substring(0,2);
		}
		else if(typeof(fin[n])=="function") {
			fin[n]=null;
		}
		if(n!="" && n!="-"){
			if(fin[n]==null){
				fin[n]=[[count,a[i]]];
			}
			else {
				var temp = fin[n];
				var temp2 = [[count,a[i]]];
				fin[n]=temp.concat(temp2);
			}
		}
		else{
			count-=1;
		}
		count++;
	}
	return [fin,count];
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

function cheatinTime(){
	if(timerOn){
		cheat=true;
		for (key in lyrics) {
			document.getElementById("tryhard").value = key;
			fire();
		}
	}
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


