class CoordinateError extends Error {
  constructor(message, validSuggestion) {
    super(message);
    this.name = 'Coordinate error';
    this.suggestion = validSuggestion;
  }
}

function validateCoordinate(coordinate) {
  let suggestion = {
    x: 0,
    y: 0
  }
  if( coordinate.x ) {
    suggestion.x = coordinate.x;
  }
  if (coordinate.y) {
    suggestion.y = coordinate.y;
  }
  if( ! coordinate.x && ! coordinate.y) {
    throw new CoordinateError('Ninguna coordinda estaba presente', suggestion);
  }
  if (!coordinate.x) {
    throw new CoordinateError('La coordenada x no está presente', suggestion);
  }
  if (!coordinate.y) {
    throw new CoordinateError('La coordenada y no está presente', suggestion);
  }
}

try {
  var valid = validateCoordinate({x:34});
} catch( err ) {
  console.log(err.message, err.suggestion);
  console.log(err);
}