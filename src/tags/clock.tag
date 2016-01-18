<clock>
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" 
    onclick={ test } 
    class={ show: isShow }
  >
    <circle name="frame" class="frame" cx="50" cy="50" r="49"></circle>
    <line 
      hide={ opts.removeSecond } 
      name="secondHand" class="second" x1="50" y1="50" x2="50" y2="12"
    ></line>
    <line 
      hide={ opts.removeMinute } 
      name="minuteHand" class="minute" x1="50" y1="50" x2="50" y2="2"
    ></line>
    <line 
      hide={ opts.removeHour } 
      name="hourHand" class="hour" x1="50" y1="50" x2="50" y2="24"
    ></line>
    <circle name="center" class="center" cx="50" cy="50" r="4"></circle>
  </svg>
  <style scoped>
    :scope {
      display: block;
      width: 100px;
      margin: 10px;
    }
    svg {
      opacity: 0;
      transition: opacity 1s ease-out;
      -moz-transition: opacity 1s ease-out;
      -webkit-transition: opacity 1s ease-out;
      vertical-align: top;
    }
    svg.show {
      opacity: 1;
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
      fill: #FFF;
      stroke: #CCC;
      stroke-width: 1px;
    }
  </style>

  <script>
    var ClockMixin = require('../mixins/clock');
    this.mixin(ClockMixin);
  </script>
</clock>

