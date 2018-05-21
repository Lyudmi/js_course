function init(arr1, n){
		var attrib = arr1.attributes;
		var keyAtribute  = "";
		var nameAtribute = "";
		for (let key in attrib) {

			keyAtribute = key;
			nameAtribute = attrib[key];
  
		}
 	var ul = document.createElement("ul");
	var li ="";
 	document.body.insertBefore(ul, document.body.firstChild);
	for (var i = 0; i < n ; i++) {
	
		li = document.createElement("li");
	    li.className = arr1.className;
	    li.setAttribute(keyAtribute, nameAtribute);
	    li.innerHTML = arr1.content;
	    ul.appendChild(li);

	}

}

//const empl = { className: 'class_my', attributes: { 'data-name': 'Anatoliy' }, content: 'Some Text' };

//init(empl, 5);

document.querySelector('button').addEventListener("click", listen);

 function listen() {
	var element = document.querySelector('ul');
	if(element){
		element.parentNode.removeChild(element);
		//alert('true');
		return true;
	}
	else{
		//alert('false');
		return false;
	}
}
 

