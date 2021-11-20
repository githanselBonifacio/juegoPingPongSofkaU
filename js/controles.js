function detener_musica(){
	audio = document.getElementById("musica_fondo");
    
	if (!audio){
		alert(audio);
	} else {
		padre = audio.parentNode;
		padre.removeChild(audio);
	}
}
