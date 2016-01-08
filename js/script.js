$(function(){ 							   

	// radiys box
	$('.menu_nav ul li a').css({"border-radius": "8px", "-moz-border-radius":"8px", "-webkit-border-radius":"8px"});
	$('.sb_menu li a, .ex_menu li a').css({"border-radius": "15px", "-moz-border-radius":"15px", "-webkit-border-radius":"15px"});
	$('.mainbar .spec a').css({"border-radius": "10px", "-moz-border-radius":"10px", "-webkit-border-radius":"10px"});
	$('.pagenavi a, .pagenavi .current').css({"border-radius": "5px", "-moz-border-radius":"5px", "-webkit-border-radius":"5px"});
	
});	
function autocomplet() {
	var min_length = 0; // min caracters to display the autocomplete
	var keyword = $('#country_id').val();
	if (keyword.length >= min_length) {
		$.ajax({
			url: 'ajax_refresh.php',
			type: 'POST',
			data: {keyword:keyword},
			success:function(data){
				$('#country_list_id').show();
				$('#country_list_id').html(data);
			}
		});
	} else {
		$('#country_list_id').hide();
	}
}
 
// set_item : this function will be executed when we select an item
function set_item(item) {
	// change input value
	$('#country_id').val(item);
	// hide proposition list
	$('#country_list_id').hide();
}