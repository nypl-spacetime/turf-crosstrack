const turf = {
  bearing: require('@turf/bearing'),
  distance: require('@turf/distance'),
  meta: require('@turf/meta')
}

function toRad (degree) {
  return degree * Math.PI / 180
}

module.exports = function (point, segment, units) {
  const pointCoords = turf.meta.coordAll(point)
  const segmentCoords = turf.meta.coordAll(segment)

  if (pointCoords.length !== 1) {
    throw new Error('point should be Point, Point Feature, or FeatureCollection with one Point')
  }

  if (segmentCoords.length !== 2) {
    throw new Error('point should be LineString, LineString Feature, or FeatureCollection with one LineString; LineString must have two points')
  }

  const lineStart = segmentCoords[0]
  const lineEnd = segmentCoords[1]

  let R = 0

  switch (units) {
    case 'miles':
      R = 3960
      break
    case 'kilometers':
      R = 6373
      break
    case 'degrees':
      R = 57.2957795
      break
    case 'radians':
    default:
      R = 1
      break
  }

  const c = turf.distance(lineStart, point, units)

  const bearing1 = toRad(turf.bearing(lineStart, point))
  const bearing2 = toRad(turf.bearing(lineStart, lineEnd))

  return Math.abs(Math.asin(Math.sin(c / R)) * Math.sin(bearing1 - bearing2) * R)
}
