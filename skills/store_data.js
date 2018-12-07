module.exports = function(controller) {
  controller.studio.validate('welcome', 'name', function(convo, next) {
    var name = convo.extractResponse('name');
    convo.setVar('name', name);
    next();
  });
  
  controller.studio.validate('welcome', 'who', function(convo, next) {
    var who = convo.extractResponse('who');
    convo.setVar('who', who);
    next();
  });
  
  controller.studio.validate('welcome', 'age', function(convo, next) {
    var age = convo.extractResponse('age');
    convo.setVar('age', age);
    next();
  });
}
