'use strict';

(function () {
  var wizards = [];

  var successHandler = function (data) {
    wizards = data;
    window.render(wizards);
  };

  // var successHandler = function (wizards) {
  //   var fragment = document.createDocumentFragment();
  //   for (var i = 0; i < 4; i++) {
  //     fragment.appendChild(renderWizard(wizards[window.util.getRandom(0, wizards.length)]));
  //   }
  //   similarListElement.appendChild(fragment);
  //
  //   document.querySelector('.setup-similar').classList.remove('hidden');
  //
  //   setupWizard.querySelector('.wizard-coat').addEventListener('click', function () {
  //     setupWizard.querySelector('.wizard-coat').style.fill = window.util.randomGenerator(coatColors);
  //   });
  //
  //   setupWizard.querySelector('.wizard-eyes').addEventListener('click', function () {
  //     setupWizard.querySelector('.wizard-eyes').style.fill = window.util.randomGenerator(eyesColors);
  //   });
  //
  //   setupPlayer.querySelector('.setup-fireball-wrap').addEventListener('click', function () {
  //     setupPlayer.querySelector('.setup-fireball-wrap').style.background = window.util.randomGenerator(fireballColors);
  //   });
  // };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: gold;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '27px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backendLoad(successHandler, errorHandler);


})();
