ymaps.ready(init);

function init() {
    // Создаем карту.
    var myMap = new ymaps.Map("map", {
                    center: [51.603040, 39.266723],
                    zoom: 15
                }),
                myGeoObject_1 = new ymaps.Placemark([51.603040, 39.266723], {
                    hintContent: "Техно-Гарант",
                    balloonContent: "Техосмотр Техно-Гарант"
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: "images/map-icon.png",
                    iconImageSize: [28, 42],
                    iconImageOffset: [-7, -38]//Сдвиг иконки
                });

    // Создаем ломаную, используя класс GeoObject.
    var myGeoObject = new ymaps.GeoObject({
            // Описываем геометрию геообъекта.
            geometry: {
                // Тип геометрии - "Ломаная линия".
                type: "LineString",
                // Указываем координаты вершин ломаной.
                coordinates: [
                    [51.600748, 39.253046],
                    [51.601799, 39.265363],
                    [51.602861, 39.265133],
                    [51.603021, 39.266833]
                ]
            },
            // Описываем свойства геообъекта.
            properties:{
                // Содержимое хинта.
                //hintContent: "Схема проезда в Техно-Гарант",
                // Содержимое балуна.
                //balloonContent: "Где пройти техосмотр?"
            }
        }, {
            // Задаем опции геообъекта.
            // Включаем возможность перетаскивания ломаной.
            draggable: false,
            // Цвет линии.
            strokeColor: "#E9514F",
            // Ширина линии.
            strokeWidth: 5
        });


    // Добавляем линии на карту.
    myMap.geoObjects
        .add(myGeoObject)
        .add(myGeoObject_1);
    myMap.behaviors.disable('scrollZoom');/* отключаем увеличение при скроле */
    //myMap.behaviors.disable('drag');/* отключаем увеличение при листании пальцем */
}
