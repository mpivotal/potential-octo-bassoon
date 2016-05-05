$(document).ready( function() {
  if ( $('.org .apps').length != 0 ) {
    // app status selection
    var appstates = $('.app-states .status')
    appstates.click( function() {
      appstates.removeClass('active')
      $(this).addClass('active')
    })
    // app selection
    var checkboxes = $("input[type='checkbox'][name='apps[]']")
    var actions = $("button#app-actions")
    $("input[type='checkbox'][name='apps[]'][value='all']").click( function() {
      checkboxes.prop('checked', checkboxes.prop('checked'))
    })
    checkboxes.click( function() {
      // toggle the actions button
      if ($("input:checkbox:checked").length > 0) {
        actions.prop('disabled', false)
      } else {
        actions.prop('disabled', true)
      }
      // toggle the rename action
      if ($("input:checkbox:checked").length > 1) {
        $('.rename').addClass('type-neutral-5').addClass('bg-neutral-11').prop('style', 'cursor: default;')
      } else {
        $('.rename').removeClass('type-neutral-5').removeClass('bg-neutral-11').prop('style', 'cursor: pointer;')
      }
    })
  }
  console.log( "Howdy, y'all!" )
})
