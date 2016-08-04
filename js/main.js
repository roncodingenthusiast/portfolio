$(document).ready(function(){
	var scroll_begin = 0;
	var projects = $('#projects');
	var offset = projects.offset();
	if(projects.length){
		$(document).scroll(function(){
			scroll_begin = $(this).scrollTop();
			if(scroll_begin > offset.top){
				$('.navbar').css('background-color', 'black');
			}else{
				$('.navbar').css('background-color', 'black');
			}
		}); 
	}
});
ReactDOM.render(React.createElement('span', null, 'I SEE REACT EVERYWHERE'), document.body);