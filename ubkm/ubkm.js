function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        window.alert("Este navegador no soporta Geolocalización");
    }
}

function showPosition(position) {
	window.alert("Latitud: "+ position.coords.latitude + "\n Longitud: " + position.coords.longitude + "\n Precision: " + position.coords.acouracy);	
}