module.exports = function(controller) {
  
  controller.studio.validate('keeping_independent', 'option', function(convo, next) {
    var option = convo.extractResponse('option');
    var options = ( typeof convo.vars.options != 'undefined' ) ? convo.vars.options : []
    options.push(option)
    if (options.length == 3) {
      convo.gotoThread('show_options')
    } else {
      convo.setVar('options', options);
      next();
    }
  });
  
  controller.studio.beforeThread('keeping_independent', 'options', function(convo, next) {
    var options = convo.vars.options
    var quickReplies = convo.threads.options[0].quick_replies
    if (typeof options != 'undefined') {
      // Filter through options and delete any previously chosen options from
      // the quick replies
      convo.vars.options.forEach(function(option) {
        convo.threads.options[0].quick_replies = quickReplies.filter(function(value) {
          return value.title != option
        })
      })
    }
    next();
  })

}
