//Criado por Cleyton Sales
// Realiza menu bar transparente no começo.
(function() {

	var className = "navbar-ontop"
	
	// começamos ocultos, para evitar oscilações
	document.write("<style id='temp-navbar-ontop'>.navbar {opacity:0; transition: none !important}</style>")

	function update() {
		// alternar className com base na propriedade scrollTop do documento
		var nav = document.querySelector(".navbar")

		if (window.scrollY > 15)
			nav.classList.remove(className)
		else
			nav.classList.add(className) 
	}

	document.addEventListener("DOMContentLoaded", function(event) {
		$(window).on('show.bs.collapse', function (e) {
			$(e.target).closest("." + className).removeClass(className);
		})

		$(window).on('hidden.bs.collapse', function (e) {
			update()
		})
		update()
		// ainda alterando para evitar oscilações
		setTimeout(function() {
			document.querySelector("#temp-navbar-ontop").remove()
		})
  	});

	window.addEventListener("scroll", function() {
		update()			
	})

})();