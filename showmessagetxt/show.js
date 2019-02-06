function ejucutarAJAX(){
	var ajaxRequest = new XMLHttpRequest();
	ajaxRequest.onreadystatechange = function(){
		if (ajaxRequest.readyState == 4 && ajaxRequest.status == 200) {
			document.getElementById("info").innerHTML = ajaxRequest.responseText;
		}
	}
	ajaxRequest.open("GET","message.txt",true);
	ajaxRequest.send();
}