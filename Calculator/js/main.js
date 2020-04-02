// Variable Declaration
var sum=0;
let obj_list=document.getElementById('obj_list');
let object=document.getElementById('object');
let bucks=document.getElementById('spend');
let divi=document.getElementById('division');
let add=document.getElementById('add');


// Date
var d=new Date();
var d_str=String(d).substring(0,20);  //Converted into String


// Functions 
add.addEventListener('click',my);

function my(){
	if(divi.value=='' || divi.value=='0') divi.value=1;
	sum=sum+(parseInt(bucks.value)/parseInt(divi.value)); 
	document.getElementById('total').textContent="Total = " + sum;
	var list=document.createElement('LI');

list.textContent= `${d_str}   ${object.value}       ${bucks.value/divi.value}` ;
obj_list.appendChild(list);
}

