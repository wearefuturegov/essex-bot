var og = require('open-graph-scraper');
var URL = require('url').URL;

module.exports = function(webserver, controller) {
  
  webserver.post('/link_preview', function(req, res) {
    var url = req.body.url;
    var options = {
      url: url,
      headers: { 
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'
      }
    }
    og(options, function(err, result){
      if (!err) {
        meta = result.data;
        var baseURL = new URL(url).origin;
        if (Array.isArray(meta.ogImage)) {
          meta.ogImage = meta.ogImage[0]
        }
        if (meta.ogImage !== undefined && !meta.ogImage.url.startsWith('http')) {
          meta.ogImage.url = baseURL + meta.ogImage.url;
        }
      } else {
        meta = {}
      }
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(meta));
    })
  });

}
