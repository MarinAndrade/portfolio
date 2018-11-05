	$(document).ready(function(){

		var ulNav= "#nav", openNav = "active";

		$('.toggle-menu').click(function(e){

				if($(ulNav).hasClass(openNav)){
					$(ulNav).removeClass(openNav);
				}else{
					$(ulNav).addClass(openNav);
				}
				e.preventDefault();
		})
	});

	$(document).ready(function(){
    $(".toggle-menu").click(function(){
        $(".toggle-menu").toggleClass("open");
    });
});
