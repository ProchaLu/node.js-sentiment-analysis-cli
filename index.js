const sentiment = require('sentiment');
const sentimentAnalysis = new sentiment();

const result = sentimentAnalysis.analyze('i like dogs, but hate cats');

console.log(result);

const roundNumbers = result.comparative.toFixed(2);
const numberPercent = roundNumbers * 100;

if (result.score > 0) {
  console.log('positive');
} else if (result.score < 0) {
  console.log('negative');
} else {
  console.log('neutral');
}

console.log(numberPercent + '%');
