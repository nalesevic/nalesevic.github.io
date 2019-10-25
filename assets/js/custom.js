$(document).ready(function() {



  var app = $.spapp({pageNotFound : 'error_404'}); // initialize
  // define routes
  app.route({view: 'home', load: 'home.html' });
  app.route({view: 'projects', load: 'projects.html' });
  app.route({view: 'awards', load: 'awards.html' });
  // run app
  app.run();

});
