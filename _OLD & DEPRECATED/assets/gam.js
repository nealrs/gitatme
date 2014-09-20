$(document).ready(function() {

	// expand & collapse toggle code
  $(".togit").click(function(){
    $(this).parent().parent().parent().find('.togbox').toggle();
    $(this).parent().parent().find('.togicon').toggle();
	});

	// initially collapse all entries
	$(".togit").parent().parent().parent().find('.togbox').toggle();
	$(".togit").parent().parent().find('.togicon').toggle();

	// id first entry, add green border, and expand it
	$('.body_cont').find('.blk').first().addClass('top_blk');
	$(".top_blk").find('.togbox').toggle();
	$(".top_blk").find('.togicon').toggle();

	// hide info div onclick
	$(".hide_info").click(function(){
    $(this).parent().parent().parent().parent().hide();
	});

	// kill ad info div onclick
	$(".hide_ad").click(function(){
		$(this).parent().parent().parent().hide();
	});

  // language selector code.
  $("select").change(function(){
    lang = $( "select option:selected" ).text().toLowerCase();

    if (lang == "all languages selected"){
      $(".lang_tag").parent().parent().parent().show();
    } else {
      $(".lang_tag:not(:contains('" + lang+ "'))").parent().parent().parent().hide();
      $(".lang_tag:contains('" + lang+ "')").parent().parent().parent().show();
      }
  });

});
