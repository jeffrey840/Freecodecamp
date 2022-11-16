
function dis(val){
	document.getElementById("ans").value += val
}

function se(){
	document.getElementById("ans").innerHTML="7";
}

function sol(){
	let x = document.getElementById("ans").value;
	let y = eval(x);
	document.getElementById("ans").value = y;
}

function clr(){
	document.getElementById("ans").value = "";
}


