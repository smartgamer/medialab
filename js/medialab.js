
$(document).ready(function() {

	// WP FIXES

	$(".wp-caption").removeAttr('style')

	// MENU

	var mobile_menu = $('#mobile_menu > div')

	$('.navbar-burger').click(function(e){
        var el = $(e.currentTarget)
        var target = $('#' + el.data('target'))
        el.toggleClass('is-active')
        target.toggleClass('is-active')
    })

    $('<div class="site-search-mobile"></div>')
    	.html($('.site-search').html())
    	.appendTo(mobile_menu)
    	.find('.input.is-small').removeClass('is-small')

	$(".site-menu a").each(function( index ) {
		var link = $(this).clone().appendTo(mobile_menu)
		link.addClass('navbar-item')
	})

	mobile_menu.append('<hr>')

	$(".site-categories a").each(function( index ) {
		var link = $(this).clone().appendTo(mobile_menu)
		link.addClass('navbar-item')
	})

	// HOME

	$('.destaques-carousel').flickity({
		adaptiveHeight: true,
		wrapAround: true,
		autoPlay: 5000
	})


	// MODAL

	$('.abrir-perfil').click(function(e){
		e.preventDefault()
		var el = e.currentTarget
		var nome = $('.nome', el).html() 
		var titulo = $('.titulo', el).html() 
		var foto = $('.foto', el).attr('src') 
		var bio = $('.bio', el).html()
		$('.modal .nome').html(nome)
		$('.modal .titulo').html(titulo)
		$('.modal .foto').attr('src', foto)
		$('.modal .texto').html(bio)
		$('.modal').addClass('is-active')
	})

	$('.modal-close,.modal-background').click(function(e){
		$('.modal').removeClass('is-active')
	})

})