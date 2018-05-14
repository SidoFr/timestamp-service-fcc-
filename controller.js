let timestamp, convertedTS, month, day, year;

exports.returnTS = function(req, res) {
  // if it is a timestamp
  if (req.params.timestamp.split(' ').length === 1 && req.params.timestamp.length === 10) {
    timestamp = req.params.timestamp;
  const date = new Date(timestamp * 1000);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  [month, day, year] = [months[date.getMonth()], date.getDate(), date.getFullYear()];
  convertedTS = `${month} ${day}, ${year}`;
  } // if it is a date
  else if (req.params.timestamp.split(' ').length === 3) {
    const entry = req.params.timestamp.split(' ');
    [month, day, year] = [entry[0], entry[1], entry[2]];
    convertedTS = `${month} ${day}, ${year}`;
    timestamp = new Date(convertedTS).getTime() / 1000;
  } else {
    timestamp = null;
    convertedTS = null;
  }
  
const result = {
    unix: `${timestamp}`,
    natural: `${convertedTS}`,
}
  res.json(result);
};
