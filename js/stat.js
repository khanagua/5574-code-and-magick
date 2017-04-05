'use strict';
window.renderStatistics = function (ctx, names, times) {
  // отрисовываем облако и его тень
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  // отрисовываем текст на облаке
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', 130, 40);
  ctx.fillText('Список результатов:', 130, 60);

  // Находим максимальное время
  var maxTime = getMaxTime(times);

  /**
  * Получить максимальное время
  * @param {object} times2 все времена
  * @return {Number}
  */
  function getMaxTime(times2) {
    for (var i = 0; i < times2.length; i++) {
      var max = 0;
      var time = times2[i];
      if (time > max) {
        max = time;
      }
    }
    return max;
  }

  // отрисовываем гистограмму на облаке
  for (var i = 0; i < times.length; i++) {
    renderHistogram(i, times[i]);
  }
  /**
  * отрисовать гистограмму
  * @param {number} index шаг
  * @param {object} time все времена
  */
  function renderHistogram(index, time) {
    // переменные для гистограммы на облаке
    var histogramHeight = 150;                  // px высота колонки;
    var histogramWidth = 40;                    // px ширина колонки;
    var indent = 50;                            // px расстояние между колонками;
    var initialX = 150;                         // px координата x первой колонки;
    var initialY = 100;                         // px координата y первой колонки;
    var stepY = histogramHeight / maxTime;      // цена деления шкалы по самому худшему времени;
    var stepX = histogramWidth + indent;        // шаг по ширине X;
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText(time.toFixed(0), (initialX + stepX * index), initialY - 10);
    if (names[index] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var opacity = randomOpacity();
      ctx.fillStyle = 'rgba(0, 0, 255, ' + opacity + ')';
    }
    ctx.fillRect((initialX + stepX * index), (250 - time * stepY), histogramWidth, time * stepY);
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText(names[index], (initialX + stepX * index), 270);
  }
  /**
  * Получить степень прозрачности
  * @return {Number}
  */
  function randomOpacity() {
    var color = Math.random();
    return color;
  }
};
