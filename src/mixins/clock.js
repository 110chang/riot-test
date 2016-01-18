//Mixins: clock.js

var ClockMixin = {
  init: function() {
    this.on('mount', function(e) {
      console.log(this.opts);
    });
  },
  test: function(e) {
    console.log(this.opts);
  }
};

module.exports = ClockMixin;