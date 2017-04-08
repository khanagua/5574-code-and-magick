'use strict';

// Показываем окно настроек
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

/**
* Получить рандомное целое число
* @param {Number} min минимальное число
* @param {Number} max максимально число
* @return {Number}
*/
function getRandomNumber(min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber;
}

/**
* Создать объект из рандомных данных
* @return {object}
*/
function makeRandomObject() {
  var min = 0;
  var WIZARD_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SONAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COLOR_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_COLOR_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var randomNumberName = getRandomNumber(min, WIZARD_NAME.length);
  var randomNumberSoname = getRandomNumber(min, WIZARD_SONAME.length);
  var randomNumberCoat = getRandomNumber(min, WIZARD_COLOR_COAT.length);
  var randomNumberEyes = getRandomNumber(min, WIZARD_COLOR_EYES.length);
  var randomObject = {
    name: WIZARD_NAME[randomNumberName] + '<br>' + WIZARD_SONAME[randomNumberSoname],
    // пришлось добавить <br>, иначе сильно разметка съезжает
    // и иногда слипаются маги -)
    coatColor: WIZARD_COLOR_COAT[randomNumberCoat],
    eyesColor: WIZARD_COLOR_EYES[randomNumberEyes],
  };
  return randomObject;
}

var numberWizards = 4;  // количество магов
/**
* Создать массив магов
* @return {object}
*/
function makeArr() {
  var wizardsArr = [];
  for (var i = 0; i < numberWizards; i++) {
    wizardsArr[i] = makeRandomObject();
  }
  return wizardsArr;
}

// создаем массив магов
var wizards = makeArr();

// отрисовываем элементы
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

/**
* Заполнить шаблон мага
* @param {object} wizard элемент массива магов
* @return {DOM-object}
*/
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').innerHTML = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

/**
* Подготовить фрагмент с элементами для вставки
* @return {DOM-object}
*/
var renderFragment = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < numberWizards; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  return fragment;
};

// Добавляем магов на страницу
similarListElement.appendChild(renderFragment());

// Показываем окно похожих персонажей
userDialog.querySelector('.setup-similar').classList.remove('hidden');

