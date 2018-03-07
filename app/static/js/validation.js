$().ready(function(){
    //$('a[href^=#]').click(function(e){
     //   e.preventDefault();
     //   return false;
    //});
  //




    //скролл вверх
    $('.to_top').click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop: 0}, 400);
        return false;
    });


  

  	
    //ввод только цифр
    $('.only_number').on('keydown', function(event) {
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 187 ||
            (event.keyCode == 65 && event.ctrlKey === true) ||
            (event.keyCode >= 35 && event.keyCode <= 39)) {return;}
        else {
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {event.preventDefault();}
        }
    });


    $('.js_submit').click(function(e){
        e.preventDefault();
        check_form(this);
        return false;
    });


    $('.js_scroll_to_form').click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop: $('form').offset().top}, 400);
        return false;
    });


    $('.change-package-button').on('touchend, click', (function() {
      var package_id = $(this).data('package-id');
      $('.change-package-selector [value="' + package_id + '"]').prop("selected", true);
      set_package_prices(package_id);
    }));


    $('.change-package-selector').on('change', (function() {
      var package_id = $(this).val();
      set_package_prices(package_id);
    }));


  	function show_form_hint(elem, msg) {
      $(".js_errorMessage").remove();
      jQuery('<div class="js_errorMessage">' + msg + '</div>').appendTo('body').css({
        'left': jQuery(elem).offset().left,
        'top': jQuery(elem).offset().top - 30,
        'background-color':'#e74c3c',
        'border': '1px dashed black',
        'border-radius': '5px',
        'color': '#fff',
        'font-family': 'Arial',
        'font-size': '14px',
        'margin': '3px 0 0 0px',
        'padding': '6px 5px 5px',
        'position': 'absolute',
        'z-index': '9999'
      });
      jQuery(elem).focus();
    };
  
  	function getQueryVariable(variable)
    {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
      }
      return(false);
    }



    // <vclick> ---------------------------------------------------------------------
    function send_vclick(action) {
        s_trk = getQueryVariable('s_trk');

      	if (!s_trk) {
          return;
        }

        var url;
        if ($('input[name="esub"]') && $('input[name="esub"]').length > 0) {
            if (!action) {
                url = 'http://log.xoalt.com/?src=adcombo&s_act=a1&s_trk=' + s_trk;
            } else {
                url = 'http://log.xoalt.com/?src=adcombo&s_act=ac&s_trk=' + s_trk + '&action=' + action;
            }
        }
        else if (!action) {
            url = 'http://log.xoalt.com/?src=adcombo&s_act=vc&s_trk=' + s_trk;
        }

        if (url) {
            var cookie_name = 'vc_' + s_trk + '_' + action;
	        
            if (Cookies.get(cookie_name) != 'true') {
                $.ajax({
                    url: url,
                    cache: false
                });
               	Cookies.set(cookie_name, 'true', {expires: 30});
            }
        }
    }

    send_vclick();

    $(document).click(function () {
        send_vclick('click');
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
            send_vclick('scroll');
        }
    });
	// </vclick> ---------------------------------------------------------------------

    $('input[name=name]').on('touchend, click', function () {
        if (name_hint != '') {
            show_form_hint(this, name_hint);
            send_vclick('fillup');
            return false;
        }
    });

    $('input[name=phone]').on('touchend, click', function () {

        if (phone_hint != '') {
            show_form_hint(this, phone_hint);
            send_vclick('fillup');
            return false;
        }
    });


    $('input[name=email]').on('touchend, click', function () {
     
        if (email_hint != '') {
            show_form_hint(this, email_hint);
            send_vclick('fillup');
            return false;
        }
    });

     $('input[name=strada]').on('touchend, click', function () {
        if (strada_hint != '') {
            show_form_hint(this, strada_hint);
            send_vclick('fillup');
            return false;
        }
    });


      $('input[name=localitate]').on('touchend, click', function () {
        if (localitate_hint != '') {
            show_form_hint(this, localitate_hint);
            send_vclick('fillup');
            return false;
        }
    });

       $('input[name=judet]').on('touchend, click', function () {
        if (judet_hint != '') {
            show_form_hint(this, judet_hint);
            send_vclick('fillup');
            return false;
        }
    });


       $('input[name=strada]').on('touchend, click', function () {
        if (strada_hint != '') {
            show_form_hint(this, strada_hint);
            send_vclick('fillup');
            return false;
        }
    });

    function check_form(target) {


        var feed = {
          	pag_seguro_submit: function(form) {
              var order = {};
              $.each(form.serializeArray(), function(){ 
                if (order[this.name] !== undefined) {
                  if (!order[this.name].push) {
                    order[this.name] = [order[this.name]];
                  }
                  order[this.name].push(this.value || '');
                } else {
                  order[this.name] = this.value || '';
                }
              }
                    );
              $.post(form[0].action, order)
              	.done(function(success) {
                	$('#pag_seguro').submit();
              })
            },
            submit: function(form, callback) {


                var formInputs = {
                    country: form.find('[name="country_code"]'),
                    fio: form.find('[name="name"]'),
                    phone: form.find('[name="phone"]'),

                    strada: form.find('[name="strada"]'),

                    localitate: form.find('[name="localitate"]'),

                    judet: form.find('[name="judet"]'),

                    lid: form.find('[name="lid"]'),
                    address: form.find('[name="address"]'),
                    house: form.find('[name="house"]'),
                    city: form.find('[name="city"]'),
                    email: form.find('[name="email"]'),
                  	validate_address: form.find('[name="validate_address"]')
                };


                var postParams = {
                    method: 'feedback',
                    name: formInputs.fio.val(),
                    phone: formInputs.phone.val(),
                    strada: formInputs.strada.val(),
                    judet: formInputs.judet.val(),
                    localitate: formInputs.localitate.val(),
            
                };


                jQuery('.js_errorMessage').remove();
                var country = "Romania";


                var rename = /^[\D+ ]*$/i,
                    rephone = /^[0-9\-\+\(\) ]*$/i,
                    remail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
				
              	if(formInputs.fio.attr('data-count-length') == "2+"){
                	var rename = /^\D+\s[\D+\s*]+$/i;
                }
              
              	// checking name
                if(!postParams.name.length)
                    return feed.errorMessage(formInputs.fio, defaults.get_locale_var('set_fio'));


                if(!postParams.name.length || !rename.test(postParams.name))
                    return feed.errorMessage(formInputs.fio, defaults.get_locale_var('error_fio'));



                  // checking name
                if(!postParams.strada.length)
                    return feed.errorMessage(formInputs.strada, defaults.get_locale_var('set_strada'));


                if(!postParams.localitate.length)
                    return feed.errorMessage(formInputs.localitate, defaults.get_locale_var('set_localitate'));

                 if(!postParams.judet.length)
                    return feed.errorMessage(formInputs.judet, defaults.get_locale_var('set_judet'));


              	// checking phone
              	if(phone_config.locale[country] !== undefined) {
					       var numbers_min = phone_config.locale[country].numbers_min;
                  	var numbers_max = phone_config.locale[country].numbers_max;


                    if(numbers_min && postParams.phone.length < phone_config.locale[country].numbers_min)
                        return feed.errorMessage(formInputs.phone, defaults.get_locale_var('error_phone'));


                    if(numbers_max && postParams.phone.length > phone_config.locale[country].numbers_max)
                        return feed.errorMessage(formInputs.phone, defaults.get_locale_var('error_phone'));


                } else {


                    if(!postParams.phone || !postParams.phone.length)
                        return feed.errorMessage(formInputs.phone, defaults.get_locale_var('set_phone'));


                    if(!rephone.test(postParams.phone) || postParams.phone.length < 5)
                        return feed.errorMessage(formInputs.phone, defaults.get_locale_var('error_phone'));
                }
                if (postParams.email && postParams.email.length) {
                    if (!remail.test(postParams.email))
                        return feed.errorMessage(formInputs.email, defaults.get_locale_var('error_email'));
                }
                if (formInputs.address.length && $(formInputs.address).css('display') !== 'none' && postParams.address === '') {
                    return feed.errorMessage(formInputs.address, defaults.get_locale_var('set_address'));
                }
              	if (formInputs.city.length && $(formInputs.city).css('display') !== 'none' && formInputs.city.attr('type') !== 'hidden' && postParams.city === ''){
                    return feed.errorMessage(formInputs.city, defaults.get_locale_var('set_city'));
                }
              	if (formInputs.house.length && $(formInputs.house).css('display') !== 'none' && postParams.house === ''){
                    return feed.errorMessage(formInputs.house, defaults.get_locale_var('set_house'));
                }
                if (formInputs.validate_address && postParams.validate_address === '1' && formInputs.address.length && $(formInputs.address).css('display') !== 'none') {
                  	var o = {};
                  	$.each(form.serializeArray(), function() {
                      if (o[this.name] !== undefined) {
                          if (!o[this.name].push) {
                              o[this.name] = [o[this.name]];
                          }
                          o[this.name].push(this.value || '');
                      } else {
                          o[this.name] = this.value || '';
                      }
                  });
                    $.post('/order/validate_address/', o)
                        .done(function(response) {
                      		for (key in response){
                              if (response.hasOwnProperty(key)){
                                form.append('<input type="hidden" name="' + key + '" value="' + response[key] + '">')
                              }
                            }
                      		if(callback){
                              callback(this)
                            } else {
                              form.submit();  
                            }
                        })
                        .fail(
                            function(){
                                $(formInputs.city).css("display", "inline-block");
                                $(formInputs.house).css("display", "inline-block");
                                var message = defaults.get_locale_var('error_address');
                              	if (postParams.address === undefined){
                                  showAnotherFormHint(message)
                                } else {
                                  return feed.errorMessage(formInputs.address, message);
                                }
                            });
                    return false
                } else {
                    if(callback){
                      callback(form)
                    } else {                        
                      form.submit();  
                    }
                    return false;
                }
            },
            errorMessage: function(elem, msg) {
	            $(".js_errorMessage").remove();
                jQuery('<div class="js_errorMessage">' + msg + '</div>').appendTo('body').css({
                    'left': jQuery(elem).offset().left,
                    'top': jQuery(elem).offset().top - 30,
                    'background-color':'#e74c3c',
                    'border-radius': '5px',
                    'color': '#fff',
                    'font-family': 'Arial',
                    'font-size': '14px',
                    'margin': '3px 0 0 0px',
                    'padding': '6px 5px 5px',
                    'position': 'absolute',
                    'z-index': '9999'
                });
                jQuery(elem).focus();
                return false;
            }
        };
        if (target.classList.contains('pag_seguro_submit')) {
          feed.submit($(target.parentElement.previousElementSibling), feed.pag_seguro_submit)
        } else {
          feed.submit($(target).parents('form').first());
        }
    }



    $("#country, .country").change(function(){
        def_click($(this).val());
        phone_config.change_phone_code($(this).parents('form'));
    });

    $("body").on('touchend, click', function(){
        $(".js_errorMessage").remove();
    });

    //$(window).on('scroll', function(){
    //    $(".js_errorMessage").remove();
    //});


    checkTimeZone();
    setBrowser();

    if (typeof site_title !== 'undefined') {
        $('title').text(site_title);
    }
  
  	if (window.lang_locale && window.lang_locale.toLowerCase() in defaults.locale) {
      defaults._locale = window.lang_locale.toLowerCase();
    }
  	else {
      defaults._locale = 'en';
    }
});

