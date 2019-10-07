'use strict';

(function () {

  window.util = {
    randomGenerator: function (array) {
      return (array[Math.floor(Math.random() * array.length)]);
    },
    getRandom: function (firstNumber, secondNumber) {
      return (Math.floor(Math.random() * (Math.floor(secondNumber) - Math.ceil(firstNumber))) + Math.ceil(firstNumber));
    }
  };

})();
