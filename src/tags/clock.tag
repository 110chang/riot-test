<clock>
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" onclick={test}>
    <line hide={opts.removeSecond} class="second" x1="50" y1="50" x2="50" y2="12"></line>
    <line hide={opts.removeMinute} class="minute" x1="50" y1="50" x2="50" y2="2"></line>
    <line hide={opts.removeHour} class="hour" x1="50" y1="50" x2="50" y2="24"></line>
    <circle class="center" cx="50" cy="50" r="4"></circle>
    <circle class="frame" cx="50" cy="50" r="49"></circle>
  </svg>
  <style scoped>
    :scope {
      display: block;
      width: 100px;
      margin: 10px;
    }
    svg {
      vertical-align: top;
    }
    svg line {
      stroke: #000;
      stroke-width: 2px;
      stroke-linecap: square;
      transform-origin: 50px 50px;
    }
    .hour {
      stroke-width: 4px;
      stroke: #F00;
    }
    .second {
      stroke-width: 1px;
      stroke: #999;
    }
    .frame {
      fill: none;
      stroke: #CCC;
      stroke-width: 1px;
    }
  </style>

  <script>
    var $ = require('jquery');
    var moment = require('moment');
    var ClockMixin = require('../mixins/clock');

    this.mixin(ClockMixin);

    //test() {}

    function clock() { 
      var t = moment();
      var second = t.second() * 6;
      var short = t.minutes() * 6;
      var long = t.hours() % 12 / 12 * 360 + (short / 12);
      $('.hour').css('transform', 'rotate(' + long + 'deg)');
      $('.minute').css('transform', 'rotate(' + short + 'deg)');
      $('.second').css('transform', 'rotate(' + second + 'deg)');
    }
    
    function refreshClock() {
      clock(), setTimeout(refreshClock, 1000)
    }
    refreshClock();

  </script>
</clock>

