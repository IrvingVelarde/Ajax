function ejucutarAJAX(){
	/*
		 0 => Peticion no ha sido inicialiazada
		 1 => Peticion ha sido establecida
		 2 => Peticion ha sido enviada
		 3 => Peticion esta siendo procesada
		 4 => Peticion ha sido finalizada
	*/
	var ajaxRequest = new XMLHttpRequest();
	ajaxRequest.onreadystatechange = function(){
		if (ajaxRequest.readyState == 4 && ajaxRequest.status == 200) {
			document.getElementById("info").innerHTML = ajaxRequest.responseText;
		}
	}
	ajaxRequest.open("GET","message.txt",true);
	ajaxRequest.send();
}