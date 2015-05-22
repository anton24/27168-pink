ymaps.ready(function () {
    var myMap = new ymaps.Map('yandex-map', {
            center: [59.936344, 30.321014],
            zoom: 16,
            controls: []
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Pink'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/map-marker.svg',
            // Размеры метки.
            iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0]
        });

    myMap.geoObjects.add(myPlacemark);
});
