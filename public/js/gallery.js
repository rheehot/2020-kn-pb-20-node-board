var $grid = $('.list-wrapper').imagesLoaded( function() {
	$(".loader").hide();
	$grid.css("visibility", "visible");
	$grid.masonry({
		itemSelector: '.list',
		columnWidth: '.list-sizer',
		percentPosition: true
	});
});

function onModal(id) {
	$.get('/gallery/view/'+id, function(r){
		var src = '/upload/' + r.savefile.substr(0, 6) + '/' + r.savefile;
		var src2 = '/upload/' + r.savefile2.substr(0, 6) + '/' + r.savefile2;
		$(".modal-wrapper").find(".def-img").attr("src", src);
		$(".modal-wrapper").find(".hover-img").attr("src", src2);
		$(".modal-wrapper").css("display", "flex");
	});
}

$(".modal-wrapper .bt-close").click(function(){
	$(".modal-wrapper").css("display", "none");
});

$(".modal-wrapper .bt-def").click(function(){
	$(".modal-wrapper").find(".def-img").stop().animate({"opacity": 1}, 500);
	$(".modal-wrapper").find(".hover-img").stop().animate({"opacity": 0}, 500);
});

$(".modal-wrapper .bt-hover").click(function(){
	$(".modal-wrapper").find(".def-img").stop().animate({"opacity": 0}, 500);
	$(".modal-wrapper").find(".hover-img").stop().animate({"opacity": 1}, 500);
});




/* var grid = GridStack.init({
	animate: true,
}); */



function onGallerySubmit(f) {
	var title = f.title.value.trim();
	var writer = f.writer.value.trim();
	if(title == '') {
		alert("제목을 작성해 주세요.");
		f.title.focus();
		return false;
	}
	if(writer == '') {
		alert("작성자를 기재해 주세요.");
		f.writer.focus();
		return false;
	}
	return true;
}