var phone_config = {
    get_phone_code: function(form) {
        var country = form.find('[name="country_code"]').val().toLowerCase();
        return phone_code = typeof phone_config.locale[country] != 'undefined' ? phone_config.locale[country].cod : '';
    },
    change_phone_code: function(form) {
        var new_phone_code = this.get_phone_code(form);

        for (var cnr in phone_config.locale) {
            if ( ! phone_config.locale.hasOwnProperty(cnr)) continue;
            if (phone_config.locale[cnr].cod == form.find('input[name="phone"]').val()) {
                form.find('input[name="phone"]').val(new_phone_code);
            }
        }
    },
    locale: {
      /*
      	tr:{
          	cod: '',
          	numbers_min: '10',
          	numbers_max: '12',
          	primer: ''
        },
	    gr:{
          	cod: '',
          	numbers_min: '10',
          	numbers_max: '10',
          	primer: ''
        },
      	in:{
          	cod: '+91',
          	numbers_min: '13',
          	numbers_max: '13',
          	primer: ''
        },
      	th:{
          	cod: '66',
          	numbers_min: '11',
          	numbers_max: '11',
          	primer: ''
        },
        ru:{
            cod: '7',
            numbers_min: '11',
            numbers_max: '11',
            primer: '79121234567'
        },
        ua:{
            cod: '380',
            numbers_min: '12',
            numbers_max: '12',
            primer: '380501234567'
        },
        md:{
            cod: '373',
            numbers_min: '11',
            numbers_max: '11',
            primer: '37368123456'
        }
        
      	mx:{
          	cod: '',
          	numbers_min: '',
          	numbers_max: '',
          	primer: ''
        },*/
      	bo:{
            cod: '',
            numbers_min: '8',
            numbers_max: '8',
            primer: ''
        },
      	pe:{
            cod: '',
            numbers_min: '8',
            numbers_max: '9',
            primer: ''
        },
      	br:{
            cod: '',
            numbers_min: '7',
            numbers_max: '12',
            primer: ''
        },
      	cl:{
            cod: '',
            numbers_min: '9',
            numbers_max: '11',
            primer: ''
        }
    },
    errors: {
        error_phone_code: 'Номер телефона должен начинаться с "{cod}".<br> Пример: {primer}',
        input_phone: 'Вы не полностью ввели номер телефона. Должно быть {numbers_limit} цифр',
        set_limit: 'Вы ввели слишком много цифр,<br> скорее всего была допущена<br> ошибка при наборе номера'
    },
    process_error: function (error_name, country){
        var error_text = this.errors[error_name];
        for (var code in this.locale[country]) {
            if ( ! this.locale[country].hasOwnProperty(code)) continue;
            error_text = error_text.replace('{'+code+'}', this.locale[country][code]);
        }
        return error_text;
    }
};


