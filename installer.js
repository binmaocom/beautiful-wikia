var sudo = require( 'sudo' );
var options = {
  cachePassword: true,
  prompt: 'Enter your sudo password to continue installation of global npm modules!'
};

var npmInstall = [
  'npm', 'install', '-g'
];

var dependencies = [
  'bower', 'jshint', 'sails', 'nodemon'
];

var children = [];

dependencies.forEach(function( dep ) {
  var child = sudo( npmInstall.concat([ dep ]), options );
  child.stdout.on( 'data', function( data ) {
    console.log( data.toString() );
  });
  children.push( child );
});

sudo('bower', 'install');