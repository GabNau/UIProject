var linknum = 5;
function addRef(){

	var a = document.createElement('a');
	var linkText = document.createTextNode("Link "+linknum);
	a.appendChild(linkText);
	a.title = "Link "+linknum;
	var ref = prompt("Add a new reference link");
	if(ref==null||){
		return;
	}
	a.href = ref;
	a.target = "_blank";                            
	document.getElementById("links").appendChild(a);
	linknum++;

	var b = document.createElement('br');                        
	document.getElementById("links").appendChild(b);          
}