module.exports = function(controller) {
  
  controller.studio.validate('keeping_independent', 'option', function(convo, next) {
    var option = convo.extractResponse('option');
    var options = ( typeof convo.vars.options != 'undefined' ) ? convo.vars.options : []
    options.push(option)
    if (options.length == 3) {
      convo.gotoThread('show_options')
    } else {
      convo.setVar('options', options);
      console.log(options)
      next();
    }
  });

}
