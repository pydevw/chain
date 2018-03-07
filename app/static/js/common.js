$(document).ready(function(){

    var ts = new Date(2020, 3, 19,24,0,0,0),
        newYear = false;
    $('#countdown').countdown({
        timestamp: ts
    });
	$('#countdown2').countdown({
        timestamp: ts
    });

	// $('body').width( $(window).width() ).css({'overflow-x': 'hidden'});

	// $(window).resize(function(){
	// 	$('body').width( $(window).width() ).css({'overflow-x': 'hidden'});
	// })

	$('#country_select').click(function(){
		$(this).find('.drop_down').slideToggle(200);
	})
	$('#country_select').find('.drop_down div').click(function(){
		$('#p-count').html( $(this).html() )
		$('#country').val( $(this).attr("value") )
		return false;
	})

	$('.drop_down_item').click(function(){
		$(this).parent().slideToggle(200);
	})


	$(".top-menu").on("click","a", function (event) {
		//Ð¾Ñ‚Ð¼ÐµÐ½ÑÐµÐ¼ ÑÑ‚Ð°Ð½Ð´Ð°Ñ€Ñ‚Ð½ÑƒÑŽ Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÑƒ Ð½Ð°Ð¶Ð°Ñ‚Ð¸Ñ Ð¿Ð¾ ÑÑÑ‹Ð»ÐºÐµ
		event.preventDefault();

		//Ð·Ð°Ð±Ð¸Ñ€Ð°ÐµÐ¼ Ð¸Ð´ÐµÐ½Ñ‚Ð¸Ñ„Ð¸ÐºÐ°Ñ‚Ð¾Ñ€ Ð±Ð¾ÐºÐ° Ñ Ð°Ñ‚Ñ€Ð¸Ð±ÑƒÑ‚Ð° href
		var id  = $(this).attr('href'),

		//ÑƒÐ·Ð½Ð°ÐµÐ¼ Ð²Ñ‹ÑÐ¾Ñ‚Ñƒ Ð¾Ñ‚ Ð½Ð°Ñ‡Ð°Ð»Ð° ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñ‹ Ð´Ð¾ Ð±Ð»Ð¾ÐºÐ° Ð½Ð° ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ð¹ ÑÑÑ‹Ð»Ð°ÐµÑ‚ÑÑ ÑÐºÐ¾Ñ€ÑŒ
			top = $(id).offset().top;
		
		//Ð°Ð½Ð¸Ð¼Ð¸Ñ€ÑƒÐµÐ¼ Ð¿ÐµÑ€ÐµÑ…Ð¾Ð´ Ð½Ð° Ñ€Ð°ÑÑÑ‚Ð¾ÑÐ½Ð¸Ðµ - top Ð·Ð° 1500 Ð¼Ñ
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$(".orderbutton").on("click", function (event) {
		//Ð¾Ñ‚Ð¼ÐµÐ½ÑÐµÐ¼ ÑÑ‚Ð°Ð½Ð´Ð°Ñ€Ñ‚Ð½ÑƒÑŽ Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÑƒ Ð½Ð°Ð¶Ð°Ñ‚Ð¸Ñ Ð¿Ð¾ ÑÑÑ‹Ð»ÐºÐµ
		event.preventDefault();

		//Ð·Ð°Ð±Ð¸Ñ€Ð°ÐµÐ¼ Ð¸Ð´ÐµÐ½Ñ‚Ð¸Ñ„Ð¸ÐºÐ°Ñ‚Ð¾Ñ€ Ð±Ð¾ÐºÐ° Ñ Ð°Ñ‚Ñ€Ð¸Ð±ÑƒÑ‚Ð° href
		var id  = $(this).attr('href'),

		//ÑƒÐ·Ð½Ð°ÐµÐ¼ Ð²Ñ‹ÑÐ¾Ñ‚Ñƒ Ð¾Ñ‚ Ð½Ð°Ñ‡Ð°Ð»Ð° ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñ‹ Ð´Ð¾ Ð±Ð»Ð¾ÐºÐ° Ð½Ð° ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ð¹ ÑÑÑ‹Ð»Ð°ÐµÑ‚ÑÑ ÑÐºÐ¾Ñ€ÑŒ
			top = $(id).offset().top;
		
		//Ð°Ð½Ð¸Ð¼Ð¸Ñ€ÑƒÐµÐ¼ Ð¿ÐµÑ€ÐµÑ…Ð¾Ð´ Ð½Ð° Ñ€Ð°ÑÑÑ‚Ð¾ÑÐ½Ð¸Ðµ - top Ð·Ð° 1500 Ð¼Ñ
		$('body,html').animate({scrollTop: top}, 1000);
	});

})
