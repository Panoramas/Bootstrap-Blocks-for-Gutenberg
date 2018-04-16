;(function($) {
	"use strict"
	$(document).ready(function() {


      // toggle blocks
      $('.block-toggle__check').on('change', function(e){
        e.preventDefault()

        var block = $(this).data('block')
        var data = {
              action: 'bsgut_toggle_block',
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
              action: 'bsgut_restore_default'
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
