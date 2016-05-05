$(document).ready( function() {
  if ( $('.org .apps').length != 0 ) {
    // app selection
    var checkboxes = $("input[type='checkbox'][name='apps[]']")
    var actions = $("button#app-actions")
    $("input[type='checkbox'][name='apps[]'][value='all']").click( function() {
      checkboxes.prop('checked', checkboxes.prop('checked'))
    })
    checkboxes.click( function() {
      if ($("input:checkbox:checked").length > 0) {
        actions.prop('disabled', false)
      } else {
        actions.prop('disabled', true)
      }
    })
  }
  console.log( 'hi' )
})
