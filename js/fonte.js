function fonte(e) {

	var elemento = $(".acessibility");
	var fonte = parseInt(elemento.css('font-size'));
	
	e == 'a' ? fonte++ : fonte--;

	elemento.css("fontSize", fonte);
	
}