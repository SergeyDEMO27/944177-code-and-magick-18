'use strict';
(function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  // var setupWizard = document.querySelector('.setup-wizard');
  var setupPlayer = document.querySelector('.setup-player');

  // var names = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
  // var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  // var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  // var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  // var requiredWizards = 4;

  // var getWizards = function (wizardCount) {
  //   var wizards = [];
  //   for (var i = 0; i < wizardCount; i++) {
  //     var wizard = {
  //       name: window.util.randomGenerator(names) + window.util.randomGenerator(surnames),
  //       coatColor: window.util.randomGenerator(coatColors),
  //       eyesColor: window.util.randomGenerator(eyesColors)
  //     };
  //     wizards.push(wizard);
  //   }
  //   return wizards;
  // };
  // var wizards = getWizards(requiredWizards);

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  window.render = function (data) {
    var takeNumber = data.length > 4 ? 4 : data.length;
    similarListElement.innerHTML = '';
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < takeNumber; i++) {
      fragment.appendChild(renderWizard((data[i])));
    }
    similarListElement.appendChild(fragment);

    document.querySelector('.setup-similar').classList.remove('hidden');

    // setupWizard.querySelector('.wizard-coat').addEventListener('click', function () {
    //   setupWizard.querySelector('.wizard-coat').style.fill = window.util.randomGenerator(coatColors);
    // });
    // setupWizard.querySelector('.wizard-eyes').addEventListener('click', function () {
    //   setupWizard.querySelector('.wizard-eyes').style.fill = window.util.randomGenerator(eyesColors);
    // });
    setupPlayer.querySelector('.setup-fireball-wrap').addEventListener('click', function () {
      setupPlayer.querySelector('.setup-fireball-wrap').style.background = window.util.randomGenerator(fireballColors);
    });
  };
})();
