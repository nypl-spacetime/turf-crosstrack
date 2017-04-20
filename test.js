const test = require('tape')
const crosstrack = require('./')

test('crosstrack', function (t) {
  const point = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-103.35, 36.88]
    }
  }

  const segment = {
    type: 'LineString',
    coordinates: [
      [-114.96, 36.87],
      [-98.79, 46.07]
    ]
  }

  const distToLine = crosstrack(point, segment, 'miles')

  t.ok(distToLine, 'should return a number')
  t.equal(Math.abs(distToLine - 402.27495505732935) < 0.001, true, 'should be about 402 miles')
  t.end()
})
