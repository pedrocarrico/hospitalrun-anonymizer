var fs = require('fs');
var path = require('path');

var anonymizerTypesDir = path.join(__dirname, 'types');
var anonymizers = {};

fs.readdirSync(anonymizerTypesDir).forEach((anonymizerTypeFile) => {
  const anonymizerType = anonymizerTypeFile.replace(/\.js$/, '');
  anonymizers[anonymizerType] = require(path.join(anonymizerTypesDir, anonymizerType));
});

function anonymize(record) {
  var recordType = record.id.substr(0, record.id.indexOf('_'));
  var anonymizer = anonymizers[recordType] || anonymizers.dontAnonymize;

  return anonymizer(record);
}

module.exports = anonymize;
