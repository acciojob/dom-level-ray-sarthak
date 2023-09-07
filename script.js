let n=-1;

	let list=document.getElementsByTagName("li");
	
	for(let i=0 ; i < list.length; i++){
		if(list[i].id==="level"){
			n=i;
		}
		
	}
	
	window.onload = alert(n+1);
