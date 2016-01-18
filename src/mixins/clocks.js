//Mixins: clocks.js

var moment = require('moment');

var ClocksMixin = {
  init: function() {
    this.clocks = [{}, {
      removeSecond: true
    }, {
      removeHour: true
    }, {
      removeHour: true,
      removeMinute: true
    }];

    this.refresh();
  },
  clock: function() {
    var t = moment();
    var second = t.second() * 6;
    var short = t.minutes() * 6;
    var long = t.hours() % 12 / 12 * 360 + (short / 12);
    this.trigger('clockTick', long, short, second);
  },
  refresh: function() {
    this.clock();
    setTimeout(this.refresh, 1000);
  }
};

module.exports = ClocksMixin;