var defaults = {
    get_locale_var: function(var_name) {
        country = this._locale.toLowerCase();
        return this.locale[country][var_name] !== undefined ?
            this.locale[country][var_name] : this.locale[this._locale][var_name];
    },
    locale: {
  
        en:{
            set_country: 'Select country',
            set_house: 'House is a required field',
            set_fio: 'Introduceti numele si prenumele dvs.',
            error_fio: 'Name field is entered incorrectly',
            set_phone: 'Introduceti numarul de telefon',
            set_address: 'Address is a required field',
          	error_address: 'Invalid address, please, refill the form',
            set_city: 'City is a required field',
            error_email: 'The email is entered incorrectly',
            error_phone: 'Numarul introdus este incorect.',
            exit_text: 'You really want to close tab?',

            set_strada: 'Introduceti strada pentru livrare',

            set_localitate: 'Introduceti localitatea',

            set_judet: 'Introduceti judetul'
        },
    }
};

function set_package_prices(package_id) {

    var price = package_prices[package_id]['price'] * 1,
        old_price = package_prices[package_id]['old_price'] * 1,
        shipment_price = package_prices[package_id]['shipment_price'] * 1;

    $('.js_new_price').each(function() {
      $(this).is('input') ? $(this).val(price) : $(this).text(price);
    });

    $('.js_old_price').each(function() {
      $(this).is('input') ? $(this).val(old_price) : $(this).text(old_price);
    });

    $('.js_full_price').each(function() {
      $(this).is('input') ? $(this).val(price + shipment_price) : $(this).text(price + shipment_price);
    });

    $('.js_delivery_price').each(function() {
      $(this).is('input') ? $(this).val(shipment_price) : $(this).text(shipment_price);
    });

  	$('input[name=price]').each(function() {
      $(this).val(price);
    });
    $('input[name=shipment_price]').each(function() {
      $(this).val(shipment_price);
    });
  	$('input[name=total_price]').each(function() {
      $(this).val(price + shipment_price);
    });
  	$('input[name=total_price_wo_shipping]').each(function() {
      $(this).val(price);
    });

  	$('input[name=package_id]').val(package_id);
}

