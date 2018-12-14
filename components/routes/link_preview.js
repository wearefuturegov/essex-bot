var og = require('open-graph');

module.exports = function(webserver, controller) {
  
  webserver.post('/link_preview', function(req, res) {
    og(req.body.url, function(err, meta){
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(meta));
    })
  });

}
