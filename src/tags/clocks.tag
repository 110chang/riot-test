<clocks>
  <clock 
    each={ clocks }
    remove-hour={ removeHour } 
    remove-minute={ removeMinute } 
    remove-second={ removeSecond }
  ></clock>
  <script>
    var ClocksMixin = require('../mixins/clocks');
    this.mixin(ClocksMixin);
  </script>
</clocks>

