$(document).ready( function() {
  if ( $('.org .apps').length != 0 ) {
    // default state is active
    var defaultstate = $('.app-states .running')
    var crashing = $('.app-states .crashing')
    var total = $('.app-states .total')
    if ($('.apps-screen.running').length > 0) {
      defaultstate.addClass('active')
    }
    if ($('.apps-screen.crashing').length > 0) {
      crashing.addClass('active')
    }
    if ($('.apps-screen.total').length > 0) {
      total.addClass('active')
    }
    // app selection
    var checkboxes = $("input[type='checkbox'][name='apps[]']")
    var actions = $("button#app-actions")
    $("input[type='checkbox'][name='apps[]'][value='all']").click( function() {
      checkboxes.prop('checked', checkboxes.prop('checked'))
    })
    checkboxes.click( function() {
      // deselect the 'all' checkbox if only some checkboxes are selected
      if ($(this).prop('value') != 'all') {
        $("input[type='checkbox'][name='apps[]'][value='all']").prop('checked', false)
      }
      // select the 'all' checkbox if all are selected
      // if (checkboxes.prop('checked', true).length > checkboxes.length - 1) {
      //   $("input[type='checkbox'][value='all']").prop('checked', false)
      // }
      // toggle the actions button
      if ($("input:checkbox:checked").length > 0) {
        actions.prop('disabled', false)
      } else {
        actions.prop('disabled', true)
      }
      // toggle the rename action
      var single_app_actions = ['rename', 'delete', 'metrics', 'add-service']
      if ($("input:checkbox:checked").length > 1) {
        for (i in single_app_actions) {
          console.log(single_app_actions[i])
          $('.' + single_app_actions[i]).addClass('type-neutral-5').addClass('bg-neutral-11').prop('style', 'cursor: default;')
        }
      } else {
        for (i in single_app_actions) {
          console.log(single_app_actions[i])
          $('.' + single_app_actions[i]).removeClass('type-neutral-5').removeClass('bg-neutral-11').prop('style', 'cursor: pointer;')
        }
      }
    })
  }
  console.log( "Howdy, y'all!" )
})
