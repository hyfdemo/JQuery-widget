if(window.jQuery===undefined)
	throw new Error("myDropdown部件依赖于jQuery")
jQuery.fn.dropdown=function(){
		this.addClass("dropdown");
		this.children("a").attr("data-trigger","dropdown").next().addClass("dropdown-menu fade");
		$('[data-trigger="dropdown"]').click(
			function(e){
			e.preventDefault();
			$(this).next().toggleClass("in");
		}
	);
}
