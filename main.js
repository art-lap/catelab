 $(function () {


	 function firstnavActive () {
		 
		$('.nav-item__link').removeClass ('active')
		$('.firstlink').addClass('active')

	 }

	 function secondnavActive() {

		 $('.nav-item__link').removeClass('active')
		 $('.secondlink').addClass('active')

	 }

	 function thirdnavActive() {

		 $('.nav-item__link').removeClass('active')
		 $('.thirdlink').addClass('active')

	 }


	 function noActivenav() {

		 $('.nav-item__link').removeClass('active')

	 }

	 $(window).on('scroll', function name(params) {
		 if ($(window).scrollTop() > 0) {
			 noActivenav()
		 }
		
		if ($(window).scrollTop() > 650) {
			 firstnavActive()
		 }

		 if ($(window).scrollTop() > 1250) {
			 secondnavActive()
		 }
		 
		 if ($(window).scrollTop() > 2050) {
			 thirdnavActive()
		 }
		 
		 else {}
	 }) 

			$('.nav__backcall-button button').click(function(){
        $('.nav__backcall-form').show()
				console.log(2)
			})
			$('.backcall-form__exit_button button').click(function(){
        $('.nav__backcall-form').hide()
				$('.call-to-action-form').hide()
				console.log(3)
			})


			$('.backcall-form__submit').click(function(){
        console.log(4)
				$('.backcall-form, .call-to-action-form-item').hide()
				$('.backcall-form__success-page').show()

			})


			$('.nav__mob-menu-button button').click(function name(params) {
        console.log(5)
				$('.nav-items-conteiner').show()
			})
			$('.nav-item__exit-button').click(function name(params) {
        $('.nav-items-conteiner').hide()
				console.log(6)
			})


			$('.call-to-action-button_red button').click(function name(params) {
        $('.call-to-action-form').show()
				console.log(6)
			})


	 $('.call-to-action-form-item.backcall-form__soglasie_checkbox').click(function name(params) {
		 var Contact = $('.call-to-action-form-item.backcall-form__input_cont-number').val()
				
		 if ($(this).is(':checked')) {
					if (Contact == '') {
        console.log("soglasie net nomera")
						$('.call-to-action-form-item.backcall-form__input_cont-number').addClass ('backcall-form__input_cont-number_Error')
						$('.call-to-action-form-item.backcall-form__submit').attr('disabled', true)

					}

					else {
        console.log("est soglasie i nomer")
						$('.call-to-action-form-item.backcall-form__submit').attr('disabled', false)
					}

				}

				else {
        console.log("net soglasiya");
				$('.backcall-form__submit').attr('disabled', true)
			 $('.call-to-action-form-item.backcall-form__input_cont-number').removeClass('backcall-form__input_cont-number_Error')
				}
			})

	 $('.call-to-action-form-item.backcall-form__input_cont-number').on('keyup', function (event) {
				var Contact = $(this).val()
				console.log(Contact)

				if (Contact == '') {
        console.log("нет номера")
					$('.call-to-action-form-item.backcall-form__submit').attr('disabled', true)
					if ($('.call-to-action-form-item.backcall-form__input_soglasie').is(':checked')) {
						$('.call-to-action-form-item.backcall-form__input_cont-number').addClass('backcall-form__input_cont-number_Error')
   					 }
				}


					else {
        console.log("есть номер")
					$('.call-to-action-form-item.backcall-form__input_cont-number').removeClass('backcall-form__input_cont-number_Error')
					if ($('.call-to-action-form-item.backcall-form__soglasie_checkbox').is(':checked')) {
        console.log("est soglasie i nomer")
						$('.call-to-action-form-item.backcall-form__submit').attr('disabled', false)
							}
							else {console.log("есть номер нет согласия")
						$('.call-to-action-form-item.backcall-form__submit').attr('disabled', true)
							}
					}
			})

	 $('.backcall-form.backcall-form__soglasie_checkbox').click(function name(params) {
		 var Contact = $('.backcall-form.backcall-form__input_cont-number').val()
		 console.log (100)
		 if ($(this).is(':checked')) {
			 if (Contact == '') {
				 console.log("soglasie net nomera")
				 $('.backcall-form.backcall-form__input_cont-number').addClass('backcall-form__input_cont-number_Error')
				 $('.backcall-form.backcall-form__submit').attr('disabled', true)

			 }

			 else {
				 console.log("est soglasie i nomer")
				 $('.backcall-form.backcall-form__submit').attr('disabled', false)
			 }

		 }

		 else {
			 console.log("net soglasiya");
			 $('.backcall-form__submit').attr('disabled', true)
			 $('.backcall-form.backcall-form__input_cont-number').removeClass('backcall-form__input_cont-number_Error')
		 }
	 })

	 $('.backcall-form.backcall-form__input_cont-number').on('keyup', function (event) {
		 var Contact = $(this).val()
		 console.log(Contact)

		 if (Contact == '') {
			 console.log("нет номера")
			 $('.cbackcall-form.backcall-form__submit').attr('disabled', true)
			 if ($('.backcall-form.backcall-form__input_soglasie').is(':checked')) {
				 $('.backcall-form.backcall-form__input_cont-number').addClass('backcall-form__input_cont-number_Error')
			 }
		 }


		 else {
			 console.log("есть номер")
			 $('.backcall-form.backcall-form__input_cont-number').removeClass('backcall-form__input_cont-number_Error')
			 if ($('.backcall-form.backcall-form__soglasie_checkbox').is(':checked')) {
				 console.log("est soglasie i nomer")
				 $('.backcall-form.backcall-form__submit').attr('disabled', false)
			 }
			 else {
				 console.log("есть номер нет согласия")
				 $('.backcall-form.backcall-form__submit').attr('disabled', true)
			 }
		 }
	 })

			 var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
				loop: true,
				slidesPerView: 3,

				// // If we need pagination
				pagination: {
        el: '.swiper-pagination',
					clickable: true,
				},

				// Navigation arrows
				navigation: {
        nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},

				breakpoints: {
        // when window width is >= 320px
        1025: {
        slidesPerView: 3,
						spaceBetween: 20,
					},

					760: {
        slidesPerView: 2,
						spaceBetween: 40,
					},

					0: {
        slidesPerView: 1,
						spaceBetween: 10,
					}
				}
			})

})