'use strict';

// Показываем окно настроек
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
getRandomObject();

// Массивы констант
var WIZARD_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SONAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COLOR_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_COLOR_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

/**
* Получить рандомное целое число
* @param {Number} min минимальное число
* @param {Number} max максимально число
* @return {Number}
*/

function() {
  for (var i = 0; i <= 8; i++) {
  var wizards = [];
}


/**
* Получить объект из рандомных данных
* @return {object}
*/
function getRandomObject() {
  var min = 0;
  var RandomNumberName = Math.random() * (WIZARD_NAME.length - min) + min;
  var RandomNumberSoname = Math.random() * (WIZARD_SONAME.length - min) + min;
  var RandomNumberCoat = Math.random() * (WIZARD_COLOR_COAT.length - min) + min;
  var RandomNumberEyes = Math.random() * (WIZARD_COLOR_EYES.length - min) + min;
  var randomObject = {
    name: WIZARD_NAME[RandomNumberName] + ' ' + WIZARD_SONAME[RandomNumberSoname],
    coatColor: WIZARD_COLOR_COAT[RandomNumberCoat],
    eyesColor: WIZARD_COLOR_EYES[RandomNumberEyes],
  };
  return randomObject;
}

