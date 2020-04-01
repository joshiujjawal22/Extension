let a=document.getElementById('inpu');
a.addEventListener("keyup",my);

function my(){
	document.getElementById('greet').innerHTML=`Hello ${a.value}`;
	if(a.value=='') document.getElementById('greet').innerHTML=``;
}
