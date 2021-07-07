
function formatTime(date) {
  let hours = date.getHours() % 12;
  if (hours === 0) {
    hours = 12;
  }
  const mins = date.getMinutes();
  const zeroPaddedMins = mins < 10 ? `0${mins}` :  mins;
  return `${hours}:${zeroPaddedMins} ${date.getHours() < 12 ? 'am' : 'pm'}`;
}

export { formatTime };
