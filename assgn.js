var linknum = 5;
var id=1;
function addRef(){

	var a = document.createElement('a');
	var linkText = document.createTextNode("Link "+linknum);
	a.appendChild(linkText);
	a.title = "Link "+linknum;
	var ref = prompt("Add a new reference link");
	if(ref==null){
		return;
	}
	a.href = ref;
	a.target = "_blank";   
	a.style="color: #961028;";                         
	document.getElementById("links").appendChild(a);
	linknum++;

	var b = document.createElement('br');                        
	document.getElementById("links").appendChild(b);          
}
function addTsk(){

	var a = document.createElement('input');
	var tsk = prompt("What's your next task?");
	if(tsk==null){
		return;
	}  
	a.type="checkbox";
	a.id=id;
	id++;
	
	var label = document.createElement('label'); 
	label.htmlFor = id; 
	label.appendChild(document.createTextNode(tsk));

	document.getElementById("tsk").appendChild(a);
	document.getElementById("tsk").appendChild(label);

	var b = document.createElement('br');                        
	document.getElementById("tsk").appendChild(b);  
}