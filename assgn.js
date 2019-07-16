var linknum = 5;
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
	document.getElementById("links").appendChild(a);
	linknum++;

	var b = document.createElement('br');                        
	document.getElementById("links").appendChild(b);          
}
function addTsk(){

	var a = document.createElement('input');
	var tsk = prompt("What's your next task?");
	var linkText = document.createTextNode(tsk);
	a.appendChild(linkText);
	if(tsk==null){
		return;
	}  
	a.type="checkbox";                        
	document.getElementById("tsk").appendChild(a);

	var b = document.createElement('br');                        
	document.getElementById("tsk").appendChild(b);  
}