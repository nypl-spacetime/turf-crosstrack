# turf-crosstrack

Find the distance between a point and a line segment.

Adapted from https://github.com/jczaplew/turf-crosstrack.

## Install

````
npm install nypl-spacetime/turf-crosstrack
````

## Parameters

| Name      | Type               | Description                                                     |
|:----------|:-------------------|:----------------------------------------------------------------|
| `point`   | GeoJSON Point      | Point to measure distance from                                  |
| `segment` | GeoJSON LineString | Line with __two points__                                        |
| `units`   | String             | Units of result (`miles`, `kilometers`, `degrees` or `radians`) |

## Usage

````
crosstrack(lineStart, lineEnd, point, units)
````

## Example

```js
const point = require("@turf/point')
const crosstrack = require('turf-crosstrack')

const point = {
  type: 'Point',
  coordinates: [-103.35, 36.88]
}

const segment = {
  type: 'LineString',
  coordinates: [
    [-114.96, 36.87],
    [-98.79, 46.07]
  ]
}

const pointToLineDistance = crosstrack(point, segment, 'miles')

console.log(pointToLineDistance)
```

## Credits
Formula via http://www.movable-type.co.uk/scripts/latlong.html