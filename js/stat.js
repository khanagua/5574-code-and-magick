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
    var max = 0;
    var maxIndex = 0;
    
    for (var i = 0; i < times.length; i++) {
        var time = times[i];
        if (time > max) {
            max = time;
            maxIndex = i;
        }
    }

    // переменные для гистограммы на облаке
    var histogramHeight = 150;              // px высота колонки;
    var histogramWidth = 40;                // px ширина колонки;
    var indent = 50;                        // px расстояние между колонками;
    var initialX = 150;                     // px координата x первой колонки;
    var initialY = 100;                     // px координата y первой колонки;
    var stepY = histogramHeight / max;      // шаг по высоте Y
    var stepX = histogramWidth + indent;    // шаг по ширине X
    
    // отрисовываем гистограмму на облаке
    for (var i = 0; i < times.length; i++) {
        ctx.fillStyle = '#000';
        ctx.font = '16px PT Mono';
        ctx.fillText(times[i].toFixed(0), (initialX + stepX * i), initialY - 10);
        if (names[i] === 'Вы') {
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        } else {
            var opacity = RandomOpacity();
            ctx.fillStyle = 'rgba(0, 0, 255, ' + opacity + ')';
        }
        ctx.fillRect((initialX + stepX * i), (250 - times[i] * stepY), histogramWidth, times[i] * stepY);
        ctx.fillStyle = '#000';
        ctx.font = '16px PT Mono';
        ctx.fillText(names[i], (initialX + stepX * i), 270);
    }

    /**
    * Получить степень прозрачности
    * @returns {Number}
    */
    function RandomOpacity() {
        var color = Math.random();
        return color;
    }

}
