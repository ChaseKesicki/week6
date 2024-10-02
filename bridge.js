//Where in the world

let mapCenter = [45, -93]
let zoomLevel = 4

let bridgeMap = L.map('bridge-map').setView(mapCenter, zoomLevel)


//How zoomed in/out are we?

//tiles - what makes up our map

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(bridgeMap)

//when we have a set of objects, and they are all basically the same, its common
//to store as an array of objects
//all bridges have the same attributes (all have a name, a span, they are all bridges, etc.)

/*Verrazano-Narrows Bridge	New York, NY	1298.4	40.6066, -74.0447
Golden Gate Bridge	San Francisco and Marin, CA	1280.2	37.8199, -122.4783
Mackinac Bridge	Mackinaw and St Ignace, MI	1158.0	45.8174, -84.7278
George Washington Bridge	New York, NY and New Jersey, NJ	1067.0	40.8517, -73.9527
Tacoma Narrows Bridge	Tacoma and Kitsap, WA	853.44	47.2690, -122.5517 */



let bridgeList = [
    {name: 'Verrazano-Narrows Bridge', location: 'New York, NY', span: '1298.4', coordinates: [40.6066, -74.0447] },
    {name: 'Golden Gate Bridge', location: 'San Francisco and Marin, CA', span: '1280.2', coordinates: [37.8199, -122.4783] },
    {name: 'Mackinac Bridge', location: 'Mackinaw and St Ignace, MI', span: '1158.0', coordinates: [45.8174, -84.7278] }
]

bridgeList.forEach(function(bridgeObject) {

    let bridgeName = bridgeObject.name
    let bridgeCoorinates = bridgeObject.coordinates

    let bridgeMarker = L.marker(bridgeCoorinates)
    bridgeMarker.addTo(bridgeMap)
})