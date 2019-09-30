'use strict';

(function () {

  window.util = {
    randomGenerator: function (array) {
      return (array[Math.floor(Math.random() * array.length)]);
    }
  };

})();
