const GIGASECONDS = 10 ** 9;

function gigasecondToMilli() {
  return GIGASECONDS * 1000;
}

export function gigasecond(date) {
  return new Date(date.getTime() + gigasecondToMilli());
}
