if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){

	setInterval(loop, 600);

}

var x = 0;

var titleText = ["¥", "¥ e", "¥ em", "¥ em1", "¥ em1l", "¥ em1ly", "¥ em1ly.", "¥ em1ly.p", "¥ em1ly.pw", "¥ em1ly.p", "¥ em1ly.", "¥ em1ly", "¥ em1l", "¥ em1",  "¥ em",  "¥ e"];
tea
function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}