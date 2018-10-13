var deleteLog = false;

$(document).ready(function () {
	$('#pagepiling').pagepiling({
		menu: '',
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
		sectionsColor: ['#FC9D9A', '#FE4365', '#F9CDAD', '#C8C8A9', '#83AF9B', '#FC9D9A'],
		loopTop: true,
		loopBottom: true,
		navigation: {
			'position': 'right',
			   'tooltips': ['Home', 'Dashboard', 'History', 'History 2', 'Story', 'Quiz']
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
});

console.log('Scripts js connected');