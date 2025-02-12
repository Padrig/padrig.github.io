const key = 'Q659djitxtSLVqApDGko';
(function Tiles() {
    const center = [52.449, -3.5402];

    const map = L.map('map').setView(center, 14); //starting position
    L.tileLayer(`https://api.maptiler.com/tiles/ee8ebe51-0b4e-4a32-b444-ae919ed160ad/{z}/{x}/{y}?key=${key}`,{ //style URL
      tileSize: 512,
      zoomOffset: -1,
      minZoom: 1,
      attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
      crossOrigin: true
    }).addTo(map);
    fetch('/homesteads.json')
    .then(response => response.json())
    .then(({ response }) => response.docs)
    .then(items => {
        items.forEach(place => {
          const point = place.coordinates.split(',');
          L.marker(point).addTo(map);
        })
    });
})();
