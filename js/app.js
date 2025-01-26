(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    function addLoadedClass() {
        window.addEventListener("load", (function() {
            setTimeout((function() {
                document.documentElement.classList.add("loaded");
            }), 0);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    function mapAdd() {
        var script = document.createElement("script");
        script.src = "https://api-maps.yandex.ru/2.1?apikey=8d7bd03a-f132-4234-ac7b-1e031670c1a1&lang=ru_RU&load=Map,Placemark";
        document.head.appendChild(script);
        setTimeout((function() {
            ymaps.ready(init);
        }), 1500);
    }
    if (document.querySelector("#map")) mapAdd();
    function init(ymaps) {
        let myMap = new ymaps.Map("map", {
            controls: [],
            center: [ 55.502474, 37.584969 ],
            zoom: 16
        });
        let myPlacemark = new ymaps.Placemark([ 55.502474, 37.584969 ], {
            balloonContentHeader: "Sushi",
            balloonContentBody: "ул. Манасчи Сагымбая 24 к.1",
            balloonContentFooter: "<a  href = 'tel:88129050600' > 8 (999) 999-99-99 </a >",
            hasBalloon: true,
            hideIconOnBalloonOpen: true
        }, {
            iconLayout: "default#imageWithContent",
            iconImageSize: [ 35, 35 ],
            iconImageOffset: [ -20, -20 ],
            iconContentOffset: [ 0, 0 ]
        });
        myMap.geoObjects.add(myPlacemark);
    }
    isWebp();
    addLoadedClass();
})();