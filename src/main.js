// main.js

// via http://www.triplet.fi/blog/adding_compiled_riot_tags_to_your_gulp_browserify_build/

var riot = require('riot');

require('./tags/clock.tag');

riot.mount('clock');
