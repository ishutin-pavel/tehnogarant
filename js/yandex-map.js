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

				console.log("Отключили увеличение при скроле");
				myMap.behaviors.disable('scrollZoom');

		function checkWidth() {
			var windowSize = $(window).width();
			if (windowSize <= 1199) {
				myMap.behaviors.disable('drag');
				console.log("Отключили перемещение карты при нажатой левой кнопке мыши либо одиночным касанием");

				myMap.behaviors.enable('multiTouch');
				console.log("Включили масштабирование карты двойным касанием (например, пальцами на сенсорном экране)");
			}	else if (windowSize >= 1200) {
					myMap.behaviors.enable('drag');
					console.log("Включили перемещение карты при нажатой левой кнопке мыши либо одиночным касанием");
				}
		}//checkWidth

		// Execute on load
		checkWidth();
		// Bind event listener
		$(window).resize(checkWidth);
}
