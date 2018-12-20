var og = require('open-graph');
var URL = require('url').URL;

module.exports = function(webserver, controller) {
  
  webserver.post('/link_preview', function(req, res) {
    var url = req.body.url;
    og(url, function(err, meta){
      res.setHeader('Content-Type', 'application/json');
      var baseURL = new URL(url).origin;
      if (meta.image !== undefined && !meta.image.url.startsWith('http')) {
        meta.image.url = baseURL + meta.image.url;
      }
      res.send(JSON.stringify(meta));
    })
  });

}
