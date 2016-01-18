//Mixins: clock.js

var $ = require('jquery');

var ClockMixin = {

  HOUR_HAND: 'Hour',
  MINUTE_HAND: 'Minute',
  SECOND_HAND: 'Second',

  init: function() {
    this.on('mount', function() {
      console.log(this.opts);
    });
    this.parent.one('clockTick', this.wakeup);
    this.parent.on('clockTick', this.draw);
  },
  test: function(e) {
    console.log(this.opts);
  },
  wakeup: function() {
    this.isShow = true;
    this.update();
  },
  draw: function(long, short, second) {
    this.drawHand(ClockMixin.SECOND_HAND, second);
    this.drawHand(ClockMixin.MINUTE_HAND, short);
    this.drawHand(ClockMixin.HOUR_HAND, long);
  },
  drawHand: function(type, deg) {
    if (!this.opts['remove' + type]) {
      $(this[type.toLowerCase() + 'Hand'])
        .css('transform', 'rotate(' + deg + 'deg)');
    }
  }
};

module.exports = ClockMixin;