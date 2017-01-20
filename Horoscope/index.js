$(document).ready(function(){


	function setHoroscope (sign){
		$.ajax({
          url: 'https://node-horoscopes.herokuapp.com/api/horoscopes/today/'+sign,
          success: function(response) {
            $('#horoscope').text(response.horoscope);
          },
          error: function (error) {
          }
		})
	}
 	


 	$('#btn1').click(function(event) {
 		// console.log("hello");
 		$('#date').text("AQUARIUS")
 		setHoroscope('aquarius')
 		console.log()


 	});
 	$('.btn2').click(function(event) {
 		// console.log("hello")
 		$('#date').text('PISCES') 
 		setHoroscope('pisces')
 	});
 	$('.btn3').click(function(event) {
 		// console.log("hello");
 		$('#date').text("ARIES")
 		setHoroscope('aries')
 	});
 	$('.btn4').click(function(event) {
 		// console.log("hello");
 		$('#date').text("TAURUS")
 		setHoroscope('taurus')
 	});
 	$('.btn5').click(function(event) {
 		// console.log("hello");
 		$('#date').text("GEMINI")
 		setHoroscope('gemini')
 	});
 	$('.btn6').click(function(event) {
 		// console.log("hello");
 		$('#date').text("CANCER")
 		setHoroscope('cancer')
 	});
 	$('.btn7').click(function(event) {
 		// console.log("hello");
 		$('#date').text("LEO")
 		setHoroscope('leo')
 	});
 	$('.btn8').click(function(event) {
 		// console.log("hello");
 		$('#date').text("VIRGO")
 		setHoroscope('virgo')
 	});
 	$('.btn9').click(function(event) {
 		// console.log("hello");
 		$('#date').text("LIBRA")
 		setHoroscope('libra')
 	});
 	$('.btn10').click(function(event) {
 		// console.log("hello");
 		$('#date').text("SCORPIO")
 		setHoroscope('scorpio')
 	});
 	$('.btn11').click(function(event) {
 		// console.log("hello");
 		$('#date').text("SAGITTARIUS")
 		setHoroscope('sagittarius')
 	});
 	$('.btn12').click(function(event) {
 		// console.log("hello");
 		$('#date').text("CAPRICORN")
 		setHoroscope('capricorn')
 	});
 	


});