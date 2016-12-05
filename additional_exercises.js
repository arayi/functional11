
// Length of an array

function lenR(x) {
  return (!x[0] ? 0 : lenR(x.slice(0, -1) + 1))
}

