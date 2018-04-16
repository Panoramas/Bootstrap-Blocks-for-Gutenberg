;(function($) {
	"use strict"
	$(document).ready(function() {

		// Enable / Disable Block
		// $(".js-gutenblocks-toggle-state").click(function(e) {
		// 	e.preventDefault()
    //
		// 	var $parent = $(this).parents(".gutenblocks-block")
		// 	var $button = $(this)
		// 	$parent.toggleClass("is-active")
    //
		// 	var $buttonLabel = $button.html()
		// 	$button.html("...")
    //
		// 	var data = {
		// 		action: "toggle_block",
		// 		command: $(this).attr("data-command"),
		// 		block: $(this).attr("data-block")
		// 	}
    //
		// 	$.ajax({
		// 		type: "POST",
		// 		url: ajaxurl,
		// 		data: data
		// 	}).done(function(response) {
		// 		// invert command
		// 		var $invertCommand = $(this).attr("data-invert-command")
		// 		$button.attr(
		// 			"data-invert-command",
		// 			$button.attr("data-command")
		// 		)
		// 		$button.attr("data-command", $invertCommand)
    //
		// 		$button.html($button.attr("data-invert-label"))
		// 		$button.attr("data-invert-label", $buttonLabel)
		// 	})
		// })

      // toggle blocks
      $('.block-toggle__check').on('change', function(e){
        e.preventDefault()

        var block = $(this).data('block')
        var data = {
              action: 'toggle_block',
              block: $(this).attr("data-block")
            }

        $.ajax({
          type: "POST",
          url: ajaxurl,
          data: data
        }).done(function(response) {
          console.log('change '+block)
          console.log('enabled blocks are now =>')
          console.log(response)
        })
      })

      // Reset Options to default state
      $('.bsgut_restore-default').on('click', function(e){
        e.preventDefault()

        var data = {
              action: 'restore_default'
            }

        $.ajax({
          type: "POST",
          url: ajaxurl,
          data: data
        }).done(function(response) {
          console.log('all done');
        })
    })
  })
})(jQuery);
