var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

Backbone.$ = $;

var Marionette = require('backbone.marionette');

var app = new Marionette.Application();

app.on('start', function() {
  Backbone.history.start();
  console.log('history started');
});

app.start();
console.log('app file finished');
