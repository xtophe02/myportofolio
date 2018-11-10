$("ul").on("click", "li", function() {
	// console.log($(this).text());
	$(this).toggleClass("complete");
});
$("ul").on("click","span", function(event) {
	// console.log($(this).text());
	
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$('input[type="text"]').on("keypress", function(ev){
	if(ev.which === 13) { //key enter
		var value = $(this).val();
		$(this).val("");
		var stringValue = "<li><span>";
		stringValue += "<i class='fa fa-trash' aria-hidden='true'>";
		stringValue += "</i></span> ";
		stringValue += value;
		stringValue += "</li>";

		$("ul").append(stringValue);
	}
	
});
$(".fa-plus").on("click", function(){
	// console.log("ok");
	$('input[type="text"]').fadeToggle(400);
});