function checkTimeZone() {
    var offset = new Date().getTimezoneOffset();
    hours = offset / (-60);
    $('form').append('<input type="hidden" name="time_zone" value="'+hours+'">');
}

function setBrowser() {

    if (typeof ua !== 'undefined') {
        $('form').append('<input type="hidden" name="bw" value="'+ua.browser.name+'">');
    }

}

function sendPhoneOrder(form){
    form_data = $(form).serializeArray();
    form_data.push({"name" : "uri_params", "value" : window.location.search.replace("?", "")});
    $.ajax({
        type: "POST",
        url: "/order/create/",
        data: form_data,
        crossDomain: true,
        dataType: "json",
        success: function (e){
        }
    });
}

function cancelEvent(e){
    try {
        if (e) {
            e.returnValue = defaults.get_locale_var('exit_text');
            e.cancelBubble = true;
            if (e.stopPropagation)
                e.stopPropagation();
            if (e.preventDefault)
                e.preventDefault();
        }
    } catch (err) {}
    return defaults.get_locale_var('exit_text');
}

function RemoveUnload() {
    window.onbeforeunload = null;
}

function showLoader(){
 	var loaderDiv = document.createElement('div');
 	loaderDiv.id = 'loader-block';
	loaderDiv.className = 'loader-block';
	document.getElementsByTagName('body')[0].appendChild(loaderDiv);
	var ImgUrl = '/!common_files/images/loader.gif'
	var cssValues = {
		"position" : "fixed",
		"top" : 0,
		"left" : 0,
		"z-index" : 9999,
		"width" : "100%",
		"height" : "100%",
		"background" : 'url('+ImgUrl+') center center rgba(0,0,0,0.5) no-repeat' 
		
	}
	$('#loader-block').css(cssValues);
	$('#loader-block').animate({'opacity' : 0}, 20000, function(){
      hideLoader();
    });
}

function hideLoader(){
  var loader = $('#loader-block');
  loader.remove()
}


