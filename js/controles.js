
function reproducir_musica_fin(){
	const audio = document.createElement("audio");
	audio.src="/recursos/audio/fin_del_juego";
	audio.autoplay="true";
	document.body.appendChild(audio);
}

function detener_musica(){
	audio = document.getElementById("musica_fondo");
    
	if (!audio){
		console.log(audio);
	} else {
		padre = audio.parentNode;
		padre.removeChild(audio);
		reproducir_musica_fin();
	}
}

function fin(){
		alert("Gracias por jugar");
		window.close();
}

