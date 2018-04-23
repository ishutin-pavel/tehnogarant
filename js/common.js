$(document).ready(function() {

//Всплывающее окно
$(".fancybox").fancybox();

$('[data-fancybox]').fancybox({
	youtube : {
	}
});


//Маска для телефона
	$('input[type="tel"]').inputmask("+7 (999) 999-99-99");


//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".popup__form_button").click(function() {
		
		if ($('#popup__form_phone').val() == "") {
				$('.popup__form_phone_error').fadeIn(1000).html('Как с Вами связаться?');
				document.getElementById('popup__form_phone').focus();
		} else {
			$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#popup__form").serialize()
		}).done(function() {
			yaCounter41024889.reachGoal('order');
			$.fancybox.close();
			$.fancybox.open({type: 'inline', href: '#thanks', padding:0 })
		});
	}
		return false;
	});


// Прокрутка к якорю
 jQuery('a[href^="#to_"]').click( function(){
	var scroll_el = jQuery(this).attr('href');
	if (jQuery(scroll_el).length != 0) {
			jQuery('html, body').animate({ scrollTop: jQuery(scroll_el).offset().top }, 500);
	}
	return false;
});

 
});//ready
