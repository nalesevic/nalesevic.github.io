$(document).ready(function() {



  var app = $.spapp({pageNotFound : 'error_404'}); // initialize
  // define routes
  app.route({view: '/', load: 'home.html' });
  app.route({view: 'home', load: 'home.html' });
  app.route({view: 'projects', load: 'projects.html' });
  // run app
  app.run();

});
