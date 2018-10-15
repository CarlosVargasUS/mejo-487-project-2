var deleteLog = false;

$(document).ready(function () {
	$('#pagepiling').pagepiling({
		menu: '',
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7','page8'],
		sectionsColor: ['#FC9D9A', '#FE4365', '#F9CDAD', '#C8C8A9', '#83AF9B', '#FC9D9A', '#FE4365', '#F9CDAD'],
		loopTop: true,
		loopBottom: true,
		navigation: {
			'position': 'right',
			   'tooltips': ['Home', 'Beginnings', 'Present', 'Ashley', 'Rosi', 'Cristina', 'Quiz','Sources']
		   },
		afterRender: function(){
			$('#pp-nav').addClass('custom');
		},
		afterLoad: function(anchorLink, index){
			if(index>1){
				$('#pp-nav').removeClass('custom');
			}else{
				$('#pp-nav').addClass('custom');
			}
		}
	});

	$(".left-info").flip();

	
	$('#slickQuiz').slickQuiz();

});

console.log('scripts is connected');
