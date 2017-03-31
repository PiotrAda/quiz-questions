$(document).ready(function(){

var questionArray = $('[type=radio]');
var sectionArray = $('.sekcja');
var label = $('label');

	questionArray.on('click', function(){

		var classArray = $(this).parent().parent().find("input");

		// odznacza wszystkie radio;
		classArray.prop("checked", false);

		// zaznacza kliknięty radio;
		$(this).prop("checked", true);
	});

	// uruchamia wyniki quizu
	$('#submit').on('click', function(){
		var score = 0;
		var anwserArray = $("input[type=radio]:checked")

		// nalicza punkty, mnożnik zapobiega interpretacji wartości jako string;
		for (i = 0 ; i < anwserArray.length ; i++){
			score += anwserArray[i].value*1
		}

		// po zatwierdzeniu quizu - maluje wszystkie odpowiedzi na czerwono;
		label.css('color','red');
		// po zatwierdzeniu quizu - maluje wszystkie poprawne odpowiedzi na zielono;
		for (j = 0 ; j < label.length ; j++){
			var value = $(questionArray[j]).attr('value');
			if (value === '1'){
				$(label[j]).css('color','green');
			}
		}

		// przedstawia wyniki quizu;
		$('#result').html('Uzyskałeś punktów: ' + score + '/' + sectionArray.length + '.');
		$('#results').fadeIn();

console.log(questionArray.length/4/100*20);

		function comment(){
		if (score <= questionArray.length/4/100*20) {
			$('h2').html('Ale z ciebie ciamajda...');
			$('h2').css('color','#990000')
		}
		else if (score > questionArray.length/4/100*20 && score <= questionArray.length/4/100*40 ) {
			$('h2').html('Trochę słabo...');
			$('h2').css('color','#990000')
		}
		else if (score > questionArray.length/4/100*40 && score <= questionArray.length/4/100*60 ) {
			$('h2').html('Nie jest źle.');
			$('h2').css('color','#336600')
		}
		else if (score > questionArray.length/4/100*60 && score <= questionArray.length/4/100*80) {
			$('h2').html('Sporo wiesz!');
			$('h2').css('color','#336600')
		}
		else if (score > questionArray.length/4/100*80) {
			$('h2').html('Jesteś super!');
			$('h2').css('color','#336600')
		}
	}

	comment();

	});

	$('#repeat').on('click', function(){
		$('#results').fadeOut();
		questionArray.prop("checked", false);
		label.css('color','black');
	});

	$('#show').on('click', function(){
		$('#results').fadeOut();
	});

});
